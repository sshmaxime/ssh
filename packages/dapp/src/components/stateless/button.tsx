import { FC } from "react";

type props = {
  text: string;
};

export const Button: FC<props> = ({ text }) => {
  return (
    <>
      <button>{text}</button>
    </>
  );
};

export default Button;
