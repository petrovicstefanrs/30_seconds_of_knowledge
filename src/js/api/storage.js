/**
 * Use the correct browser object depending on the browser
 * @function createDefaultOptions
 */

const browserObject = chrome ? chrome : browser; // eslint-disable-line

/**
 * Function that creates default options from available snippet libraries
 * @function createDefaultOptions
 */

const createDefaultOptions = () => {
	let options = {
		libs: {
			javascript: true,
			react: true,
			python: true,
			interview: true,
			php: true,
			css: true,
			ruby: true,
			ramda: true,
			cpp: true,
		},
		theme: 'dark',
		font_size: 1,
		beggar_counter: 0,
	};

	return {options};
};

/**
 * Default extension options
 * @const DEFAULT_EXTENSION_OPTIONS
 * @readonly
 * @enum {bool}
 */

export const DEFAULT_EXTENSION_OPTIONS = createDefaultOptions();

/**
 * Default saved snippets
 * @const DEFAULT_SAVED_SNIPPETS
 * @readonly
 */

export const DEFAULT_SAVED_SNIPPETS = ['snippets'];

/**
 * Default blacklisted snippets
 * @const DEFAULT_BLACKLISTED_SNIPPETS
 * @readonly
 */

export const DEFAULT_BLACKLISTED_SNIPPETS = ['blacklisted_snippets'];

/**
 * Function that saves extension options to browserObject storage and syncs them over devices
 * @function saveToStorage
 * @return {Promise} setOptions - Promise that will set options to storage and return true once resolved
 */

export const saveToStorage = options => {
	const setOptions = new Promise(resolve => {
		browserObject.storage.sync.set({options}, () => {
			resolve(true);
		});
	});

	return setOptions;
};

/**
 * Function that gets extension options from browserObject sync storage
 * @function restoreFromStorage
 * @return {Promise} getOptions - Promise that will return options from storage when resolved
 */

export const restoreFromStorage = () => {
	const getOptions = new Promise(resolve => {
		browserObject.storage.sync.get(DEFAULT_EXTENSION_OPTIONS, ({options}) => {
			resolve(options);
		});
	});

	return getOptions;
};

/**
 * Function that saves snippets to browserObject sync storage
 * @function saveSnippetToStorage
 * @return {Promise} saveSnippet - Promise that will save snippet to storage and return true once resolved
 */

export const saveSnippetsToStorage = snippets => {
	const saveSnippet = new Promise(resolve => {
		browserObject.storage.local.set({snippets}, () => {
			resolve(true);
		});
	});

	return saveSnippet;
};

/**
 * Function that gets saved snippets from browserObject sync storage
 * @function restoreSnippetsFromStorage
 * @return {Promise} getSnippets - Promise that will return Snippets from storage when resolved
 */

export const restoreSnippetsFromStorage = () => {
	const getSnippets = new Promise(resolve => {
		browserObject.storage.local.get(DEFAULT_SAVED_SNIPPETS, ({snippets}) => {
			resolve(snippets || []);
		});
	});

	return getSnippets;
};

/**
 * Function that saves snippets blacklist to browserObject sync storage
 * @function blacklistSnippetsToStorage
 * @return {Promise} blacklistSnippetsToStorage - Promise that will save a blacklisted snippet to storage and return
 * true once resolved
 */

export const blacklistSnippetsToStorage = blacklisted_snippets => {
	return new Promise(resolve => {
		browserObject.storage.local.set({blacklisted_snippets}, () => {
			resolve(true);
		});
	});
};

/**
 * Function that gets blacklisted snippets from browserObject sync storage
 * @function restoreBlacklistedSnippetFromStorage
 * @return {Promise} getSnippets - Promise that will return a list of blacklisted snippets from storage when resolved
 */

export const restoreBlacklistedSnippetFromStorage = () => {
	return new Promise(resolve => {
		browserObject.storage.local.get(DEFAULT_BLACKLISTED_SNIPPETS, ({blacklisted_snippets}) => {
			resolve(blacklisted_snippets || []);
		});
	});
};

/**
 * Function that opens browserObject extension options page.
 * @function openExtensionOptions
 */

export const openExtensionOptions = () => {
	const {getURL} = browserObject.runtime;

	window.open(getURL('options.html'), '_self');
};

/**
 * Function that opens saved snippets page.
 * @function openExtensionOptions
 */

export const openSaved = () => {
	const {getURL} = browserObject.runtime;

	window.open(getURL('saved.html'), '_self');
};

/**
 * Function that opens a specific saved snippet page.
 * @function openView
 */

export const openView = (index, type = 'saved') => {
	const {getURL} = browserObject.runtime;

	window.open(getURL('view.html#' + index + '#' + type), '_self');
};

/**
 * Function that opens a random snippet page.
 * @function openExtensionOptions
 */

export const openRandomSnippet = (newTab = false) => {
	const {getURL} = browserObject.runtime;

	const target = newTab ? '_blank' : '_self';
	window.open(getURL('newtab.html'), target);
};
