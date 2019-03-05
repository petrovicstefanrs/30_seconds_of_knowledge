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
		},
		theme: 'dark',
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
 * Function that saves extension options to chrome storage and syncs them over devices
 * @function saveToStorage
 * @return {Promise} setOptions - Promise that will set options to storage and return true once resolved
 */

export const saveToStorage = options => {
	const setOptions = new Promise(resolve => {
		chrome.storage.sync.set({options}, () => {
			resolve(true);
		});
	});

	return setOptions;
};

/**
 * Function that gets extension options from chrome sync storage
 * @function restoreFromStorage
 * @return {Promise} getOptions - Promise that will return options from storage when resolved
 */

export const restoreFromStorage = () => {
	const getOptions = new Promise(resolve => {
		chrome.storage.sync.get(DEFAULT_EXTENSION_OPTIONS, ({options}) => {
			resolve(options);
		});
	});

	return getOptions;
};

/**
 * Function that saves snippets to chrome storage and syncs them over devices
 * @function saveSnippetToStorage
 * @return {Promise} saveSnippet - Promise that will save snippet to storage and return true once resolved
 */

export const saveSnippetsToStorage = snippets => {
	const saveSnippet = new Promise(resolve => {
		chrome.storage.local.set({snippets}, () => {
			resolve(true);
		});
	});

	return saveSnippet;
};

/**
 * Function that gets saved snippets from chrome sync storage
 * @function restoreSnippetsFromStorage
 * @return {Promise} getSnippets - Promise that will return Snippets from storage when resolved
 */

export const restoreSnippetsFromStorage = () => {
	const getSnippets = new Promise(resolve => {
		chrome.storage.local.get(DEFAULT_SAVED_SNIPPETS, ({snippets}) => {
			resolve(snippets || []);
		});
	});

	return getSnippets;
};

/**
 * Function that opens chrome extension options page.
 * @function openExtensionOptions
 */

export const openExtensionOptions = () => {
	const {getURL} = chrome.runtime;

	window.open(getURL('options.html'), '_self');
};

/**
 * Function that opens saved snippets page.
 * @function openExtensionOptions
 */

export const openSaved = () => {
	const {getURL} = chrome.runtime;

	window.open(getURL('saved.html'), '_self');
};

/**
 * Function that opens a specific saved snippet page.
 * @function openView
 */

export const openView = index => {
	const {getURL} = chrome.runtime;

	window.open(getURL('view.html#' + index), '_self');
};

/**
 * Function that opens a random snippet page.
 * @function openExtensionOptions
 */

export const openRandomSnippet = (newTab = false) => {
	const {getURL} = chrome.runtime;

	const target = newTab ? '_blank' : '_self';
	window.open(getURL('newtab.html'), target);
};
