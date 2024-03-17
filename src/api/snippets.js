import lodashFind from 'lodash.find';

import { getSettingsFromStorage, getSnippetsFromStorage } from './storage';
import { SNIPPET_LIBRARIES } from '../constants';
import snippetsData from './data';

/**
 * NOTE: Returns a random item from array
 */
const randArrayItem = (arr = []) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

/**
 * NOTE: This function fetches a random snippet and
 * builds snippet data object.
 */
export const fetchRandomSnippet = async () => {
  const settings = await getSettingsFromStorage();
  const enabledLibraries = Object.keys(SNIPPET_LIBRARIES).filter((val) => {
    return settings.libs[val];
  });
  const randomLibrary = randArrayItem(enabledLibraries);
  const snippetSources = Object.keys(snippetsData[randomLibrary]);
  const randomSnippet = randArrayItem(snippetSources);
  const snippetData = snippetsData[randomLibrary][randomSnippet];

  const savedSnipepts = await getSnippetsFromStorage();
  const isSaved = !!lodashFind(savedSnipepts, { id: randomSnippet });

  snippetData.saved = isSaved;
  return snippetData;
};

/**
 * NOTE: This function fetches a specific snippet
 * that matches the passed id
 */
export const fetchSnippetById = async (id) => {
  const language = lodashFind(snippetsData, (lang) => {
    return lang[id];
  });
  const snippetData = language[id];

  const savedSnipepts = await getSnippetsFromStorage();
  const isSaved = !!lodashFind(savedSnipepts, { id: id });

  snippetData.saved = isSaved;
  return snippetData;
};

/**
 * NOTE: This function fetches all snippets from all libraries
 * and returnes an object containing all snippets grouped by library
 */
export const fetchAllSnippets = () => snippetsData;

export const searchSnippets = ({
  query: searchQuery,
  snippets: allSnippets,
}) => {
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
