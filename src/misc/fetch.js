import api from "../../trial-files/softrobot_test_api.min.js";

const fetch = (method, url, ...params) =>
  new Promise((resolve, reject) => {
    const xhr = api.XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject();
        }
      }
    };
    xhr.open(method, url);
    xhr.send(...params);
  });

export default fetch;
