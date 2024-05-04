import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const GlobalValues = createContext({});

export const ContextValues = ({ children }) => {
  const location = useLocation();

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

  const [nameCSS, setNameCSS] = useState("header login");
  const [namePerson, setNamePerson] = useState(false);

  useEffect(() => {
    const loadPage = () => {
      if (location.pathname !== "/") {
        setNameCSS("header another");
        setNamePerson(true);
      } else {
        setNameCSS("header login");
        setNamePerson(false);
      }
    };
    loadPage();
  }, [location]);

  return (
    <GlobalValues.Provider
      value={{
        handleTransform,
        setLoginOrRegister,
        time,
        hour,
        nameCSS,
        namePerson,
      }}
    >
      {children}
    </GlobalValues.Provider>
  );
};
