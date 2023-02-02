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
  if (window.innerWidth < 1000) {
    return (
      <>This website isn't yet fully working on mobile. Please come back on your computer :)</>
    );
  }

  return (
    <BrowserRouter>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/app/*" element={<DApp />} />
          </Routes>
        </ThemeProvider>
      </React.StrictMode>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
