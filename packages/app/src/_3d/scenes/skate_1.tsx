import React, { FC, forwardRef, useEffect, useImperativeHandle, useState } from "react";

import { OrbitControls } from "@react-three/drei";

import ModelSkate, {
  defaultSkateModelAnimation,
  SkateRefs,
  useSkateRefsLoader,
} from "@/_3d/models/skate";
import LoaderScene from "@/_3d/utils/loaderScene";
import { useFrame, useThree } from "@react-three/fiber";
import { useR3fState } from "../utils/hooks";
import { CameraControls } from "../utils/cameraControls";

export type sceneRef = ReturnType<typeof sceneFunctions>;
export type sceneRefType = React.MutableRefObject<sceneRef>;
const sceneFunctions = (refs: SkateRefs, camera: React.MutableRefObject<CameraControls>) => ({
  ...defaultSkateModelAnimation(refs),
  reset3DView() {
    camera.current?.setPosition(0, 40, -70, true);
  },
});

const SceneLoader: FC<{ sceneRef: sceneRefType }> = React.memo((props, ref) => {
  return (
    <LoaderScene>
      <Scene {...props} />
    </LoaderScene>
  );
});

const Scene: FC<{ sceneRef: sceneRefType }> = (props) => {
  const cameraControls = React.useRef<CameraControls>(null);

  const refs = useSkateRefsLoader();
  useImperativeHandle(props.sceneRef, () => sceneFunctions(refs, cameraControls as any));

  const [isMouseOver, setMouseOver] = useR3fState(false);

  useFrame((state, delta) => {
    if (!isMouseOver.current) {
      (refs.groupRef as any).current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <ambientLight intensity={0.975} />
      <CameraControls ref={cameraControls} position={[0, 40, -70]} target={[0, 40, 0]} />
      <ModelSkate
        {...props}
        refs={refs}
        onPointerEnter={() => setMouseOver(true)}
        onPointerLeave={() => setMouseOver(false)}
      />
    </>
  );
};

export default SceneLoader;
