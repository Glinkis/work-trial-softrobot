import api from "../../trial-files/softrobot_test_api.min.js";

export const getItems = () =>
  new Promise(resolve => {
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
        resolve(items);
      }
    };
    xhr.open("GET", "/getitems");
    xhr.send();
  });
