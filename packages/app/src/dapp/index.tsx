import { FC } from "react";

import Navbar from "./../app/navbar";
import DApp from "./dapp";

type props = {};

const Index: FC<props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <DApp />
    </>
  );
};

export default Index;
