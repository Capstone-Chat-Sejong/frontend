import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/font.css";
import GlobalStyle from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
