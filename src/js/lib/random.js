/**
 * Returns a random array item
 * @function randArrayItem
 * @param {array} arr - Array with items to take a random item from
 */

export const randArrayItem = arr => {
	if (!arr || !arr.length) {
		return;
	}

	const randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
};

/**
 * Returns a random int from a range
 * @function randIntFromRange
 * @param {int} [min] 0 - Minimum number to be rolled (Inclusive)
 * @param {int} [max] 1 - Maximum number to be rolled (Inclusive)
 */

export const randIntFromRange = (min = 0, max = 1) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
