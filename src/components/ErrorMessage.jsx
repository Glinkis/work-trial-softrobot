import React from "react";
import "./ErrorMessage.scss";

const ErrorMessage = ({ message }) => (
  <span className="error-message">{message}</span>
);

export default ErrorMessage;
