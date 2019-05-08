import React from "react";
import "./Style.css";
import Items from "./Items";

function Component(props) {
  const { data } = props;

  return data.result ? (
    <React.Fragment>
      <div className="row">
        {data.result.map(item => (
          <Items data={item} key={item.id} />
        ))}
        <div className="clearer" />
        <div className="spacer" />
      </div>
    </React.Fragment>
  ) : (
    <div />
  );
}

export default Component;
