import { FC } from "react";

// styles
import Style from "./style";

import { useNavigate } from "react-router-dom";

type props = {
  onClick?: Function;
  onClick2?: Function;
  address?: string;
  external?: boolean;
  activated?: boolean;
  hoverAnimation?: boolean;
};

const Clickable: FC<props> = ({
  children,
  onClick,
  onClick2,
  address = "https://google.com",
  external = true,
  activated = true,
  hoverAnimation = true,
}) => {
  const navigate = useNavigate();

  let elem: any;
  if (onClick) {
    elem = <Style.Root onClick={(e) => (activated ? onClick(e) : () => {})}>{children}</Style.Root>;
  } else if (external) {
    elem = <Style.RootHref href={address}>{children}</Style.RootHref>;
  } else {
    elem = (
      <Style.RootLink
        onClick={(e) => {
          if (onClick2) onClick2(e);
          navigate(address);
        }}
      >
        {children}
      </Style.RootLink>
    );
  }

  return (
    <Style.RealRoot $activated={activated} $hoverAnimation={hoverAnimation}>
      {elem}
    </Style.RealRoot>
  );
};

export default Clickable;
