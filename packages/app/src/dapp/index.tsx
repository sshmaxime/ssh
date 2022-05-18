import { FC } from "react";

import Navbar from "./navbar";
import DApp from "./dapp";

import { store } from "./store";
import { Provider } from "react-redux";

type props = {};

const Index: FC<props> = ({ children }) => {
  return (
    <Provider store={store}>
      <Navbar />

      {/*  */}
      <DApp dropId={0} />
    </Provider>
  );
};

export default Index;
