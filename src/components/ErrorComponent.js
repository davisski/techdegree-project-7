import React from "react";

/**
 * @extends {ErrorComponent} - React stateless component.
 * @constant {error} - Store error object.
 * @property {status} - Store error status 404 Not Found.
 * @constructor {Error} - Creates new error object.
 */
const ErrorComponent = () => {
  const error = new Error("Page NOT FOUND!");
  error.status = 404;
  return (
    <div>
      <h1>
        {error.message} <span>{`Error:  ${error.status}`}</span>
      </h1>
    </div>
  );
};

export default ErrorComponent;
