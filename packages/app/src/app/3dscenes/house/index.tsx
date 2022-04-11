import { Canvas, Vector3 } from "@react-three/fiber";
import { FC, Suspense } from "react";
import ThreeDCoomponent from "../../../_utils/components/3d";
import ModelRoom from "../../../_utils/assets/models/Room";

// styles
import Style from "./style";

const ThreeDHouse: FC<{ camera?: Vector3 }> = ({ children, camera }) => {
  return (
    <Style.Root>
      <ThreeDCoomponent>
        <ambientLight intensity={0.95} />
        <ModelRoom position={[0, -50, -225]} />
      </ThreeDCoomponent>
    </Style.Root>
  );
};

export default ThreeDHouse;
