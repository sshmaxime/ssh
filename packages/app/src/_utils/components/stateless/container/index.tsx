import { FC } from "react";

import Style from "./style";

export type ContainerProps = {
  title: string;
  subtitle: string;
  bgcolor?: "primary" | "secondary";
};

const ContainerComponent: FC<ContainerProps> = ({
  children,
  title,
  subtitle,
  bgcolor: bgcolor = "primary",
}) => {
  return (
    <Style.Root bgcolor={bgcolor}>
      <Style.Title>{title}</Style.Title>
      <Style.Subtitle>{subtitle}</Style.Subtitle>
      {children}
    </Style.Root>
  );
};

export default ContainerComponent;
