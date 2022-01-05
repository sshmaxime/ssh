import { FC } from "react";

import { Toolbar, Grid } from "@mui/material";

import Style from "./style";
import { NAME, SHORTNAME } from "../../constants";
import Clickable from "../../stateless/clickable";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

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
                <div style={{ width: "10px" }} />

                <Grid item>
                  <Clickable
                    onClick={() => {
                      navigate("/docs");
                    }}
                  >
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
