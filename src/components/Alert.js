import React from "react";

function Alert(props) {
  const capitalise = (word) => {
    let text = word.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div>
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{capitalise(props.alert.type)}</strong>{" "}
            {props.alert.message}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Alert;
