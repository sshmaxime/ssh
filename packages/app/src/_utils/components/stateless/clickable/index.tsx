import { FC } from "react";

// styles
import Style from "./style";

type props = {
  onClick?: Function;
  address?: string;
  external?: boolean;
  activated?: boolean;
};

const Clickable: FC<props> = ({
  children,
  onClick,
  address = "https://google.com",
  external = true,
  activated = true,
}) => {
  let elem: any;
  if (onClick) {
    elem = <Style.Root onClick={(e) => (activated ? onClick(e) : () => {})}>{children}</Style.Root>;
  } else if (external) {
    elem = <Style.RootHref href={address}>{children}</Style.RootHref>;
  } else {
    elem = <Style.RootLink to={{ pathname: address }}>{children}</Style.RootLink>;
  }

  return <Style.RealRoot activated={activated}>{elem}</Style.RealRoot>;
};

export default Clickable;
