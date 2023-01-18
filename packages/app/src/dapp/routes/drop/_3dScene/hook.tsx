import { useState } from "react";
import constate from "constate";

export const useScene = () => {
  const [displayScene, _setDisplay] = useState(false);
  const [sceneReady, _setReady] = useState(false);

  const setDisplay = (value: boolean) => _setDisplay(value);
  const setReady = (value: boolean) => _setReady(value);
  return { displayScene, setDisplay, sceneReady, setReady };
};

export const [SceneProvider, useDisplaySceneContext] = constate(useScene);
