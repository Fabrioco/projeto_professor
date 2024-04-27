import React from "react";
import ReactDOM from "react-dom/client";
import App from "./template/index.jsx";
import "./styles/reset.css";
import "./styles/root.css";
import { ContextValues } from "./context/ContextValues.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextValues>
      <App />
    </ContextValues>
  </React.StrictMode>
);
