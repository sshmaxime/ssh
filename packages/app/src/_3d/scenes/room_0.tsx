import { FC } from "react";

import { OrbitControls } from "@react-three/drei";

import ModelRoom from "@/_3d/models/room";
import LoaderScene from "@/_3d/utils/loaderScene";

const Scene: FC = () => {
  return (
    <>
      <ambientLight intensity={0.95} />
      <ModelRoom position={[0, 0, 0]} />
      <OrbitControls />
    </>
  );
};

const SceneLoader: FC = (props) => {
  return (
    <LoaderScene camera={[150, 150, 150]}>
      <Scene {...props} />
    </LoaderScene>
  );
};

export default SceneLoader;
