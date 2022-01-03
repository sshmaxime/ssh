import { FC } from "react";

// styles
import Style from "./style";

type props = {
  onClick: Function;
};

const Clickable: FC<props> = ({ children, onClick }) => {
  return <Style.Root onClick={() => onClick()}>{children}</Style.Root>;
};

export default Clickable;
