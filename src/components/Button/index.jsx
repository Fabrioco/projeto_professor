import React from "react";
import "./button.css";
export const Button = ({ text, onClickFunction }) => {
  return (
    <button className="btn" onClick={onClickFunction}>
      {text}
    </button>
  );
};
