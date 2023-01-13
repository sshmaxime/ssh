import React, { FC, useEffect } from "react";

import Navbar from "./navbar";

import { store } from "./store";
import { login } from "./store/services/web3";

import { Provider } from "react-redux";
import { useDispatch } from "./store/hooks";

import { Route, Routes } from "react-router-dom";

import Drop from "./pages/drop";
import SceneLoader, { sceneRef } from "@/_3d/scenes/skate_1";

type props = {};

const IndexWrapper: FC<props> = ({ children }) => {
  return (
    <Provider store={store}>
      <Dapp />
    </Provider>
  );
};

const Dapp: FC<props> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login());
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/drop" element={<>hi</>} />
        <Route path="/drop/:dropId/*" element={<Drop />} />
      </Routes>
    </>
  );
};

export default IndexWrapper;
