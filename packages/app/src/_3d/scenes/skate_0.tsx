import { FC } from "react";

import { OrbitControls } from "@react-three/drei";

import ModelSkate from "@/_3d/models/skate";
import LoaderScene from "@/_3d/utils/loaderScene";
import useTexture from "@/_3d/utils/loaderTexture";

export type props = {
  deckTextures: string[];
  deckIndex: number;

  placeholderTextures: string[];
  placeholderIndex: number;

  _id: number;
};

const Scene: FC<props> = (props) => {
  const deckTexs = useTexture(props.deckTextures);
  const placeholderTexs = useTexture(props.placeholderTextures);

  return (
    <>
      <ambientLight intensity={0.95} />
      <ModelSkate
        {...props}
        deckTexture={deckTexs[props.deckIndex]}
        placeholderTexture={placeholderTexs[props.placeholderIndex]}
        _id={props._id}
      />
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={7.5}
        enableZoom={false}
        enableRotate={false}
        target={[0, 40, 0]}
      />
    </>
  );
};

const SceneLoader: FC<props> = (props) => {
  return (
    <LoaderScene camera={[0, 40, -60]}>
      <Scene {...props} />
    </LoaderScene>
  );
};

export default SceneLoader;
