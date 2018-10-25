export const sortByString = (a, b) => {
  return a.localeCompare(b);
};

export const sortByBoolean = (a, b) => {
  return a === b ? 0 : a ? -1 : 1;
};
