import React, { FC, forwardRef, useEffect, useImperativeHandle, useState } from "react";

import { OrbitControls } from "@react-three/drei";

import ModelSkate, { ModelSkatePublicProps } from "@/_3d/models/skate";
import LoaderScene from "@/_3d/utils/loaderScene";
import { loadTextureToObject, loadIdTexture } from "@/_3d/utils/loaderTexture";
import { useFrame, useThree } from "@react-three/fiber";
import { Camera } from "three";
import { useR3fState } from "../utils/hooks";

export type sceneRef = ReturnType<typeof elem>;
const elem = (
  props: ModelSkatePublicProps,
  groupRef: any,
  deckRef: any,
  placeholderRef: any,
  idRef: any
) => ({
  changeTextureDeck(img: any) {
    loadTextureToObject(img, deckRef);
  },
  changeTexturePlaceholder(img: any) {
    loadTextureToObject(img, placeholderRef);
  },
  changeId(newId: number) {
    loadIdTexture(newId, idRef);
  },
  reset() {},
  hello() {
    alert("hello");
  },
});

const useSkateRefsLoader = () => {
  return {
    groupRef: React.useRef<JSX.IntrinsicElements["group"]>(null),
    deckRef: React.useRef<JSX.IntrinsicElements["mesh"]>(null),
    placeholderRef: React.useRef<JSX.IntrinsicElements["mesh"]>(null),
    idRef: React.useRef<JSX.IntrinsicElements["meshBasicMaterial"]>(null),
  };
};

const SceneLoader: FC<ModelSkatePublicProps & { innerRef: any }> = React.memo((props, ref) => {
  return (
    <LoaderScene>
      <Scene {...props} />
    </LoaderScene>
  );
});

export type SceneFct = ReturnType<typeof sceneFct>;
const sceneFct = () => ({});

const Scene: FC<
  ModelSkatePublicProps & {
    innerRef: any;
  }
> = (props) => {
  const { groupRef, deckRef, placeholderRef, idRef } = useSkateRefsLoader();

  const { camera } = useThree();
  const [isMouseOver, setMouseOver] = useR3fState(false);

  camera.position.set(0, 40, -60);
  camera.lookAt(0, 40, 0);

  useImperativeHandle(props.innerRef, () => elem(props, groupRef, deckRef, placeholderRef, idRef));

  useFrame((state, delta) => {
    if (!isMouseOver.current) {
      (groupRef as any).current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <ambientLight intensity={0.95} />
      <OrbitControls autoRotateSpeed={7.5} target={[0, 40, 0]} />
      <ModelSkate
        {...props}
        groupRef={groupRef}
        deckRef={deckRef}
        placeholderRef={placeholderRef}
        idRef={idRef}
        onPointerEnter={() => setMouseOver(true)}
        onPointerLeave={() => setMouseOver(false)}
      />
    </>
  );
};
//

export default SceneLoader;
