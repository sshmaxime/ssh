import { styled } from "@mui/material/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  Grid,
  SwipeableDrawer,
  Container,
} from "@mui/material";

const triangleHeight = "10vh";

const style = {
  Root: styled("div")(({ theme }) => ({})),

  View1: styled("div")(({ theme }) => ({
    position: "relative",
    height: "100vh",
  })),
  Background: styled("div")(({ theme }) => ({
    height: "100%",
    backgroundImage: `url(https://i.pinimg.com/originals/0b/bb/f4/0bbbf4839f4aad1c3f62ed16f04390c0.jpg)`,
    backgroundPosition: "center",

    "&:before": {
      content: `""`,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "black",
      opacity: 0.9,
    },
  })),
  TitleContainer: styled(Typography)(({ theme }) => ({
    ...theme.basicBreakpoints(theme),

    position: "absolute",
    top: `calc(50% - ${triangleHeight})`,
  })),
  Title: styled(Typography)(({ theme }) => ({
    color: "black",
    textShadow: "#fff 1px 0 5px",
    fontFamily: theme.fontFamily.primary,
    fontSize: "3em",
    fontWeight: 800,
    display: "inline-block",
  })),
  Title2: styled(Typography)(({ theme }) => ({
    color: "white",
    textShadow: "#FC0 1px 0 10px",
    fontFamily: theme.fontFamily.primary,
    fontSize: "3em",
    fontWeight: 900,
    display: "inline-block",
  })),
  Triangle: styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: 0,
    height: 0,
    width: 0,
    borderTop: "125px solid transparent",
    borderRight: `50vw solid  ${theme.backgroundColor.secondary}`,
    borderLeft: `50vw solid ${theme.backgroundColor.secondary}`,
    display: "table",
    margin: "0 auto",
    paddingBottom: `${triangleHeight}`,
  })),
  //
  View2: styled("div")(({ theme }) => ({})),
};

export default style;
