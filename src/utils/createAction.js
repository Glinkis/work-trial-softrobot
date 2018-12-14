// @ts-check

/**
 * Creates an action.
 * @param {string} type - Action type.
 * @returns {<T>(payload?: T) => {type:string, payload: T}}
 */
const createAction = type => payload => ({ type, payload });

export default createAction;
