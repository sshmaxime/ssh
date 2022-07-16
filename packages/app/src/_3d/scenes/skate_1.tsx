import React, { FC, forwardRef, useEffect, useImperativeHandle } from "react";

import { OrbitControls } from "@react-three/drei";

import ModelSkate from "@/_3d/models/skate";
import LoaderScene from "@/_3d/utils/loaderScene";
import { loadTextureToObject } from "@/_3d/utils/loaderTexture";

export type props = {
  _id: number;
};

export type sceneRef = ReturnType<typeof elem>;
const elem = (props: props, objRef: any, deckRef: any, placeholderRef: any) => ({
  changeTextureDeck(img: any) {
    loadTextureToObject(img, deckRef);
  },
  changeTexturePlaceholder(img: any) {
    loadTextureToObject(img, placeholderRef);
  },
  reset() {
    objRef.current.getAlert();
  },
});

const SceneLoader = forwardRef<sceneRef, props>((props, ref) => {
  const objRef = React.useRef();
  const deckRef = React.useRef<JSX.IntrinsicElements["mesh"]>(null!);
  const placeholderRef = React.useRef<JSX.IntrinsicElements["mesh"]>(null!);

  useImperativeHandle(ref, () => elem(props, objRef, deckRef, placeholderRef));

  return <Scene {...props} objRef={objRef} deckRef={deckRef} placeholderRef={placeholderRef} />;
});

const Scene: FC<props & { objRef: any; placeholderRef: any; deckRef: any }> = (props) => {
  return (
    <LoaderScene camera={[0, 40, -60]}>
      <ambientLight intensity={0.95} />
      <ModelSkate
        {...props}
        ref={props.objRef}
        deckRef={props.deckRef}
        placeholderRef={props.placeholderRef}
        _id={props._id}
      />
      <OrbitControls
        autoRotateSpeed={7.5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enableRotate={true}
        target={[0, 40, 0]}
      />
    </LoaderScene>
  );
};

export default SceneLoader;
