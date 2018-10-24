/**
 * Gets current time in the format "YYYY-MM-DDT:hh:mm:ss:msZ";
 * @returns {string} - The current time.
 */
const getFormattedTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const ms = date.getMilliseconds();
  return `${year}-${month}-${day}T${hour}:${minute}:${second}.${ms}Z`;
};

export default getFormattedTime;
