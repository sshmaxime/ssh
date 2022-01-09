import { styled } from "@mui/material/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  SwipeableDrawer,
} from "@mui/material";

import { Link } from "react-router-dom";

const style = {
  Root: styled("div")(({ theme }) => ({})),
  AppBar: styled(AppBar)(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,

    padding: 0,
    paddingTop: "25px",
    backgroundColor: "transparent",
    boxShadow: "none",
    height: "80px",
    paddingBottom: "10px",
  })),
  Title: styled(Grid)(({ theme }) => ({
    textShadow: "5px 5px 0px #2AFE00",
    "& > a": {
      textDecoration: "none",
      textAlign: "center",
    },
    "& a:focus": {
      outline: "none",
    },
  })),
  Link: styled(Link)(({ theme }) => ({
    ...theme.titles(theme).primary,
  })),
  ExtraMenuButton: styled("div")(({ theme }) => ({
    padding: "7px 20px 7px 20px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    fontSize: "0.85em",
    color: "black",
  })),
  GoToAppButton: styled(Link)(({ theme }) => ({
    color: "black",
    textDecoration: "none",
    padding: "7px 20px 7px 20px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    borderRadius: "2.5px",
    boxShadow: `2.5px 2.5px 0px #2AFE00`,
  })),
};

export default style;
