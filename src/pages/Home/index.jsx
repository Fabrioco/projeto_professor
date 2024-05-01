import React from "react";
import { Header } from "../../components/Header";
import { Bar } from "../../components/Bar";
import { Login } from "../../components/Login";

export default function Home() {
  return (
    <div>
      <Header />
      <Bar />
      <Login />
    </div>
  );
}
