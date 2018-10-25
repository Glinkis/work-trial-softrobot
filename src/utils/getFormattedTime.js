// @ts-check

/**
 * Gets current time in the format "YYYY-MM-DDT:hh:mm:ss:msZ";
 * @returns {string} - The current time.
 */
const getFormattedTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const ms = date.getMilliseconds();

  if (month.length < 2) {
    month = "0" + month;
  }

  if (day.length < 2) {
    day = "0" + day;
  }

  return `${year}-${month}-${day}T${hour}:${minute}:${second}.${ms}Z`;
};

export default getFormattedTime;
