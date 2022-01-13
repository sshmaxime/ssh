import React, { Fragment, FC, useState, useEffect } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  Grid,
  SwipeableDrawer,
  ImageList,
  ImageListItem,
} from "@mui/material";

import Style from "./style";

import Step from "@mui/material/Step";
import { Fade } from "react-awesome-reveal";
import { useLocation, useParams } from "react-router-dom";

import af1x_exemple from "../../../_assets/images/Punk_7804.png";
import Pastille from "../../../_components/stateless/pastille";
import Project from "../../../_components/stateless/project";
import Clickable from "../../../_components/stateless/clickable";

const Home: FC = () => {
  return (
    <Fade duration={1500} triggerOnce>
      <Style.Root>
        <Style.Grid container alignContent={"center"}>
          <Grid item xs={12}>
            <Clickable address="/app/drop">
              <Style.Title>/ DROP .</Style.Title>
            </Clickable>
          </Grid>
        </Style.Grid>
      </Style.Root>
    </Fade>
  );
};

export default Home;
