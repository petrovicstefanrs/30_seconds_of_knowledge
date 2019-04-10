import {randArrayItem} from '../lib/random';
import {restoreFromStorage, restoreBlacklistedSnippetFromStorage} from './storage';

/**
 * Self-explanatory
 * TODO I'd move this to a config file of some sort
 * @type {string}
 */
const DEFAULT_SNIPPETS_DIRECTORY = '../../snippets';

/**
 * Available snippet library types
 * @const SNIPPET_LIBRARIES
 * @readonly
 * @enum {string}
 * NOTE: Once updating libraries, update default options in storage.js
 */

export const SNIPPET_LIBRARIES = {
	javascript: 'javascript',
	react: 'react',
	python: 'python',
	interview: 'interview',
	php: 'php',
	css: 'css',
	ruby: 'ruby',
	ramda: 'ramda',
	cpp: 'cpp',
	scala: 'scala'
};

/**
 * Available snippet library labels
 * @const SNIPPET_LIBRARY_LABELS
 * @readonly
 * @enum {string}
 */

export const SNIPPET_LIBRARY_LABELS = {
	[SNIPPET_LIBRARIES.javascript]: 'JavaScript',
	[SNIPPET_LIBRARIES.react]: 'React',
	[SNIPPET_LIBRARIES.python]: 'Python',
	[SNIPPET_LIBRARIES.interview]: 'Interview Questions',
	[SNIPPET_LIBRARIES.php]: 'PHP',
	[SNIPPET_LIBRARIES.css]: 'CSS',
	[SNIPPET_LIBRARIES.ruby]: 'Ruby',
	[SNIPPET_LIBRARIES.ramda]: 'Ramda',
	[SNIPPET_LIBRARIES.cpp]: 'C++',
	[SNIPPET_LIBRARIES.scala]: 'Scala'
};

/**
 * Available snippet code extraction regex
 * Used for prepopulating fields on Codepen
 * @const SNIPPET_CODE_REGEX
 * @readonly
 * @enum {string}
 */

/** TODO: Leaving this here in hope that one day J
 * avascript will be able to lookbehind and see (Yes it's a pun, don't judge...)
 * Until then using the sligthly more complex regex bellow
 *
 * const SNIPPET_CODE_REGEX = {
 * 	html: new RegExp(/(?<=\`\`\`html)(.*?)(?=\`\`\`)/, 'gsm'),
 * 	css: new RegExp(/(?<=\`\`\`css)(.*?)(?=\`\`\`)/, 'gsm'),
 * 	js: new RegExp(/(?<=\`\`\`js)(.*?)(?=\`\`\`)/, 'gsm'),
 * };
 */

