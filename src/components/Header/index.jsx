import React, { useContext } from "react";

import hat from "../../assets/images/hat.svg";

import "./styles.css";
import { GlobalValues } from "../../context/ContextValues";

export const Header = () => {
  const { time, hour } = useContext(GlobalValues);
  return (
    <div className="header">
      <div className="content__left">
        <img src={hat} alt="hat.svg" />
        <h1>EMEF JOÃO PAULO</h1>
      </div>
      <div className="content__right">
        <p>{time}</p>
        <p>{hour}</p>
      </div>
    </div>
  );
};
