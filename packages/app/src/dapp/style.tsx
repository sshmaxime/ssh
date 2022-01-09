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
    ...theme.myBreakpoints(theme).level0,
    backgroundColor: theme.backgroundColor.secondary,
    minHeight: "100vh",
    position: "relative",
    fontFamily: theme.fontFamily.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })),

  Machine: styled(Grid)(({ theme }) => ({
    padding: "5px",
    borderRadius: "5px",
  })),

  StepTitle: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    marginBottom: "2.5px",
    fontSize: "1.25em",
    textShadow: "2.5px 2.5px 0px #2AFE00",
  })),

  Stepper: styled(Stepper)(
    ({ theme }) => `
      & .MuiStepConnector-root {
        display: none;
      }
    `
  ),

  StepLabel: styled(StepLabel)(
    ({ theme }) => `
      & .MuiStepLabel-iconContainer {
        display: none;
      }

      &:hover {
        opacity: 50%;
      }

      & .MuiStepConnector-root {
        display: none;
      }
    `
  ),

  StepContent: styled(StepContent)(
    ({ theme }) => `
      margin: 0;
      padding: 0;
      border: none;
    `
  ),
};

export default style;
