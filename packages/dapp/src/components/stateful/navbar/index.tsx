import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../../../store/reducers";

import { A_connect } from "../../../store/actions/app.actions";

import { Link } from "react-router-dom";

import { Toolbar, Grid } from "@mui/material";

import Style from "./style";

export const NavbarComponent: FC = () => {
  const store = useSelector((state: IAppState) => state);
  const dispath = useDispatch();

  const connect = () => {
    dispath(A_connect());
  };

  return (
    <Style.Root>
      <Style.AppBar position="static">
        <Toolbar>
          <Grid container columnSpacing={0} rowSpacing={0}>
            <Style.Title item>
              <Style.Link to="/">&nbsp;SSH&nbsp;</Style.Link>
            </Style.Title>
            <Grid item flexGrow={1} />
            <Grid item>
              <Grid container columnSpacing={5} rowSpacing={0}>
                <Grid item>
                  <Style.ExtraMenuButton>HOME</Style.ExtraMenuButton>
                </Grid>
                <Grid item>
                  <Style.ExtraMenuButton>ABOUT</Style.ExtraMenuButton>
                </Grid>
                <Grid item />
                <Grid item>
                  <Style.Connect>connect</Style.Connect>
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
