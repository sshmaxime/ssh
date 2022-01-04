import { FC } from "react";

import { Toolbar, Grid } from "@mui/material";

import Style from "./style";
import { NAME } from "../../constants";
import Clickable from "../../stateless/clickable";
import { useNavigate } from "react-router-dom";

export const NavbarComponent: FC = () => {
  const navigate = useNavigate();

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
                  <Style.GoToAppButton to="/app">Enter App</Style.GoToAppButton>
                </Grid>
                <div style={{ width: "50px" }} />

                <Grid item>
                  <Clickable
                    onClick={() => {
                      navigate("/docs");
                    }}
                  >
                    <Style.ExtraMenuButton>Docs</Style.ExtraMenuButton>
                  </Clickable>
                </Grid>

                <Grid item>
                  <Clickable
                    onClick={() => {
                      navigate("/#team");
                    }}
                  >
                    <Style.ExtraMenuButton>Team</Style.ExtraMenuButton>
                  </Clickable>
                </Grid>
                <Grid item>
                  <Clickable
                    onClick={() => {
                      navigate("/#roadmap");
                    }}
                  >
                    <Style.ExtraMenuButton>Roadmap</Style.ExtraMenuButton>
                  </Clickable>
                </Grid>
                <Grid item>
                  <Clickable
                    onClick={() => {
                      navigate("/#concept");
                    }}
                  >
                    <Style.ExtraMenuButton>Concept</Style.ExtraMenuButton>
                  </Clickable>
                </Grid>
                <Grid item>
                  <Clickable
                    onClick={() => {
                      navigate("/#projects");
                    }}
                  >
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
