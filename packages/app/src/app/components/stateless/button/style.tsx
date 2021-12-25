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
    width: "100%",
  })),
  Button: styled("div")(({ theme }) => ({
    padding: "10px",
    borderRadius: "5px",
    letterSpacing: "-5px",
    fontFamily: "test",
    textAlign: "center",
    background: "linear-gradient(145deg, #9088c7, #9088c7)",
    color: "white",
    boxShadow: "2px 2px 0px #555075, -2px -2px 0px #ebdeff",
  })),
};

export default style;
