import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// theme
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

import { store } from "./store";

import "./index.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
