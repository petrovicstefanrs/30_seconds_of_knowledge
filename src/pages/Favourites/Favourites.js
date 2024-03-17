import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import lodashGroupBy from 'lodash.groupby';
import lodashIsEmpty from 'lodash.isempty';
import lodashRemove from 'lodash.remove';

import DeleteIcon from '../../icons/Delete';
import SaveIcon from '../../icons/Save';

import { useToast } from '../../components/Toast';
import IconButton from '../../components/IconButton';
import Loader from '../../components/Loader';
import ScrollTopButton from '../../components/ScrollTopButton';
import LanguageList from '../../components/LanguageList';

import {
  getSnippetsFromStorage,
  removeSnippetFromStorage,
} from '../../api/storage';

import styles from './Favourites.module.scss';

const Favourites = ({ className }) => {
  const [favourites, setFavourites] = useState();
  const showInfoToast = useToast();

  const fetchFavouriteSnippets = async () => {
    const data = await getSnippetsFromStorage();
    const groupedFavourites = lodashGroupBy(data, 'language');

    setFavourites(groupedFavourites);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchFavouriteSnippets();
  }, []);

  if (!favourites) {
    return (
      <div className={cx(styles.container, className)}>
        <Loader />
      </div>
    );
  }

  const renderEmpty = () => {
    return (
      <div className={styles.empty}>
        <SaveIcon className={styles.icon} />
        <span className={styles.label}>No favourites yet!</span>
        <span className={styles.note}>
          When you save them, your favourite snippets will show up here.
        </span>
      </div>
    );
  };

  const onItemAction = async (s) => {
    const success = await removeSnippetFromStorage(s);

    if (success) {
      const newFavourites = { ...favourites };
      /**
       * NOTE: If snippet we're deleting is the last snippet
       * for that language, remove the language array itself.
       * Otherwise remove the snippet from the language array.
       */
      if (newFavourites[s.language].length === 1) {
        delete newFavourites[s.language];
      } else {
        lodashRemove(newFavourites[s.language], (item) => {
          return item.id === s.id;
        });
      }
      setFavourites(newFavourites);
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

  return (
    <div className={cx(styles.container, className)}>
      {lodashIsEmpty(favourites)
        ? renderEmpty()
        : Object.keys(favourites).map((lang) => (
            <LanguageList
              key={lang}
              language={lang}
              snippets={favourites[lang]}
              itemActions={renderItemActions}
              expanded
            />
          ))}
      <ScrollTopButton />
    </div>
  );
};

Favourites.propTypes = {
  className: PropTypes.string,
};

export default Favourites;
