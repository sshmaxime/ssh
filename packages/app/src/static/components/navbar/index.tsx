import LogoIcon from "@/common/assets/images/logo-typo.svg";
import Clickable from "@/_common/components/clickable";
import { Grid, Toolbar } from "@mui/material";

import { FC } from "react";

import Style from "./style";

export const Navbar: FC = ({}) => {
  return (
    <Style.AppBar position="absolute">
      <Toolbar style={{ padding: "0px" }}>
        <Grid container columnSpacing={0} rowSpacing={0} justifyContent="space-between">
          <Grid item xs={2.25} style={{ display: "flex", alignItems: "center" }}>
            <Grid container columnSpacing={0} rowSpacing={0} alignItems="center">
              <Grid item>
                <Clickable address="/">
                  <img alt="" src={LogoIcon} style={{ width: "200px" }} />
                </Clickable>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ display: "flex", alignItems: "center" }}>
            <Grid container columnSpacing={0} rowSpacing={0} alignItems="center">
              <Grid item>
                <Clickable address="/app">
                  <Style.OpenApp>OPEN APP</Style.OpenApp>
                </Clickable>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </Style.AppBar>
  );
};
