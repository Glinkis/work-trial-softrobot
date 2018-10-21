import React from "react";
import "./ErrorMessage.scss";

const ErrorMessage = ({ message }) => (
  <div className="error-message">{message}</div>
);

export default ErrorMessage;
