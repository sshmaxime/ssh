import { Canvas, Vector3 } from "@react-three/fiber";
import React, { FC, Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// styles
import Style from "./style";

const ThreeDCoomponent: FC<{ camera?: Vector3 }> = ({ children, camera }) => {
  return (
    <Style.Root>
      <Suspense fallback={null}>
        <Canvas
          flat={true}
          linear={true}
          camera={{ position: camera }}
          style={{ height: "100%", width: "100%" }}
        >
          {children}
        </Canvas>
      </Suspense>
    </Style.Root>
  );
};

export default ThreeDCoomponent;
