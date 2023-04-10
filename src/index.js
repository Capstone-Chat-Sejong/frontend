import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/font.css";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import serongTheme from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={serongTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
);
