import { styled, keyframes } from "@mui/material/styles";

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

  Triangle: styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: 0,
    height: 0,
    width: 0,
    borderTop: "125px solid transparent",
    borderRight: `50vw solid  ${theme.backgroundColor.primary}`,
    borderLeft: `50vw solid ${theme.backgroundColor.primary}`,
    display: "table",
    margin: "0 auto",
    paddingBottom: `${triangleHeight}`,
  })),
  //
  View2: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level2,
    backgroundImage: `linear-gradient(180deg, ${theme.backgroundColor.primary} 50%,  ${theme.backgroundColor.secondary} 50%)`,
    paddingTop: "2.5vh",
    paddingBottom: "2.5vh",
  })),
  //
  View3: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    backgroundColor: theme.backgroundColor.secondary,
    paddingTop: "1vh",
    paddingBottom: "10vh",
  })),
  TextAbout: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "1em",
    fontWeight: 300,
    paddingBottom: "2.5vh",
  })),
  ProjectPlanGrid: styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })),
  ProjectExplanationImg2: styled("img")(({ theme }) => ({
    width: "100%",
    transition: "all .2s ease-in-out",
    borderRadius: "10px",
    opacity: "25%",
    boxShadow: `10px 15px 2px ${theme.backgroundColor.tertiary}`,
    backgroundColor: "white",
  })),
  ProjectExplanationImg2Active: styled("img")(({ theme }) => ({
    width: "100%",
    boxShadow: `10px 15px 5px ${theme.backgroundColor.tertiary}`,
    transition: "all .2s ease-in-out",
    transform: "scale(1.1)",
    borderRadius: "5px",
  })),
};

export default style;
