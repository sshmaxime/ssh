import { FC } from "react";

import { sceneRefType } from "@/_3d/scenes/skate_1";
import { Drop } from "@sshlabs/typings";
import { ethers } from "ethers";

import Style from "./style";
import { Grid } from "@mui/material";

import ImgWave from "@/_utils/assets/images/wave.png";

const HomeComponent: FC = ({}) => {
  return (
    <Style.Root>
      <Grid
        container
        style={{ height: "100%", width: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Style.DropItem></Style.DropItem>
      </Grid>
    </Style.Root>
  );
};

export default HomeComponent;
