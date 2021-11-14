import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// styles
import Style from "./style";

type props = {
  title: string;
};

const Button: FC<props> = ({ title }) => {
  return (
    <Style.Root>
      <Style.Button>{title}</Style.Button>
    </Style.Root>
  );
};

export default Button;