const SNIPPET_CODE_REGEX = {
	html: new RegExp(/(?:\`\`\`html)(?:\s*)([\s\S.]*?)(?=\`\`\`)/, 'gm'),
	css: new RegExp(/(?:\`\`\`css)(?:\s*)([\s\S.]*?)(?=\`\`\`)/, 'gm'),
	js: new RegExp(/(?:\`\`\`js)(?:\s*)([\s\S.]*?)(?=\`\`\`)/, 'gm'),
};

/**
 * Returns a context for a specific snippet library
 * @function getLibraryContext
 * @param {SNIPPET_LIBRARIES} library - Name of the library to fetch context for
 */

const getLibraryContext = library => {
	switch (library) {
		case SNIPPET_LIBRARIES.javascript:
			return require.context(`${DEFAULT_SNIPPETS_DIRECTORY}/javascript`, false, /\.md$/);

		case SNIPPET_LIBRARIES.react:
			return require.context(`${DEFAULT_SNIPPETS_DIRECTORY}/react`, false, /\.md$/);

		case SNIPPET_LIBRARIES.python:
			return require.context(`${DEFAULT_SNIPPETS_DIRECTORY}/python`, false, /\.md$/);

		case SNIPPET_LIBRARIES.interview:
			return require.context(`${DEFAULT_SNIPPETS_DIRECTORY}/interview`, false, /\.md$/);

		case SNIPPET_LIBRARIES.php:
			return require.context(`${DEFAULT_SNIPPETS_DIRECTORY}/php`, false, /\.md$/);

		case SNIPPET_LIBRARIES.css:
			return require.context(`${DEFAULT_SNIPPETS_DIRECTORY}/css`, false, /\.md$/);

		case SNIPPET_LIBRARIES.ruby:
			return require.context(`${DEFAULT_SNIPPETS_DIRECTORY}/ruby`, false, /\.md$/);

		case SNIPPET_LIBRARIES.ramda:
			return require.context(`${DEFAULT_SNIPPETS_DIRECTORY}/ramda`, false, /\.md$/);

		case SNIPPET_LIBRARIES.cpp:
			return require.context(`${DEFAULT_SNIPPETS_DIRECTORY}/cpp`, false, /\.md$/);

		case SNIPPET_LIBRARIES.scala:
			return require.context(`${DEFAULT_SNIPPETS_DIRECTORY}/scala`, false,  /\.md$/);

		default:
			return require.context(`${DEFAULT_SNIPPETS_DIRECTORY}/javascript`, false, /\.md$/);
	}
};

/**
 * Available snippet library contexts
 * @const SNIPPET_LIBRARY_CONTEXTS
 * @readonly
 */

export const SNIPPET_LIBRARY_CONTEXTS = {
	[SNIPPET_LIBRARIES.javascript]: getLibraryContext(SNIPPET_LIBRARIES.javascript),
	[SNIPPET_LIBRARIES.react]: getLibraryContext(SNIPPET_LIBRARIES.react),
	[SNIPPET_LIBRARIES.python]: getLibraryContext(SNIPPET_LIBRARIES.python),
	[SNIPPET_LIBRARIES.interview]: getLibraryContext(SNIPPET_LIBRARIES.interview),
	[SNIPPET_LIBRARIES.php]: getLibraryContext(SNIPPET_LIBRARIES.php),
	[SNIPPET_LIBRARIES.css]: getLibraryContext(SNIPPET_LIBRARIES.css),
	[SNIPPET_LIBRARIES.ruby]: getLibraryContext(SNIPPET_LIBRARIES.ruby),
	[SNIPPET_LIBRARIES.ramda]: getLibraryContext(SNIPPET_LIBRARIES.ramda),
	[SNIPPET_LIBRARIES.cpp]: getLibraryContext(SNIPPET_LIBRARIES.cpp),
	[SNIPPET_LIBRARIES.scala]: getLibraryContext(SNIPPET_LIBRARIES.scala)
};

/**
 * Returns a list of snippet paths for a specific library
 * @function getSnippetsFromLibrary
 * @param {SNIPPET_LIBRARIES} library - Name of the library to get snippets for
 */

export const getSnippetsFromLibrary = library => {
	const importAllFiles = r => r.keys().map(r);
	return importAllFiles(SNIPPET_LIBRARY_CONTEXTS[library]);
};

/**
 * Function that returns a promise that fetches and returns a random snippet from a random library of snippets
 * @function fetchRandomSnippet
 * @returns {Promise} Returns a promise that, when resolved, provides a snippet, language & language label
 */

export const fetchRandomSnippet = async () => {
	const appOptions = await restoreFromStorage();
	const enabledLibraries = Object.keys(SNIPPET_LIBRARIES).filter(val => {
		return appOptions.libs[val];
	});
	const blacklistedSnippets = await fetchBlacklistedSnippetSources();
	const randomLibrary = randArrayItem(enabledLibraries);
	const snippetSources = getSnippetsFromLibrary(randomLibrary).filter(
		src => !blacklistedSnippets.includes(src)
	);
	const randomSnippet = randArrayItem(snippetSources);

	return await fetchSnippet(randomSnippet, randomLibrary);
};

/**
 * Function that returns a promise that fetches and returns the src of all blacklisted snippets
 * @function fetchBlacklistedSnippetSources
 * @returns {Promise} Returns a promise that when resolved provides a list of blacklisted snippets sources.
 */

export const fetchBlacklistedSnippetSources = async () => {
	return (await restoreBlacklistedSnippetFromStorage()).map(snippet => snippet.src);
};

/**
 * Function that returns a promise that fetches and returns a specific snippet from a specific library of snippets
 * @function fetchSnippet
 * @returns {Promise} Returns a promise that when resolved provides a snippet, language, language label, snippet_src & snippet_title
 */

export const fetchSnippet = async (snippetSrc, language) => {
	if (!snippetSrc) {
		console.error(`Snippet Soruce must be defined!`);
	}

	if (!language) {
		console.error(`Snippet Language must be defined!`);
	}

	return await fetch(snippetSrc)
		.then(res => res.text())
		.then(res => {
			const snippet = res;
			const language_label = SNIPPET_LIBRARY_LABELS[language];
			const snippet_title = snippetSrc.slice(
				snippetSrc.lastIndexOf('/') + 1,
				snippetSrc.indexOf('.md')
			);

			return {
				snippet,
				language,
				language_label,
				snippet_src: snippetSrc,
				snippet_title,
			};
		})
		.catch(err => console.error(err));
};

/**
 * Function that returns a promise that fetches and returns a random snippet from a random library of snippets
 * @function extractCodeFromSnippet
 * @param {string} source - Snippet source to extract code from
 * @param {SNIPPET_LIBRARIES} lang - Name of the library/language to get code for
 * @returns {Array} Returns an array of strings of extracted code
 */

export const extractCodeFromSnippet = (source, lang) => {
	const CODE_REGEX = SNIPPET_CODE_REGEX[lang];

	const codes = CODE_REGEX.exec(source);
	// The code is in the first capturing group so use codes[1]
	const result = codes && codes.length ? codes[1] : '';

	return result;
};
