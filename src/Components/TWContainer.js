import React from "react";

function Component(props) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1100,
        margin: "10px auto 50px",
        paddingLeft: 15,
        paddingRight: 15
      }}
    >
      {props.children}
    </div>
  );
}

export default Component;
