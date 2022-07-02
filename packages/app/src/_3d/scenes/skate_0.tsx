import React, { FC, forwardRef, useImperativeHandle } from "react";

import { OrbitControls } from "@react-three/drei";

import ModelSkate from "@/_3d/models/skate";
import LoaderScene from "@/_3d/utils/loaderScene";
import { loadTextureToObject } from "@/_3d/utils/loaderTexture";

export type props = {
  _id: number;
};

export type sceneRef = ReturnType<typeof elem>;
const elem = (props: props, deckRef: any, placeholderRef: any) => ({
  changeTextureDeck(img: any) {
    loadTextureToObject(img, deckRef);
  },
  changeTexturePlaceholder(img: any) {
    loadTextureToObject(img, placeholderRef);
  },
});

const SceneLoader = forwardRef<sceneRef, props>((props, ref) => {
  const deckRef = React.useRef<JSX.IntrinsicElements["mesh"]>(null!);
  const placeholderRef = React.useRef<JSX.IntrinsicElements["mesh"]>(null!);

  useImperativeHandle(ref, () => elem(props, deckRef, placeholderRef));

  return <Scene {...props} deckRef={deckRef} placeholderRef={placeholderRef} />;
});

const Scene: FC<props & { placeholderRef: any; deckRef: any }> = (props) => {
  return (
    <LoaderScene camera={[0, 40, -60]}>
      <ambientLight intensity={0.95} />
      <ModelSkate
        {...props}
        deckRef={props.deckRef}
        placeholderRef={props.placeholderRef}
        _id={props._id}
      />
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={7.5}
        enableZoom={false}
        enableRotate={false}
        target={[0, 40, 0]}
      />
    </LoaderScene>
  );
};

export default SceneLoader;
