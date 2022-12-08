import { FC } from "react";

// styles
import Style from "./style";

import { GridProps } from "@mui/material";

const CenterItem: FC<GridProps> = (props) => {
  return <Style.Root {...props}>{props.children}</Style.Root>;
};

export default CenterItem;
