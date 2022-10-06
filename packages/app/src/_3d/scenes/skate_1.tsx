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
});

const SceneLoader = React.memo(
  forwardRef<sceneRef, ModelSkatePublicProps>((props, ref) => {
    const groupRef = React.useRef<THREE.Group>(null);
    const deckRef = React.useRef<JSX.IntrinsicElements["mesh"]>(null!);
    const placeholderRef = React.useRef<JSX.IntrinsicElements["mesh"]>(null!);
    const idRef = React.useRef<Number>(props.initialId || 0);

    useImperativeHandle(ref, () => elem(props, groupRef, deckRef, placeholderRef, idRef));

    return (
      <SceneWrapper
        {...props}
        groupRef={groupRef}
        deckRef={deckRef}
        placeholderRef={placeholderRef}
        idRef={idRef}
      />
    );
  })
);

const SceneWrapper: FC<
  ModelSkatePublicProps & { groupRef: any; placeholderRef: any; deckRef: any; idRef: any }
> = (props) => {
  return (
    <LoaderScene>
      <Scene {...props} />
    </LoaderScene>
  );
};

const Scene: FC<
  ModelSkatePublicProps & { groupRef: any; deckRef: any; placeholderRef: any; idRef: any }
> = (props) => {
  const { camera } = useThree();
  const [isMouseOver, setMouseOver] = useR3fState(false);

  camera.position.set(0, 40, -60);
  camera.lookAt(0, 40, 0);

  useFrame((state, delta) => {
    if (!isMouseOver.current) {
      (props.groupRef as any).current.rotation.y += 0.0125;
    }
  });
  return (
    <>
      <ambientLight intensity={0.95} />
      <ModelSkate
        {...props}
        onPointerEnter={() => setMouseOver(true)}
        onPointerLeave={() => setMouseOver(false)}
      />
    </>
  );
};
//

export default SceneLoader;
