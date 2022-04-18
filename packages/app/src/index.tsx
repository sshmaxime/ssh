import React, { FC } from "react";
import ReactDOM from "react-dom";

// theme
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./_theme";

// navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./app";
import DApp from "./dapp";

const Index: FC = () => {
  if (window.innerWidth < 1050) {
    return (
      <>
        Mobile version is not stable yet. Use the website on your desktop. It's much safer anyway.
      </>
    );
  }

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
