import React from "react";
import ReactDOM from "react-dom/client";
import App from "./template/index.jsx";
import "./styles/root.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
