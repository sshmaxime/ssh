import { FC } from "react";

import { Tooltip as MaterialTootip } from "@mui/material";

// styles
import Style from "./style";

type props = { title: any };

const Tooltip: FC<props> = ({ children, title }) => {
  return (
    <Style.Root>
      <MaterialTootip arrow title={title} placement="top">
        <div>{children}</div>
      </MaterialTootip>
    </Style.Root>
  );
};

export default Tooltip;
