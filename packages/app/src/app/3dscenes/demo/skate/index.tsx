import React, { FC, Suspense, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import * as THREE from "three";
import { TextureLoader as TxLoader } from "three";
import { useLoader } from "@react-three/fiber";
import SkateDefault from "../../../../_utils/assets/models/SkateDefault";

const exempleDrip = [
  {
    itemId: 825,
    placeholderPath: "/models/skate/Tex/imgForMiddle.png",
  },
  {
    itemId: 397,
    placeholderPath: "/models/skate/Tex/imgForMiddle1.png",
  },
  {
    itemId: 527,
    placeholderPath: "/models/skate/Tex/imgForMiddle2.png",
  },
];

export type props = {
  deckTextures: string[];
  deckIndex: number;

  placeholderTextures: string[];
  placeholderIndex: number;
};

const Skate: FC<props> = (props) => {
  const deckTexsPath = props.deckTextures.map((elem) => elem);
  const deckTexs: THREE.Texture[] = useLoader(TxLoader, deckTexsPath);
  deckTexs.forEach((item) => (item.flipY = false));

  const placeholderTexsPath = exempleDrip.map((elem) => elem.placeholderPath);
  const placeholderTexs: THREE.Texture[] = useLoader(TxLoader, placeholderTexsPath);
  placeholderTexs.forEach((item) => (item.flipY = false));

  // const [stateCounter, setStateCounter] = useState(0);
  // const [state, setState] = useState(placeholderTexs[0]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     let innerStateCounter = stateCounter;
  //     //
  //     if (stateCounter === exempleDrip.length - 1) {
  //       innerStateCounter = 0;
  //     } else {
  //       innerStateCounter = stateCounter + 1;
  //     }
  //     setState(placeholderTexs[innerStateCounter]);
  //     setStateCounter(innerStateCounter);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [stateCounter]);

  return (
    <SkateDefault
      deckTexture={deckTexs[props.deckIndex]}
      placeholderTexture={placeholderTexs[props.placeholderIndex]}
      id={100}
    />
  );
};

export default Skate;
