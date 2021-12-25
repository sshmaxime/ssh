import { FC } from "react";

import { Toolbar, Grid } from "@mui/material";

import Style from "./style";
import { NAME } from "../../constants";

export const NavbarComponent: FC = () => {
  return (
    <Style.Root>
      <Style.AppBar position="absolute">
        <Toolbar style={{ padding: "0px" }}>
          <Grid container columnSpacing={0} rowSpacing={0}>
            <Style.Title item flexGrow={1}>
              <Style.Link to="/">{NAME}</Style.Link>
            </Style.Title>
            <Grid item>
              <Grid
                container
                columnSpacing={0}
                rowSpacing={0}
                flexDirection="row-reverse"
                alignItems="center"
              >
                <Grid item>
                  <Style.GoToAppButton>Enter App</Style.GoToAppButton>
                </Grid>
                <div style={{ width: "50px" }} />
                <Grid item>
                  <Style.ExtraMenuButton>About</Style.ExtraMenuButton>
                </Grid>
                <Grid item>
                  <Style.ExtraMenuButton>Projects</Style.ExtraMenuButton>
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
