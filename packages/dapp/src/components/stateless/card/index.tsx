import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// styles
import Style from "./style";

const Card: FC = ({ children }) => {
  return (
    <Style.Root>
      <Style.Card>{children}</Style.Card>
    </Style.Root>
  );
};

export default Card;
