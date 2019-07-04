// @ts-check
import api from "../../trial-files/softrobot_test_api.min.js";

/**
 * Utility function to allow for async requests.
 * @param {string} url - Url to send the request.
 * @param {object} [options] - Various options.
 * @param {string} [options.method] - Request method, e.g.GET , POST, & DELETE.
 * @param {any} [options.body] - What to pass into the request.
 * @returns {Promise<any>} - A promise that resolves to a json string.
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
