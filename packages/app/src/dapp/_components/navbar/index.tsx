import { FC } from "react";

import { Toolbar, Grid } from "@mui/material";

import Style from "./style";
import { NAME, SHORTNAME } from "../../../constants";
import Clickable from "../../../_components/stateless/clickable";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export const NavbarComponent: FC = () => {
  const navigate = useNavigate();

  return (
    <Style.Root>
      <Style.AppBar position="absolute">
        <Toolbar style={{ padding: "0px" }}>
          <Grid container columnSpacing={0} rowSpacing={0}>
            <Grid item flexGrow={1} />
            <Grid item>
              <Style.GoToAppButton to="/app">
                Connect Wallet
              </Style.GoToAppButton>
            </Grid>
            <Grid item />
          </Grid>
        </Toolbar>
      </Style.AppBar>
    </Style.Root>
  );
};

export default NavbarComponent;
