import fetch from "../misc/fetch";

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

  const usersJson = await fetch("GET", "/getusers");
  const users = JSON.parse(usersJson);

  const itemsJson = await fetch("GET", "/getitems");
  const items = JSON.parse(itemsJson);

  dispatch(
    receiveData(
      items.map(({ text, date, userId, active }) => ({
        date: date.slice(0, 10),
        text,
        owner: users[userId],
        status: active.toString()
      }))
    )
  );
};
