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
    ...theme.myBreakpoints(theme).level1,
    paddingTop: "5vh",
    paddingBottom: "5vh",
    backgroundColor: theme.backgroundColor.secondary,
  })),
  Title: styled(Typography)(({ theme }) => ({
    ...theme.titles(theme).primary,
    marginBottom: "5px",
  })),
  Subtitle: styled(Typography)(({ theme }) => ({
    opacity: "50%",
    fontFamily: theme.fontFamily.primary,
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
};

export default style;
