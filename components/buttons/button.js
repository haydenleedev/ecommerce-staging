import React from "react";
import button from "./buttons.module.scss";

const Button = (props) => {
  return (
    <React.Fragment>
      <button
        className={`${button["btn"]} ${button[`${props.color}`]} ${
          button[`${props.size}`]
        } ${button[`${props.padding}`]}`}
        onClick={props.onClick}
      >
        <span>{props.text}</span>
      </button>
    </React.Fragment>
  );
};

export default Button;
