import { FC } from "react";

// styles
import Style from "./style";

type props = { title: string; color: string };

const Pastille: FC<props> = ({ title, color }) => {
  return <Style.Root color={color}>{title}</Style.Root>;
};

export default Pastille;
