// @ts-check
import React from "react";
import "./ErrorMessage.scss";

/**
 * Component for displaying error messages.
 * @param {Object} props
 * @param {string} props.message
 */
const ErrorMessage = ({ message }) => (
  <div className="error-message">{message}</div>
);

export default ErrorMessage;
