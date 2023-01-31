import { styled } from "@mui/material/styles";

import { AppBar, Grid, Typography } from "@mui/material";
import { url } from "inspector";
import ImgWave from "@/_utils/assets/images/wave.png";

const headerHeight = "100px";
const footerHeight = "25px";
const itemTitleContainerWidth = "75px";

const style = {
  // Navbar
  AppBar: styled(AppBar)(({ theme }) => ({
    ...theme.myBreakpoints(theme).level3,
    padding: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    height: "100px",
    display: "flex",
    justifyContent: "center",
  })),
  OpenApp: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.tertiary,
    fontWeight: 900,
    fontSize: "0.9em",
    padding: "7.5px",
    paddingLeft: "25px",
    paddingRight: "25px",
    borderRadius: "15px",
    backgroundColor: theme.backgroundColor.primary,
  })),
  //
  Root: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level3,
  })),
  RootInner: styled("div")(({ theme }) => ({})),
  HomeScreenContainer: styled("div")(({ theme }) => ({
    paddingTop: headerHeight,
    paddingBottom: "25px",
    height: `100vh`,
    width: `100%`,
    boxSizing: "border-box",
  })),
  HomeScreen: styled("div")(({ theme }) => ({
    height: `100%`,
    width: `100%`,
    borderRadius: "5px",
    padding: "25px",
    boxSizing: "border-box",
    backgroundColor: theme.backgroundColor.primary,
  })),
  Title: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.tertiary,
    fontWeight: 900,
    fontSize: "3em",
  })),
  // Footer
  RootFooter: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    paddingTop: "5vh",
    paddingBottom: "5vh",
    borderRadius: "5px",
    backgroundColor: theme.backgroundColor.primary,
  })),
  ContentCategory: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.8em",
    fontWeight: 500,
    lineHeight: "2em",
  })),
  ImgIcon2: styled("img")(({ theme }) => ({
    width: "25px",
    height: "25px",
  })),
  Credentials: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    textAlign: "right",
    fontSize: "0.7em",
    fontWeight: 900,
  })),
  ExternalLink: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    textAlign: "right",
    fontSize: "0.8em",
    fontWeight: 500,
  })),
};

export default style;
