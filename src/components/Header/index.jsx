import React, { useContext } from "react";

import hat from "../../assets/images/hat.svg";

import "./styles.css";
import { GlobalValues } from "../../context/ContextValues";

export const Header = () => {
  const { handleTransform, loginOrRegister } = useContext(GlobalValues);

  const handleClick = () => {
    handleTransform();
  };

  return (
    <div className="header">
      <div className="content__left">
        <img src={hat} alt="hat.svg" />
        <h1>EMEF JOÃO PAULO</h1>
      </div>
      <div className="content__right">
        <p>10/10/2001</p>
        <p>00:00</p>
        <button className="content__btn" onClick={handleClick}>
          {!loginOrRegister ? "CADASTRE-SE" : "ENTRE"}
        </button>
      </div>
    </div>
  );
};
