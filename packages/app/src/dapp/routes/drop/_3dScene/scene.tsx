import React, { FC, useState } from "react";

import { useGetDropsQuery } from "@/dapp/store/services/socket";
import SceneLoader, { sceneRefType } from "@/_3d/scenes/skate_1";
import { Grid } from "@mui/material";
import { Drip, Drop as DropType } from "@sshlabs/typings";
import { Route, Routes, useParams } from "react-router-dom";

import Style from "./style";
import { useDisplaySceneContext } from "./hook";

export const Scene: FC<{ sceneRef: sceneRefType; drop: DropType }> = ({ sceneRef, drop }) => {
  const { displayScene } = useDisplaySceneContext();

  return (
    <Style.BodyScene style={{ zIndex: 2, display: displayScene ? "block" : "none" }}>
      <SceneLoader
        sceneRef={sceneRef}
        model={drop.metadata.model}
        versions={drop.metadata.versions}
        initialVersion={0}
        initialPlaceholderTexture={drop.defaultItem.img}
        initialDropSymbol={drop.symbol}
        initialTokenNameId={"1" + " #" + 0}
        initialId={0}
      />
    </Style.BodyScene>
  );
};
