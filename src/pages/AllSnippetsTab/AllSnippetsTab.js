import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import debounce from 'lodash.debounce';

import SaveIcon from '../../icons/Save';
import CloseIcon from '../../icons/Close';

import { useToast } from '../../components/Toast';
import IconButton from '../../components/IconButton';
import Loader from '../../components/Loader';
import ScrollTopButton from '../../components/ScrollTopButton';
import LanguageList from '../../components/LanguageList';
import Input from '../../components/Input';

import {
  removeSnippetFromStorage,
  saveSnippetToStorage,
} from '../../api/storage';

import { fetchAllSnippets } from '../../api/snippets';
import { getSnippetsFromStorage } from '../../api/storage';

import styles from './AllSnippetsTab.module.scss';

const AllSnippetsTab = ({ className }) => {
  const searchRef = useRef(null);
  const [allSnippets, setAllSnippets] = useState();
  const [savedSnippets, setSavedSnippets] = useState();
  const [searchedSnippets, setSearchedSnippets] = useState();

  const [saving, setSaving] = useState();
  const showInfoToast = useToast();

  const filteredSnippets = searchedSnippets || allSnippets;
  const isLoading = !allSnippets || !savedSnippets;

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
    return Object.keys(filteredSnippets).map((lang) => {
      const snippets = Object.keys(filteredSnippets[lang]).map(
        (sId) => filteredSnippets[lang][sId]
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

  const searchResources = (searchQuery) => {
    const results = {};

    for (const language in allSnippets) {
      results[language] = {};

      for (const resourceId in allSnippets[language]) {
        const resource = allSnippets[language][resourceId];

        // Search by title, content, and tags
        const titleMatch = (resource?.title || '')
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const contentMatch = (resource?.content || '')
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const tagsMatch = (resource?.tags || []).some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (titleMatch || contentMatch || tagsMatch) {
          results[language][resourceId] = resource;
        }
      }
    }

    // Filter out empty language collections
    for (const language in results) {
      if (Object.keys(results[language]).length === 0) {
        delete results[language];
      }
    }

    return results;
  };

  const debouncedSearch = debounce((searchQuery) => {
    const searchResults = searchResources(searchQuery);
    setSearchedSnippets(searchResults);
  }, 500);

  return (
    <div className={cx(styles.container, className)}>
      <div className={cx(styles.searchContainer)}>
        <Input
          ref={searchRef}
          placeholder="Search..."
          onChange={debouncedSearch}
          className={cx(styles.search)}
        />
        {searchRef?.current?.value && (
          <IconButton
            className={cx(styles.clearBtn)}
            icon={CloseIcon}
            iconProps={{ width: 24, height: 24, className: styles.clearIcon }}
            onClick={() => {
              searchRef.current.value = '';
              searchRef.current.focus();
              setSearchedSnippets(undefined);
            }}
          />
        )}
      </div>
      {isLoading ? (
        <div className={cx(styles.container, className)}>
          <Loader />
        </div>
      ) : (
        renderLanguageLists()
      )}
      <ScrollTopButton />
    </div>
  );
};

AllSnippetsTab.propTypes = {
  className: PropTypes.string,
};

export default AllSnippetsTab;
