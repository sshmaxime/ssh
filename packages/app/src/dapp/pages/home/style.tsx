import { styled } from "@mui/material/styles";

import {
  Typography,
  Grid,
  Stepper,
  StepLabel,
  StepContent,
} from "@mui/material";

const style = {
  Root: styled("div")(({ theme }) => ({
    backgroundColor: theme.backgroundColor.secondary,
    minHeight: "100vh",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  })),
  Grid: styled(Grid)(({ theme }) => ({
    ...theme.myBreakpoints(theme).level0,
    textAlign: "center",
  })),
  Title: styled("div")(({ theme }) => ({
    ...theme.titles(theme).primary,
    textShadow: "5px 5px 0px #2AFE00",
    display: "inline-block",
    padding: "7.5px 30px 7.5px 30px",
    borderRadius: "5px",
    ":hover": {
      backgroundColor: "#2AFE00",
      textShadow: "5px 5px 0px white",
    },
  })),
};

export default style;
