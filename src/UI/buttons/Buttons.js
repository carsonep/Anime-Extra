import React from "react";
import "./Buttons.css";

function Buttons(props) {
  return (
    <React.Fragment>
      <button className="button" onClick={props.handleClick}>
        {props.children}
      </button>
    </React.Fragment>
  );
}

export default Buttons;
