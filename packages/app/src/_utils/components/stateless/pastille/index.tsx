import { FC } from "react";

// styles
import Style from "./style";

type props = { title: string; secondary?: boolean; small?: boolean };

const Pastille: FC<props> = ({ title, secondary, small }) => {
  return (
    <Style.Root secondary={secondary} small={small}>
      {title}
    </Style.Root>
  );
};

export default Pastille;
