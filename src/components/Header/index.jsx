import React, { useContext, useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import hat from "../../assets/images/hat.svg";

import "./styles.css";
import { GlobalValues } from "../../context/ContextValues";

export const Header = () => {
  const { time, hour, nameCSS, namePerson } =
    useContext(GlobalValues);

  return (
    <div className={nameCSS}>
      <div className="content__left">
        <img src={hat} alt="hat.svg" />
        <h1>EMEF JOÃO PAULO</h1>
      </div>
      <div className="content__right">
        {namePerson && <p>Nome da pessoa</p>}
        <p>{time}</p>
        <p>{hour}</p>
      </div>
    </div>
  );
};
