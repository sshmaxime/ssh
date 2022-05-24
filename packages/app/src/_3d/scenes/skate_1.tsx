import { FC } from "react";

import { OrbitControls } from "@react-three/drei";

import ModelSkate from "@/_3d/models/skate";
import LoaderScene from "@/_3d/utils/loaderScene";
import useTexture from "@/_3d/utils/loaderTexture";

export type props = {
  deckTexture: string;
  placeholderTexture: string;
  _id: number;
};

const Scene: FC<props> = (props) => {
  const deckTexs = useTexture(props.deckTexture);
  const placeholderTexs = useTexture(props.placeholderTexture);

  return (
    <>
      <ambientLight intensity={0.95} />
      <ModelSkate
        {...props}
        deckTexture={deckTexs}
        placeholderTexture={placeholderTexs}
        _id={props._id}
      />
      <OrbitControls
        // autoRotate={true}
        autoRotateSpeed={7.5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enableRotate={true}
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
