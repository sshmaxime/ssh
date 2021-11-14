import { styled } from "@mui/material/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  SwipeableDrawer,
  Container,
} from "@mui/material";

const style = {
  Root: styled("div")(({ theme }) => ({
    height: "100%",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "15vw",
      paddingRight: "15vw",
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "13vw",
      paddingRight: "13vw",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "10vw",
      paddingRight: "10vw",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "5vw",
      paddingRight: "5vw",
    },
  })),
  Container: styled(Container)(({ theme }) => ({
    padding: "20px",
  })),
};

export default style;
