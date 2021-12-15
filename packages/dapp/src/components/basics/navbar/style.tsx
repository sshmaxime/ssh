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
    ...theme.basicBreakpoints(theme),

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
    color: "white",
    fontFamily: theme.fontFamily.primary,
    fontSize: "1.5em",
    marginBottom: "25px",
    fontWeight: 900,
  })),
  ExtraMenuButton: styled("div")(({ theme }) => ({
    color: "white",
    padding: "7px 20px 7px 20px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
  })),
  GoToAppButton: styled("div")(({ theme }) => ({
    color: "black",
    padding: "7px 20px 7px 20px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    backgroundColor: "white",
    borderRadius: "10px",
    border: "2px solid #cbcbdc",
    boxShadow: "5px 5px 0px #cbcbdc",
  })),
};

export default style;
