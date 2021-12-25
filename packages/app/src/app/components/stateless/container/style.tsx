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
    minHeight: "calc(100vh - 100px)",
  })),
  Container: styled("div")(({ theme }) => ({})),
  Title: styled(Typography)(({ theme }) => ({
    fontSize: "2em",
    textAlign: "center",
    fontFamily: "montserrat-black",
    letterSpacing: "-2px",
    marginBottom: "100px",
  })),
};

export default style;
