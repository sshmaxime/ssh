import React, { FC, Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import SkateDefault from "./SkateDefault";

export type props = {
  itemId: number;
  texturePath: string;
  placeholderPath: string;
};

const Skate: FC<props> = (props) => {
  return <SkateDefault {...props} />;
};

export default Skate;
