import { Canvas, Vector3 } from "@react-three/fiber";
import { FC, Suspense } from "react";
import ThreeDCoomponent from "../../../_utils/components/3d";
import ModelRoom from "../../../_utils/assets/models/newRoom";
import { OrbitControls } from "@react-three/drei";

// styles
import Style from "./style";

const ThreeDHouse: FC<{ camera?: Vector3 }> = ({ children, camera }) => {
  return (
    <Style.Root>
      <ThreeDCoomponent camera={[150, 150, 150]}>
        <ambientLight intensity={0.95} />
        <ModelRoom position={[0, 0, 0]} />
        <OrbitControls enableZoom={false} enableRotate={false} />
      </ThreeDCoomponent>
    </Style.Root>
  );
};

export default ThreeDHouse;
