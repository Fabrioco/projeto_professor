import React, { useContext } from "react";

import random from "../../assets/images/random.svg";
import { Input } from "../Inputs";
import { Modal } from "./modal";
import { GlobalValues } from "../../context/ContextValues";

export const Register = () => {
  const { modal, handleModal } = useContext(GlobalValues);

  const handleClick = () => {
    handleModal();
  };

  return (
    <div className="container">
      <h1 className="title_form">CADASTRAR</h1>
      <form className="container__form">
        <Input label="Nome Completo" placeholder="José Carlos" min={3} />
        <Input label="Email" placeholder="examplo@exemplo.com" />
        <Input label="CPF" placeholder="111.111.111-11" />
        <Input label="RA" placeholder="1234567" urlImage={random} />
        <p className="btn_modal" onClick={handleClick}>
          Gere seu RA
        </p>
        <button className="btn">CONFIRMAR</button>
      </form>
      {modal && <Modal />}
    </div>
  );
};
