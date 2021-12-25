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
  Root: styled("div")(({ theme }) => ({})),

  ProjectPlanGrid: styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })),
  ProjectPlanGridContainer: styled("div")(({ theme }) => ({
    height: "6em",
    width: "6em",
    borderRadius: "3em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  })),
  IconTitle: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    borderRadius: "2.5px",
    fontSize: "0.75em",
    textAlign: "center",
    fontWeight: 700,
    letterSpacing: "-0.5px",
  })),
};

export default style;
