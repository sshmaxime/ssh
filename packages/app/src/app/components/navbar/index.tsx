import { FC } from "react";

import { Toolbar, Grid } from "@mui/material";

import Style from "./style";
import Clickable from "../../../_components/stateless/clickable";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Logo from "../../../_assets/images/logo-04.svg";

export const NavbarComponent: FC = () => {
  return (
    <Style.Root>
      <Style.AppBar position="absolute">
        <Toolbar style={{ padding: "0px" }}>
          <Grid container columnSpacing={0} rowSpacing={0}>
            <Grid item flexGrow={1} xs={4}>
              <img src={Logo} style={{ width: "60%" }} alt="" />
            </Grid>
            <Grid item xs={8} style={{ display: "flex", alignItems: "center" }}>
              <Grid
                container
                columnSpacing={0}
                rowSpacing={0}
                flexDirection="row-reverse"
                alignItems="center"
              >
                <Grid item>
                  <Style.GoToAppButton to="/app">Enter App</Style.GoToAppButton>
                </Grid>
                <div style={{ width: "25px" }} />
                <Grid item>
                  <Clickable address="/docs" external={false}>
                    <Style.ExtraMenuButton>
                      <Grid container alignItems="center">
                        <Grid item>Docs</Grid>
                        <Grid item>
                          <ArrowRightAltIcon
                            style={{
                              transform: "rotate(-45deg)",
                              fontSize: "1.25em",
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Style.ExtraMenuButton>
                  </Clickable>
                </Grid>

                <Grid item>
                  <Clickable address="/#team">
                    <Style.ExtraMenuButton>Team</Style.ExtraMenuButton>
                  </Clickable>
                </Grid>
                <Grid item>
                  <Clickable address="/#roadmap">
                    <Style.ExtraMenuButton>Roadmap</Style.ExtraMenuButton>
                  </Clickable>
                </Grid>
                <Grid item>
                  <Clickable address="/#concept">
                    <Style.ExtraMenuButton>Concept</Style.ExtraMenuButton>
                  </Clickable>
                </Grid>
                <Grid item>
                  <Clickable address="/#projects">
                    <Style.ExtraMenuButton>Projects</Style.ExtraMenuButton>
                  </Clickable>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Style.AppBar>
    </Style.Root>
  );
};

export default NavbarComponent;
