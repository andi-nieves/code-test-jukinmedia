import React from "react";
import "./Style.css";
import Items from "./Items";

function Component(props) {
  return props.data.result ? (
    props.data.result.map(item => <Items data={item} key={item.id} />)
  ) : (
    <div />
  );
}

export default Component;
