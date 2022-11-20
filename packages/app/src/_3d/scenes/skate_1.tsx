import React, { FC, forwardRef, Suspense, useEffect, useImperativeHandle, useState } from "react";

import { OrbitControls } from "@react-three/drei";

import ModelSkate, {
  defaultSkateModelAnimation,
  ModelMetadataProps,
  SkateRefs,
  useSkateRefsLoader,
} from "@/_3d/models/skate";
import LoaderScene from "@/_3d/utils/loaderScene";
import { useFrame, useThree } from "@react-three/fiber";
import { useR3fState } from "../utils/hooks";
import { CameraControls } from "../utils/cameraControls";
import { Loader } from "../utils/loader";

export type sceneRef = ReturnType<typeof sceneFunctions>;
export type sceneRefType = React.MutableRefObject<sceneRef>;
const sceneFunctions = (
  refs: SkateRefs,
  camera: React.MutableRefObject<CameraControls>,
  props: ModelMetadataProps
) => ({
  ...defaultSkateModelAnimation(refs, props),
  reset3DView() {
    camera.current?.setPosition(0, 40, -65, true);
  },
});

const SceneLoader: FC<ModelMetadataProps & { sceneRef: sceneRefType }> = React.memo(
  (props, ref) => {
    return (
      <LoaderScene>
        <Suspense fallback={<Loader />}>
          <Scene {...props} />
        </Suspense>
      </LoaderScene>
    );
  }
);

const Scene: FC<ModelMetadataProps & { sceneRef: sceneRefType }> = (props) => {
  const cameraControls = React.useRef<CameraControls>(null!);

  const refs = useSkateRefsLoader();
  useImperativeHandle(props.sceneRef, () => sceneFunctions(refs, cameraControls, props));

  const [isMouseOver, setMouseOver] = useR3fState(false);

  useFrame((state, delta) => {
    if (!isMouseOver.current) {
      // (refs.groupRef as any).current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <CameraControls ref={cameraControls} position={[0, 40, -65]} target={[0, 40, 0]} />
      <ambientLight intensity={0.975} />
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
