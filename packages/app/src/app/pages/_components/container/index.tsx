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
  bgcolor: bgColor = "primary",
}) => {
  return (
    <Style.Root bgcolor={bgColor}>
      <Style.Title>{title}</Style.Title>
      <Style.Subtitle>{subtitle}</Style.Subtitle>
      {children}
    </Style.Root>
  );
};

export default ContainerComponent;
