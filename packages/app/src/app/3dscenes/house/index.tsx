import { Canvas, Vector3 } from "@react-three/fiber";
import React, { FC, Suspense } from "react";
import ModelRoom from "../../../_utils/assets/models/newRoom";
import { OrbitControls } from "@react-three/drei";

// styles
import Style from "./style";
import LoaderModel from "../../../_utils/3d/loaderModel";

const ThreeDHouse: FC<{ camera?: Vector3 }> = (props, { children, camera }) => {
  return (
    <Style.Root>
      <LoaderModel camera={[150, 150, 150]}>
        <ambientLight intensity={0.95} />
        <ModelRoom position={[0, 0, 0]} />
        <OrbitControls />
      </LoaderModel>
    </Style.Root>
  );
};

export default ThreeDHouse;
