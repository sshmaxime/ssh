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
    borderRadius: "2.5px",
  })),
  TeamName: styled(Typography)<{ bgColor: string }>(({ theme, bgColor }) => ({
    ...theme.titles(theme).secondary,
    color: "white",
    textShadow: "2.5px 2.5px 1px black, -1px -1px 1px grey",
    borderRadius: "10px",
    padding: "1px",
    paddingLeft: "7.5px",
    paddingRight: "7.5px",
    backgroundColor: bgColor,
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
    color: "black",
    paddingLeft: "5px",
    paddingRight: "5px",
    fontSize: "0.75em",
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
