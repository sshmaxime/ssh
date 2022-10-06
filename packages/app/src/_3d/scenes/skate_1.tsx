import React, { FC, forwardRef, useEffect, useImperativeHandle } from "react";

import { OrbitControls } from "@react-three/drei";

import ModelSkate, { ModelSkatePublicProps } from "@/_3d/models/skate";
import LoaderScene from "@/_3d/utils/loaderScene";
import { loadTextureToObject } from "@/_3d/utils/loaderTexture";

export type sceneRef = ReturnType<typeof elem>;
const elem = (props: ModelSkatePublicProps, deckRef: any, placeholderRef: any, idRef: any) => ({
  changeTextureDeck(img: any) {
    loadTextureToObject(img, deckRef);
  },
  changeTexturePlaceholder(img: any) {
    loadTextureToObject(img, placeholderRef);
  },
  changeId(newId: number) {
    idRef.current = newId;
  },
  reset() {},
});

const SceneLoader = React.memo(
  forwardRef<sceneRef, ModelSkatePublicProps>((props, ref) => {
    const deckRef = React.useRef<JSX.IntrinsicElements["mesh"]>(null!);
    const placeholderRef = React.useRef<JSX.IntrinsicElements["mesh"]>(null!);
    const idRef = React.useRef<Number>(props.initialId || 0);

    useImperativeHandle(ref, () => elem(props, deckRef, placeholderRef, idRef));

    return <Scene {...props} deckRef={deckRef} placeholderRef={placeholderRef} idRef={idRef} />;
  })
);

const Scene: FC<ModelSkatePublicProps & { placeholderRef: any; deckRef: any; idRef: any }> = (
  props
) => {
  return (
    <LoaderScene camera={[0, 40, -60]}>
      <ambientLight intensity={0.95} />
      <ModelSkate {...props} />
      <OrbitControls
        autoRotateSpeed={7.5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enableRotate={false}
        target={[0, 40, 0]}
      />
    </LoaderScene>
  );
};

export default SceneLoader;
