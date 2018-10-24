import api from "../../trial-files/softrobot_test_api.min.js";

/**
 * Utility function to allow for async requests.
 * @param {string} method - Request method, e.g. GET, POST, & DELETE.
 * @param {string} url - Url to send the request.
 * @param  {...any} params - Miscellaneous parameters to pass with the request.
 * @returns {Promise<string>} - A promise that resolves to a json string.
 */
const fetch = (url, options = {}) =>
  new Promise((resolve, reject) => {
    const { method = "GET", body } = options;
    const xhr = api.XMLHttpRequest();
    xhr.timeout = 2000;
    xhr.ontimeout = reject;
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject({ state: xhr.readyState, status: xhr.status });
        }
      }
    };
    xhr.open(method, url);

    if (body !== undefined) {
      xhr.send(JSON.stringify(body));
    } else {
      xhr.send();
    }
  });

export default fetch;
