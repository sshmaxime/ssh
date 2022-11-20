import React, { FC, forwardRef, useImperativeHandle } from "react";

import { OrbitControls } from "@react-three/drei";

import ModelSkate, {
  SkateRefs,
  useSkateRefsLoader,
  ModelMetadataProps,
  defaultSkateModelAnimation,
} from "@/_3d/models/skate";
import LoaderScene from "@/_3d/utils/loaderScene";
import { useFrame, useThree } from "@react-three/fiber";

export type sceneRef = ReturnType<typeof sceneFunctions>;
export type sceneRefType = React.MutableRefObject<sceneRef>;
const sceneFunctions = (refs: SkateRefs) => ({
  // ...defaultSkateModelAnimation(refs),
});

const SceneLoader: FC<ModelMetadataProps & { sceneRef: sceneRefType }> = React.memo(
  (props, ref) => {
    return (
      <LoaderScene>
        <Scene {...props} />
      </LoaderScene>
    );
  }
);

const Scene: FC<ModelMetadataProps & { sceneRef: sceneRefType }> = (props) => {
  const refs = useSkateRefsLoader();
  useImperativeHandle(props.sceneRef, () => sceneFunctions(refs));

  const { camera } = useThree();

  camera.position.set(0, 40, -60);
  camera.lookAt(0, 40, 0);

  useFrame((state, delta) => {
    (refs.groupRef as any).current.rotation.y += 0.01;
  });

  return (
    <>
      <ambientLight intensity={0.95} />
      <ModelSkate {...props} refs={refs} />
    </>
  );
};

export default SceneLoader;
