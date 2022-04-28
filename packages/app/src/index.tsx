import React, { FC } from "react";
import ReactDOM from "react-dom";

// theme
import { ThemeProvider } from "@mui/material";
import { theme } from "./_theme";

// navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./app";
import DApp from "./dapp";

const Index: FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/app" element={<DApp />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
