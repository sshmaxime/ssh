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
  Root: styled("div")(({ theme }) => ({
    flexGrow: 1,
  })),
  AppBar: styled(AppBar)(({ theme }) => ({
    backgroundColor: `rgba(249,249,251)`,
    boxShadow: "none",
    position: "relative",
    height: "80px",
    paddingTop: "10px",
    paddingBottom: "10px",

    // AppBar breakpoints should be similar to app-> Root
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "15vw",
      paddingRight: "15vw",
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "13vw",
      paddingRight: "13vw",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "10vw",
      paddingRight: "10vw",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "5vw",
      paddingRight: "5vw",
    },
  })),
  Title: styled(Grid)(({ theme }) => ({
    "& > a": {
      textDecoration: "none",
      textAlign: "center",
      color: "black",
    },
    "& a:focus": {
      outline: "none",
    },
  })),
  Link: styled(Link)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "1.5em",
    letterSpacing: "0.3em",
    borderTop: "4px solid black",
    borderBottom: "4px solid black",
    marginBottom: "25px",
    fontWeight: 900,
  })),
  ExtraMenuButton: styled("div")(({ theme }) => ({
    color: "black",
    padding: "5px 20px 5px 20px",
    fontFamily: theme.fontFamily.secondary,
    fontWeight: 500,
    borderTop: "2px solid black",
    borderLeft: "2px solid black",
  })),
  Connect: styled("div")(({ theme }) => ({
    backgroundColor: "black",
    borderRadius: "5px",
    color: "white",
    padding: "5px 20px 5px 20px",
    transition: "all 0.5s ease-in-out",
    borderTop: "2px solid white",
    borderLeft: "2px solid white",
    flex: 1,
    alignItems: "center",
  })),
};

export default style;
