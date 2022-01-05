import { styled } from "@mui/material/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  Grid,
  SwipeableDrawer,
} from "@mui/material";

const triangleHeight = "10vh";

const style = {
  Root: styled("div")(({ theme }) => ({
    position: "relative",
    height: "100vh",
  })),
  Background: styled("div")(({ theme }) => ({
    height: "100%",

    "&:before": {
      content: `""`,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      // backgroundColor: "black",
      // opacity: 0.25,
    },
    backgroundColor: theme.backgroundColor.secondary,
  })),
  TitleContainer: styled("div")(({ theme }) => ({
    position: "absolute",
    top: "60%",
    left: "50%",
    width: "100wh",
    transform: "translate(-50%, -50%)",
  })),
  ProjectQuickPresentation: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })),
  ProjectPresentationTitle: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    padding: "5px",
    paddingLeft: "25px",
    paddingRight: "25px",
    fontSize: "0.8em",
    letterSpacing: "0.1em",
    marginTop: "15px",
    color: "black",
    backgroundColor: "white",
    textAlign: "center",
    fontWeight: 900,
    border: `2px solid ${theme.backgroundColor.tertiary}`,
    boxShadow: `5px 5px 0px ${theme.backgroundColor.tertiary}`,
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
  })),
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
};

export default style;
