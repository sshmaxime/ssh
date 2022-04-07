import { FC } from "react";

// styles
import Style from "./style";

type props = {
  onClick?: Function;
  address?: string;
  external?: boolean;
  hoverEffect?: boolean;
};

const Clickable: FC<props> = ({
  children,
  onClick,
  hoverEffect,
  address = "https://google.com",
  external = true,
}) => {
  let elem: any;
  if (onClick) {
    elem = <Style.Root onClick={() => onClick()}>{children}</Style.Root>;
  } else if (external) {
    elem = <Style.RootHref href={address}>{children}</Style.RootHref>;
  } else {
    elem = (
      <Style.RootLink to={{ pathname: address }}>{children}</Style.RootLink>
    );
  }

  return <Style.RealRoot hoverEffect={hoverEffect}>{elem}</Style.RealRoot>;
};

export default Clickable;
