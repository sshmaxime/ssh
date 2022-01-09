import { FC } from "react";

// styles
import Style from "./style";

type props = { title: string };

const Pastille: FC<props> = ({ title }) => {
  return <Style.Root>{title}</Style.Root>;
};

export default Pastille;
