import React, { useContext } from "react";
import { Header } from "../../components/Header";
import { Bar } from "../../components/Bar";
import { Login } from "../../components/Login";
import { Register } from "../../components/Register";

import { GlobalValues } from "../../context/ContextValues";

export default function Home() {
  const context = useContext(GlobalValues);
  const { loginOrRegister } = context;

  return (
    <div>
      <Header />
      <Bar />
      {!loginOrRegister ? <Login /> : <Register />}
    </div>
  );
}
