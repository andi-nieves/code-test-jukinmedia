import React from "react";
import "./Style.css";

function Component(props) {
  const { style } = props;
  return (
    <div>
      <button style={{ ...style }} className="default-button license-button">
        {props.children}
      </button>
    </div>
  );
}

export default Component;
