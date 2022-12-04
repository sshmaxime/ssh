import React, { FC, forwardRef, Suspense, useImperativeHandle } from "react";

import { OrbitControls } from "@react-three/drei";

import ModelSkate, {
  SkateRefs,
  useSkateRefsLoader,
  ModelMetadataProps,
  defaultSkateModelAnimation,
} from "@/_3d/models/skate";
import LoaderScene from "@/_3d/utils/loaderScene";
import { useFrame, useThree } from "@react-three/fiber";
import { Loader } from "../utils/loader";

export type sceneRef = ReturnType<typeof sceneFunctions>;
export type sceneRefType = React.MutableRefObject<sceneRef>;
const sceneFunctions = (refs: SkateRefs, props: ModelMetadataProps) => ({
  ...defaultSkateModelAnimation(refs, props),

  // ...defaultSkateModelAnimation(refs),
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
  const refs = useSkateRefsLoader();
  useImperativeHandle(props.sceneRef, () => sceneFunctions(refs, props));

  const { camera } = useThree();

  camera.position.set(0, 40, -60);
  camera.lookAt(0, 40, 0);

  useFrame((state, delta) => {
    (refs.groupRef as any).current.rotation.y += 0.005;
  });

  return (
    <>
      <ambientLight intensity={0.95} />
      <ModelSkate {...props} refs={refs} />
    </>
  );
};

export default SceneLoader;
