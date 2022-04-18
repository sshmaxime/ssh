import React, { FC, Suspense, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import * as THREE from "three";
import { TextureLoader as TxLoader } from "three";
import { useLoader } from "@react-three/fiber";
import SkateDefault from "../../../../_utils/assets/models/SkateDefault";

export type props = {
  deckTextures: string[];
  deckIndex: number;

  placeholderTextures: string[];
  placeholderIndex: number;

  _id: number;
};

const Skate: FC<props & JSX.IntrinsicElements["group"]> = (props) => {
  const deckTexsPath = props.deckTextures.map((elem) => elem);
  const deckTexs: THREE.Texture[] = useLoader(TxLoader, deckTexsPath);
  deckTexs.forEach((item) => (item.flipY = false));

  const placeholderTexsPath = props.placeholderTextures.map((elem) => elem);
  const placeholderTexs: THREE.Texture[] = useLoader(TxLoader, placeholderTexsPath);
  placeholderTexs.forEach((item) => (item.flipY = false));

  return (
    <SkateDefault
      {...props}
      deckTexture={deckTexs[props.deckIndex]}
      placeholderTexture={placeholderTexs[props.placeholderIndex]}
      _id={props._id}
    />
  );
};

export default Skate;
