import fetch from "../misc/fetch";

export const ADD_ERROR = "ERROR";
export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";

const addError = error => ({
  type: ADD_ERROR,
  error
});

const requestData = () => ({
  type: REQUEST_DATA
});

const receiveData = items => ({
  type: RECEIVE_DATA,
  items
});

export const fetchItems = async dispatch => {
  dispatch(requestData());

  let items;
  try {
    const result = await fetch("GET", "/getitems");
    items = JSON.parse(result);
  } catch (error) {
    dispatch(addError("Could not get items."));
    return;
  }

  let users;
  try {
    const result = await fetch("GET", "/getusers");
    users = JSON.parse(result);
  } catch (error) {
    dispatch(addError("Could not get users."));
    return;
  }

  dispatch(
    receiveData(
      items.map(({ text, date, userId, active }) => ({
        date: date.slice(0, 10),
        text,
        owner: users[userId],
        status: active
      }))
    )
  );
};
