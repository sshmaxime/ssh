import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Navbar from "./components/stateful/navbar";

import { store } from "./store";

import "./index.css";

const App: FC = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
