import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import lodashGroupBy from 'lodash.groupby';
import lodashIsEmpty from 'lodash.isempty';
import lodashRemove from 'lodash.remove';

import DeleteIcon from '../../icons/Delete';

import { useToast } from '../../components/Toast';
import IconButton from '../../components/IconButton';
import Loader from '../../components/Loader';
import LanguageList from '../../components/LanguageList';

import {
  getSnippetsFromStorage,
  removeSnippetFromStorage,
} from '../../api/storage';

import { fetchAllSnippets } from '../../api/snippets';

import styles from './AllSnippetsTab.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AllSnippetsTab = ({ className }) => {
  const [allSnippets, setAllSnippets] = useState();
  const showInfoToast = useToast();

  const getAllSnippets = async () => {
    const data = await fetchAllSnippets();

    setAllSnippets(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // delay(1);
    getAllSnippets();
  }, []);

  if (!allSnippets) {
    return (
      <div className={cx(styles.container, className)}>
        <Loader />
      </div>
    );
  }

  const onItemAction = async (s) => {
    const success = await removeSnippetFromStorage(s);

    if (success) {
      const newFavourites = { ...allSnippets };
      /**
       * NOTE: If snippet we're deleting is the last snippet
       * for that language, remove the language array itself.
       * Otherwise remove the snippet from the language array.
       */
      if (newFavourites[s.language].length === 1) {
        delete newFavourites[s.language];
      } else {
        lodashRemove(newFavourites[s.language], (item) => {
          return item.src === s.src;
        });
      }
      setAllSnippets(newFavourites);
      showInfoToast(`Removed "${s.title}" from Favourites`);
    }
  };

  const renderItemActions = (s) => (
    <IconButton
      className={styles.delete}
      icon={DeleteIcon}
      onClick={() => onItemAction(s)}
    />
  );

  const renderLanguageLists = () => {
    return allSnippets.map((lang) => {
      // const snippets = Object.keys(allSnippets[lang]).map(
      //   (sId) => allSnippets[lang][sId]
      // );
      return (
        <LanguageList
          key={lang.language}
          language={lang.language}
          snippets={lang.snippets}
          itemActions={renderItemActions}
        />
      );
    });
  };

  return (
    <div className={cx(styles.container, className)}>
      {renderLanguageLists()}
    </div>
  );
};

AllSnippetsTab.propTypes = {
  className: PropTypes.string,
};

export default AllSnippetsTab;
