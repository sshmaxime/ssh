import React from "react";
import ReactDOM from "react-dom";

// theme
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

// navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./app";
import DApp from "./dapp";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/app" element={<DApp />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
