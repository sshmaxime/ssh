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
  Title: styled(Typography)(({ theme }) => ({
    position: "absolute",
    fontFamily: theme.fontFamily.secondary,
    fontSize: "2em",
    top: `calc(50% - ${triangleHeight})`,
    left: "50%",
    transform: "translate(-50%, -50%)",
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
};

export default style;
