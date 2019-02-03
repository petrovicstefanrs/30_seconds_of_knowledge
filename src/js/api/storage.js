/**
 * Function that creates default options from available snippet libraries
 * @function createDefaultOptions
 */

const createDefaultOptions = () => {
	let options = {
		javascript: true,
		react: true,
		python: true,
		interview: true,
		php: true,
		css: true,
	};

	return options;
};

/**
 * Default extension options
 * @const DEFAULT_EXTENSION_OPTIONS
 * @readonly
 * @enum {bool}
 */

export const DEFAULT_EXTENSION_OPTIONS = createDefaultOptions();

/**
 * Function that saves extension options to chrome storage and syncs them over devices
 * @function saveToStorage
 * @return {Promise} setOptions - Promise that will set options to storage and return true once resolved
 */

export const saveToStorage = options => {
	const setOptions = new Promise(resolve => {
		chrome.storage.sync.set(options, () => {
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
		chrome.storage.sync.get(DEFAULT_EXTENSION_OPTIONS, options => {
			resolve(options);
		});
	});

	return getOptions;
};

/**
 * Function that opens chrome extension options page.
 * @function openExtensionOptions
 */

export const openExtensionOptions = () => {
	const {openOptionsPage, getURL} = chrome.runtime;

	openOptionsPage ? openOptionsPage() : window.open(getURL('options.html'), '_blank');
};
