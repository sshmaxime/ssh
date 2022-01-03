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

const style = {
  Root: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    paddingTop: "10vh",
    paddingBottom: "10vh",
  })),
  ImgTeam: styled("img")(({ theme }) => ({
    width: "100%",
    borderRadius: "5px",
  })),
  TeamName: styled(Typography)(({ theme }) => ({
    ...theme.titles(theme).secondary,
    paddingLeft: "5px",
  })),
  SubTextSubtitle: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    letterSpacing: "2px",
    marginBottom: "50px",
    color: "#2AFE00",
    textShadow: "2px 2px 1px black, -1px -1px 1px black",
  })),
  TeamNameTitle: styled(Typography)(({ theme }) => ({
    ...theme.titles(theme).secondary,
    color: "grey",
    paddingLeft: "5px",
    fontSize: "0.6em",
    marginBottom: "5px",
  })),
  TextSubtitle2: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "3em",
    textShadow: `-2px 2px 2px white,
      -3px 3px 0px #303049,
      -5px 5px 4px ${theme.backgroundColor.tertiary}`,
  })),
};

export default style;
