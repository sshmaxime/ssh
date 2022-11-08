import { styled } from "@mui/material/styles";

import { AppBar, Toolbar, Typography, Button, Grid, SwipeableDrawer } from "@mui/material";

import { Link } from "react-router-dom";

const style = {
  Root: styled("div")(({ theme }) => ({})),
  AppBar: styled(AppBar)(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,

    padding: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    height: "100px",
    display: "flex",
    justifyContent: "center",
  })),
  Link: styled(Link)(({ theme }) => ({
    ...theme.titles(theme).primary,
  })),
  ExtraMenuButton: styled("div")(({ theme }) => ({
    padding: "7px 20px 7px 20px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    fontSize: "0.9em",
    color: "black",
  })),
  GoToAppButton: styled(Link)(({ theme }) => ({
    color: "black",
    textDecoration: "none",
    padding: "5px 15px 5px 15px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    border: "2.5px solid black",
    letterSpacing: "-0.1px",
    transform: "skew(-25deg)",
  })),
};

export default style;
