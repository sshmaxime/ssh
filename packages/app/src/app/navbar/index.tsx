import { FC } from "react";

import { Toolbar, Grid } from "@mui/material";

import Style from "./style";
import Clickable from "../../_utils/components/stateless/clickable";
import LogoIcon from "../../_utils/assets/images/logo-icon.svg";
import LogoTypo from "../../_utils/assets/images/logo-typo.svg";
import LogoFull from "../../_utils/assets/images/logo-full.svg";

export const NavbarComponent: FC = () => {
  return (
    <Style.Root>
      <Style.AppBar position="absolute">
        <Toolbar style={{ padding: "0px" }}>
          <Grid container columnSpacing={0} rowSpacing={0} justifyContent="space-between">
            <Grid item xs={4} style={{ display: "flex", alignItems: "center" }}>
              <Clickable address="/">
                <img src={LogoTypo} style={{ width: "200px" }} alt="" />
              </Clickable>
            </Grid>
            <Grid
              item
              xs={4}
              style={{ justifyContent: "center", display: "flex", alignItems: "center" }}
            >
              <Clickable address="/"></Clickable>
            </Grid>
            <Grid item xs={4} style={{ display: "flex", alignItems: "center" }}>
              <Grid
                container
                columnSpacing={0}
                rowSpacing={0}
                flexDirection="row-reverse"
                alignItems="center"
              >
                <Grid item style={{ display: "flex", alignItems: "center" }}>
                  <Style.GoToAppButton to="/app/drop/0">ENTER APP</Style.GoToAppButton>
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
