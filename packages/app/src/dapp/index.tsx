import React, { Suspense, Fragment, FC, useState, useEffect, useRef } from "react";

import Navbar from "./navbar";

import { store } from "./store";
import { login } from "./store/services/web3";

import { Provider } from "react-redux";
import { useDispatch } from "./store/hooks";

import { Routes, Route } from "react-router-dom";

import Drop from "./pages/drop";
import Drip from "./pages/drip";

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
        <Route path="/drop/:dropId" element={<Drop />} />
        <Route path="/drop/:dropId/:tokenId" element={<Drip />} />
      </Routes>
    </>
  );
};

export default IndexWrapper;
