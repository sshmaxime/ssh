import { FC } from "react";

import Navbar from "./navbar";
import DApp from "./dapp";

import { store } from "./store";
import { Provider } from "react-redux";

import { Routes, Route } from "react-router-dom";

type props = {};

const Index: FC<props> = ({ children }) => {
  return (
    <Provider store={store}>
      <Navbar />

      <Routes>
        <Route path="/drop/:dropId" element={<DApp />} />
      </Routes>
    </Provider>
  );
};

export default Index;
