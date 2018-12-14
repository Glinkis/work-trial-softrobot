/**
 * Creates an action.
 * @param {string} type - Action type.
 * @returns {(payload?) => any}
 */
const createAction = type => payload => {
  if (typeof payload === "undefined") {
    return { type };
  }
  return { type, payload };
};

export default createAction;
