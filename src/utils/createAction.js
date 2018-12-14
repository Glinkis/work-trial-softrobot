// @ts-check
/**
 * Creates an action.
 * @param {string} type - Action type.
 * @returns {(payload?) => any}
 */
const createAction = type => (...args) => {
  if (args.length) {
    const [payload, ...rest] = args;
    return { type, payload, ...rest };
  }
  return { type };
};

export default createAction;
