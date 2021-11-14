import { styled } from "@mui/material/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  SwipeableDrawer,
} from "@mui/material";

const style = {
  Root: styled("div")(({ theme }) => ({
    marginBottom: "30px",
  })),
  Title: styled(Typography)(({ theme }) => ({
    fontFamily: "headbd",
    fontSize: "1.5em",
  })),
  TitleDisabled: styled(Typography)(({ theme }) => ({
    fontFamily: "headbd",
    fontSize: "1.5em",
    color: "grey",
  })),
  LinkToProject: styled(Typography)(({ theme }) => ({
    fontFamily: "normal",
  })),
  ImageContainer: styled("div")(({ theme }) => ({
    position: "relative",
  })),
  Overlay: styled("div")(({ theme }) => ({
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0px",
    left: "0px",
    color: "black",
    backgroundColor: "black",
    opacity: 0.5,
    borderRadius: "10px",
  })),
  OverlayText: styled("div")(({ theme }) => ({
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    fontFamily: "normal",
    letterSpacing: "-1px",
    transform: "translate(-50%, -50%)",
  })),
  Image: styled("img")(({ theme }) => ({
    width: "100%",
    borderRadius: "10px",
    boxShadow: "5px 5px 5px #bebebe, -5px -5px 0px #ffffff",
  })),
};

export default style;
