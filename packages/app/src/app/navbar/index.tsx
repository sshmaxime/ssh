import { FC } from "react";

import { Toolbar, Grid } from "@mui/material";

import Style from "./style";
import Clickable from "../../_utils/components/stateless/clickable";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Logo from "../../_utils/assets/images/logo-07.svg";

export const NavbarComponent: FC = () => {
  return (
    <Style.Root>
      <Style.AppBar position="absolute">
        <Toolbar style={{ padding: "0px" }}>
          <Grid container columnSpacing={0} rowSpacing={0}>
            <Grid item flexGrow={1} xs={4}>
              <Clickable address="/">
                <img src={Logo} style={{ width: "250px" }} alt="" />
              </Clickable>
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
                  <Style.GoToAppButton to="/app/drop/0">Enter App</Style.GoToAppButton>
                </Grid>
                <div style={{ width: "25px" }} />
                <Grid item>
                  <Clickable address="/docs">
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
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Style.AppBar>
    </Style.Root>
  );
};

export default NavbarComponent;
