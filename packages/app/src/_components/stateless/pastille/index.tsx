import { FC } from "react";

// styles
import Style from "./style";

type props = { title: string; secondary?: boolean };

const Pastille: FC<props> = ({ title, secondary }) => {
  return <Style.Root secondary={secondary}>{title}</Style.Root>;
};

export default Pastille;
