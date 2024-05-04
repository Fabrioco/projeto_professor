import React, { createContext, useEffect, useState } from "react";


export const GlobalValues = createContext({});

export const ContextValues = ({ children }) => {

  const [loginOrRegister, setLoginOrRegister] = useState(false);

  const handleTransform = () => {
    setLoginOrRegister(!loginOrRegister);
  };

  const [time, setTime] = useState();
  const [hour, setHour] = useState("00:00");

  useEffect(() => {
    setTime(new Date().toLocaleDateString("pt-BR"));
    const interval = setInterval(() => {
      setHour(new Date().toLocaleTimeString("pt-BR"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <GlobalValues.Provider
      value={{
        handleTransform,
        setLoginOrRegister,
        time,
        hour,
      }}
    >
      {children}
    </GlobalValues.Provider>
  );
};
