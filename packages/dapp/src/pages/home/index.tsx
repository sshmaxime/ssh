import { FC } from "react";

// styles
import Style from "./style";

const Home: FC = () => {
  return (
    <Style.Root>
      <Style.View1>
        <Style.Title>Hello !</Style.Title>
        <Style.Triangle />
      </Style.View1>
    </Style.Root>
  );
};

export default Home;
