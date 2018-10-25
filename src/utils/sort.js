// @ts-check

/**
 * Sort strings alphabetically.
 * @param {string} a
 * @param {string} b
 */
export const sortByString = (a, b) => {
  return a.localeCompare(b);
};

/**
 * Sort strings booleans by truthiness.
 * @param {boolean} a
 * @param {boolean} b
 */
export const sortByBoolean = (a, b) => {
  return a === b ? 0 : a ? -1 : 1;
};
