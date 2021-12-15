import React, { FC } from "react";

// styles
import Style from "./style";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["PUNKS", "BAYC", "MOONCATS"];

const Home: FC = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Style.Root>
      <Style.View1>
        <Style.Background>
          <Style.TitleContainer>
            <Style.Title>WEAR YOUR&nbsp;</Style.Title>
            <Style.Title2>
              <TextTransition
                inline
                text={TEXTS[index % TEXTS.length]}
                springConfig={presets.stiff}
              />
            </Style.Title2>
          </Style.TitleContainer>
          <Style.Triangle />
        </Style.Background>
      </Style.View1>
      <Style.View2>dwedw</Style.View2>
    </Style.Root>
  );
};

export default Home;
