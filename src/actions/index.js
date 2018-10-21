// @ts-nocheck
import api from "../../trial-files/softrobot_test_api.min.js";

export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";

const requestData = () => ({
  type: REQUEST_DATA
});

const receiveData = items => ({
  type: RECEIVE_DATA,
  items
});

export const fetchItems = dispatch => {
  dispatch(requestData());

  const xhr = api.XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      const items = JSON.parse(xhr.responseText).map(
        ({ text, date, userId, active }) => ({
          date: date.slice(0, 10),
          text,
          owner: userId,
          status: active.toString()
        })
      );
      dispatch(receiveData(items));
    }
  };

  xhr.open("GET", "/getitems");
  xhr.send();
};
