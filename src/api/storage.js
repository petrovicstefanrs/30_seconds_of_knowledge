import lodashRemove from 'lodash.remove';

import { THEMES, HIGHLIGHTER_THEMES, SNIPPET_LIBRARIES } from '../constants';

/**
 * NOTE: Function to format date to human readable string
 */
export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

/**
 * NOTE: Use the correct browser object depending
 * on the browser the extension is being run in
 */
const browserObject = chrome ? chrome : browser; // eslint-disable-line

/**
 * NOTE: General functions to get/set data to storage
 */
const getFromStorage = async (key, storageType = 'local') => {
  return new Promise((resolve) => {
    browserObject.storage[storageType].get([key], (result) => {
      if (result[key] === undefined) {
        resolve();
      } else {
        resolve(result[key]);
      }
    });
  });
};

const saveToStorage = async (key, data, storageType = 'local') => {
  return new Promise((resolve) => {
    browserObject.storage[storageType].set({ [key]: data }, (err) => {
      if (err) {
        resolve();
      } else {
        resolve(true);
      }
    });
  });
};

/**
 * NOTE: Functions to get/set settings to storage
 */
export const getSettingsFromStorage = async () => {
  const settings = await getFromStorage('settings');
  if (settings) {
    return settings;
  }

  return {
    libs: Object.keys(SNIPPET_LIBRARIES).reduce((acc, lang) => {
      acc[lang] = true;
      return acc;
    }, {}),
    theme: THEMES.dark.value,
    highlighter_theme: HIGHLIGHTER_THEMES['shades-of-purple'],
  };
};

export const saveSettingsToStorage = async (settings) => {
  return await saveToStorage('settings', settings);
};

/**
 * NOTE: Functions to get/set/remove saved snippets to storage
 */
export const getSnippetsFromStorage = async () => {
  const snippets = await getFromStorage('saved_snippets');

  return snippets || [];
};

export const saveSnippetToStorage = async (snippet) => {
  let snippets = await getFromStorage('saved_snippets');
  snippets = snippets || [];
  snippet.savedOn = formatDate(new Date());
  snippets.push(snippet);

  return await saveToStorage('saved_snippets', snippets);
};

export const removeSnippetFromStorage = async (snippet) => {
  let snippets = await getFromStorage('saved_snippets');
  snippets = snippets || [];
  lodashRemove(snippets, (item) => {
    return item.id === snippet.id;
  });

  return await saveToStorage('saved_snippets', snippets);
};
