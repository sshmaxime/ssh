import { FC } from "react";

// styles
import Style from "./style";

type props = {
  onClick?: Function;
  address?: string;
  external?: boolean;
};

const Clickable: FC<props> = ({
  children,
  onClick,
  address = "https://google.com",
  external = true,
}) => {
  if (onClick) {
    return <Style.Root onClick={() => onClick()}>{children}</Style.Root>;
  }

  if (external) {
    return <Style.RootHref href={address}>{children}</Style.RootHref>;
  }

  return <Style.RootLink to={{ pathname: address }}>{children}</Style.RootLink>;
};

export default Clickable;
