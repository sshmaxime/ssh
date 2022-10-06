import React, { FC, forwardRef, useEffect, useImperativeHandle } from "react";

import { OrbitControls } from "@react-three/drei";

import ModelSkate, { ModelSkatePublicProps } from "@/_3d/models/skate";
import LoaderScene from "@/_3d/utils/loaderScene";
import { loadTextureToObject, loadIdTexture } from "@/_3d/utils/loaderTexture";
import { useFrame } from "@react-three/fiber";

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
      <Scene
        {...props}
        groupRef={groupRef}
        deckRef={deckRef}
        placeholderRef={placeholderRef}
        idRef={idRef}
      />
    );
  })
);

const Scene: FC<
  ModelSkatePublicProps & { groupRef: any; placeholderRef: any; deckRef: any; idRef: any }
> = (props) => {
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
      {/*  */}
      <Animation {...props} />
    </LoaderScene>
  );
};

const Animation: FC<
  ModelSkatePublicProps & { groupRef: any; deckRef: any; placeholderRef: any; idRef: any }
> = (props) => {
  useFrame((state, delta) => {
    (props.groupRef as any).current.rotation.y += 0.01;
  });
  return <></>;
};
//

export default SceneLoader;
