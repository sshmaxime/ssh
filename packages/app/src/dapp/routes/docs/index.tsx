import { FC } from "react";

import { Grid, Typography } from "@mui/material";

import { sceneRefType } from "@/_common/3d/scenes/skate_1";
import { Drop } from "@premier/typings";
import { ethers } from "ethers";

import Style from "./style";
import CenterItem from "@/_common/components/grid/centerItem";

const HomeComponent: FC = ({}) => {
  return (
    <Style.Root>
      <Style.HomeScreenContainer>
        <Style.HomeScreen>
          <Grid container style={{ height: "100%" }}>
            <Grid item xs={12} style={{ height: "100%" }}>
              <CenterItem $full={true}>
                <Style.Title>To Be Added Soon.</Style.Title>
              </CenterItem>
            </Grid>
          </Grid>
        </Style.HomeScreen>
      </Style.HomeScreenContainer>
    </Style.Root>
  );
};

export default HomeComponent;
