import React, { FC } from "react";

import { Grid, Typography } from "@mui/material";

import { Drop } from "@premier/typings";
import { ethers } from "ethers";

import Style from "./style";
import CenterItem from "@/_utils/components/grid/centerItem";
import SceneLoader, { sceneRef } from "@/_3d/scenes/skate_2";

const HomeComponent: FC = ({}) => {
  const sceneRef = React.useRef<sceneRef>(null!);

  return (
    <Style.Root>
      <Style.HomeScreenContainer>
        <Style.HomeScreen>
          <CenterItem $full={true}>
            <Style.Title>HomePage</Style.Title>
          </CenterItem>
        </Style.HomeScreen>
      </Style.HomeScreenContainer>
    </Style.Root>
  );
};

export default HomeComponent;
