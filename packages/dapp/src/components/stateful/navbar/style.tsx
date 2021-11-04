import { styled } from "@mui/material/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  SwipeableDrawer,
} from "@mui/material";

const style = {
  Root: styled("div")(({ theme }) => ({
    flexGrow: 1,
  })),
  AppBar: styled(AppBar)(({ theme }) => ({
    backgroundColor: "white",
    boxShadow: "none",
    position: "relative",
    paddingTop: "10px",
    paddingBottom: "10px",

    // AppBar breakpoints should be similar to app-> Root
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "18vw",
      paddingRight: "18vw",
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "15vw",
      paddingRight: "15vw",
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
  Title: styled(Typography)(({ theme }) => ({
    position: "absolute",
    fontFamily: "bar",
    letterSpacing: "5px",
    fontSize: "3em",
    "& > a": {
      textDecoration: "none",
      color: "black",
    },
    "& a:focus": {
      outline: "none",
    },
  })),
  Connect: styled("div")(({ theme }) => ({
    backgroundColor: "black",
    color: "white",
    position: "absolute",
    right: 0,
    padding: "5px 20px 5px 20px",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      backgroundColor: "black",
      transform: "scale(1.1)",
    },
    "& a": {
      textDecoration: "none",
      color: "black",
    },
    "& a:focus": {
      outline: "none",
    },
  })),
};

export default style;
