import React, { useContext } from "react";

import "./styles.css";
import { GlobalValues } from "../../../context/ContextValues";

export const Modal = () => {
  const { handleGenerationRA, number, handleModal } = useContext(GlobalValues);

  const handleClick = () => {
    handleGenerationRA();
  };

  const handleCloseModal = () => {
    handleModal();
  };

  return (
    <div className="background_modal">
      <div className="container__modal">
        <span className="close__modal" onClick={handleCloseModal}>
          &#10060;
        </span>
        <h1 className="title__modal">Gerar RA</h1>
        {number.length !== 0 && (
          <span className="show_RA">Seu RA: {number}</span>
        )}
        <button onClick={handleClick} className="btn">
          Gerar
        </button>
      </div>
    </div>
  );
};
