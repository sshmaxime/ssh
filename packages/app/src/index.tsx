import React, { FC } from "react";
import ReactDOM from "react-dom";

// theme
import { ThemeProvider } from "@mui/material";
import { theme } from "@/_common/theme/theme";

// navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Static from "./static";
import App from "./app";

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
            <Route path="/*" element={<Static />} />
            <Route path="/app/*" element={<App />} />
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
