import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import SaveIcon from '../../icons/Save';

import { useToast } from '../../components/Toast';
import IconButton from '../../components/IconButton';
import Loader from '../../components/Loader';
import ScrollTopButton from '../../components/ScrollTopButton';
import LanguageList from '../../components/LanguageList';

import {
  removeSnippetFromStorage,
  saveSnippetToStorage,
} from '../../api/storage';

import { fetchAllSnippets } from '../../api/snippets';
import { getSnippetsFromStorage } from '../../api/storage';

import styles from './AllSnippetsTab.module.scss';

const AllSnippetsTab = ({ className }) => {
  const [allSnippets, setAllSnippets] = useState();
  const [savedSnippets, setSavedSnippets] = useState();
  const [saving, setSaving] = useState();
  const showInfoToast = useToast();

  const fetchSnippets = async () => {
    const data = fetchAllSnippets();
    const saved = await getSnippetsFromStorage();
    const savedIds = saved.map((s) => s.id);
    setAllSnippets(data);
    setSavedSnippets(savedIds);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSnippets();
  }, []);

  if (!allSnippets || !savedSnippets) {
    return (
      <div className={cx(styles.container, className)}>
        <Loader />
      </div>
    );
  }

  const onItemAction = async (s) => {
    setSaving(s.id);
    const isSaved = savedSnippets.includes(s.id);
    let success;
    let newSavedSnippets = [...savedSnippets];
    if (isSaved) {
      success = await removeSnippetFromStorage(s);
      newSavedSnippets = newSavedSnippets.filter((id) => id !== s.id);
    } else {
      success = await saveSnippetToStorage(s);
      newSavedSnippets.push(s.id);
    }

    if (success) {
      setSavedSnippets(newSavedSnippets);
      const message = isSaved
        ? `Removed "${s.title}" from Favourites`
        : `Saved "${s.title}" to Favourites`;
      showInfoToast(message);
    }
    setSaving(undefined);
  };

  const renderItemActions = (s) => {
    const isSaved = savedSnippets.includes(s.id);
    const isSaving = saving === s.id;

    return (
      <IconButton
        className={cx(styles.save, {
          [styles.active]: isSaved,
        })}
        icon={SaveIcon}
        onClick={() => onItemAction(s)}
        disabled={isSaving}
      />
    );
  };

  const renderLanguageLists = () => {
    return Object.keys(allSnippets).map((lang) => {
      const snippets = Object.keys(allSnippets[lang]).map(
        (sId) => allSnippets[lang][sId]
      );
      return (
        <LanguageList
          key={lang}
          language={lang}
          snippets={snippets}
          itemActions={renderItemActions}
        />
      );
    });
  };

  return (
    <div className={cx(styles.container, className)}>
      {renderLanguageLists()}
      <ScrollTopButton />
    </div>
  );
};

AllSnippetsTab.propTypes = {
  className: PropTypes.string,
};

export default AllSnippetsTab;
