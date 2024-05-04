import React from "react";
import { Header } from "../../components/Header";
import { Bar } from "../../components/Bar";
import { Login } from "../subPages/Login";

export default function Home() {
  return (
    <div>
      <Header />
      <Bar />
      <Login />
    </div>
  );
}
