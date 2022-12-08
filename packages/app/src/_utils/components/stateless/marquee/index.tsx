import { FC } from "react";

// styles
import Style from "./style";

import Ticker from "react-ticker";

const Marquee: FC<{
  word: any;
  direction?: "toLeft" | "toRight";
  fontSize?: string;
  speed?: number;
}> = ({ word, direction = "toLeft", fontSize, speed }) => {
  return (
    <Style.Root>
      <Ticker direction={direction} speed={speed}>
        {({ index }) => (
          <>
            <Style.Sentence fontSize={fontSize}>{word}</Style.Sentence>
          </>
        )}
      </Ticker>
    </Style.Root>
  );
};

export default Marquee;
