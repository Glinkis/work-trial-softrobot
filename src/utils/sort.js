// @ts-check

/**
 * Sort strings booleans by truthiness.
 * @param {boolean} a
 * @param {boolean} b
 */
export const sortByBoolean = (a, b) => {
  return a === b ? 0 : a ? -1 : 1;
};

/**
 * Sort numbers by highest first.
 * @param {number} a
 * @param {number} b
 */
export const sortByNumber = (a, b) => {
  return a < b ? 1 : a > b ? -1 : 0;
};

/**
 * Sort strings alphabetically.
 * @param {string} a
 * @param {string} b
 */
export const sortByString = (a, b) => {
  return a.localeCompare(b);
};
