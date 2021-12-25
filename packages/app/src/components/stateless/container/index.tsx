import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// styles
import Style from "./style";

type props = {
  title: string;
};

const Container: FC<props> = ({ children, title }) => {
  return (
    <Style.Root>
      <Style.Title>{title}</Style.Title>
      <Style.Container>{children}</Style.Container>
    </Style.Root>
  );
};

export default Container;
