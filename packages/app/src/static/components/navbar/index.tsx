import LogoIcon from "@/common/assets/images/logo-typo.svg";
import Clickable from "@/_common/components/clickable";
import Typos from "@/_common/components/typography";
import { Grid, Toolbar } from "@mui/material";

import { FC } from "react";

import Style from "./style";

export const Navbar: FC = ({}) => {
  return (
    <Style.AppBar position="absolute">
      <Toolbar style={{ padding: "0px" }}>
        <Grid container columnSpacing={0} rowSpacing={0} justifyContent="space-between">
          <Grid item flexGrow={1} flexBasis={1} style={{ display: "flex", alignItems: "center" }}>
            <Grid container columnSpacing={0} rowSpacing={0} alignItems="center">
              <Grid item>
                <Clickable address="/">
                  <img alt="" src={LogoIcon} style={{ width: "200px" }} />
                </Clickable>
              </Grid>
            </Grid>
          </Grid>

          <Grid item style={{ display: "flex", alignItems: "center" }}>
            <Grid container columnSpacing={6} justifyContent="center">
              <Grid item>
                <Clickable address="/">
                  <Typos.NormalTitle style={{ fontFamily: "", fontSize: "0.9em", fontWeight: 600 }}>
                    Home
                  </Typos.NormalTitle>
                </Clickable>
              </Grid>

              <Grid item>
                <Clickable address="/">
                  <Typos.NormalTitle style={{ fontFamily: "", fontSize: "0.9em", fontWeight: 600 }}>
                    Projects
                  </Typos.NormalTitle>
                </Clickable>
              </Grid>
            </Grid>
          </Grid>

          <Grid item flexGrow={1} flexBasis={1}>
            <Grid container justifyContent="end" columnSpacing={2}>
              <Grid item style={{ display: "flex", alignItems: "center" }}>
                <Clickable address="/docs">
                  <Typos.NormalTitle>Docs</Typos.NormalTitle>
                </Clickable>
              </Grid>
              <Grid item style={{ display: "flex", alignItems: "center" }}>
                <div style={{ height: "50%", width: "2px", backgroundColor: "black" }}></div>
              </Grid>
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
