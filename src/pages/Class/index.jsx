import React, { useEffect } from "react";
import { Header } from "../../components/Header";
import { useLocation } from "react-router-dom";

export const Class = () => {
  const location = useLocation();
  useEffect(() => {
    if (location !== "/") {
      alert("oi");
    }
  });

  return (
    <div>
      <Header />
      <h1>oi</h1>
    </div>
  );
};
