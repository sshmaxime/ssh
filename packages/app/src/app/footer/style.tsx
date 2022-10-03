import { styled } from "@mui/material/styles";

import { AppBar, Toolbar, Typography, Button, SwipeableDrawer } from "@mui/material";

const style = {
  Root: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    paddingTop: "7.5vh",
    paddingBottom: "7.5vh",
    backgroundColor: theme.backgroundColor.secondary,
  })),
  Title: styled(Typography)(({ theme }) => ({
    ...theme.titles(theme).primary,
    marginBottom: "5px",
  })),
  Subtitle: styled(Typography)(({ theme }) => ({
    fontSize: "0.65em",
    letterSpacing: "1.5px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    marginTop: "5px",
  })),
  ImgIcon: styled("img")(({ theme }) => ({
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
  TitleCategory: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.9em",
    fontWeight: 900,
    marginBottom: "5px",
  })),
  ContentCategory: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.8em",
    fontWeight: 500,
    lineHeight: "2em",
  })),
};

export default style;
