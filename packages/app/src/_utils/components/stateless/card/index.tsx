import React, { FC } from "react";
import ReactDOM from "react-dom";

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
