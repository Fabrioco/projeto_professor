import React, { createContext, useState } from "react";

export const GlobalValues = createContext({});

export const ContextValues = ({ children }) => {
  const [loginOrRegister, setLoginOrRegister] = useState(false);

  const handleTransform = () => {
    setLoginOrRegister(!loginOrRegister);
  };

  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const [number, setNumber] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);

  const handleGenerationRA = () => {
    if (!btnClicked) {
      const randomNumbers = Math.floor(Math.random() * 9000000) + 1000000;
      setNumber(randomNumbers.toString());
    }
    setBtnClicked(true);
  };

  return (
    <GlobalValues.Provider
      value={{
        handleTransform,
        setLoginOrRegister,
        loginOrRegister,
        handleModal,
        modal,
        handleGenerationRA,
        number,
      }}
    >
      {children}
    </GlobalValues.Provider>
  );
};
