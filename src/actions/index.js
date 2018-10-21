import { getItems } from "../io/io.js";

export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";

const requestData = () => ({
  type: REQUEST_DATA
});

const receiveData = items => ({
  type: RECEIVE_DATA,
  items
});

export const fetchItems = async dispatch => {
  dispatch(requestData());
  dispatch(receiveData(await getItems()));
};
