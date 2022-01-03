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
    color: "black",
    padding: "7px 20px 7px 20px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    fontSize: "0.85em",
  })),
  GoToAppButton: styled(Link)(({ theme }) => ({
    color: "black",
    textDecoration: "none",
    padding: "7px 20px 7px 20px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    backgroundColor: "white",
    border: `2px solid ${theme.backgroundColor.tertiary}`,
    boxShadow: `5px 5px 0px ${theme.backgroundColor.tertiary}`,
  })),
};

export default style;
