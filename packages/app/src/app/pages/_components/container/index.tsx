import { FC } from "react";

import Style from "./style";

export type ContainerProps = {
  title: string;
  subtitle: string;
  bgColor?: "primary" | "secondary";
};

const ContainerComponent: FC<ContainerProps> = ({
  children,
  title,
  subtitle,
  bgColor = "primary",
}) => {
  return (
    <Style.Root bgColor={bgColor}>
      <Style.Title>{title}</Style.Title>
      <Style.Subtitle>{subtitle}</Style.Subtitle>
      {children}
    </Style.Root>
  );
};

export default ContainerComponent;
