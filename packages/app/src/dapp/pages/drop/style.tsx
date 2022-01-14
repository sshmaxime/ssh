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
  })),

  Root1: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    paddingTop: "125px",
  })),

  Machine: styled("div")(({ theme }) => ({
    marginTop: "15px",
    ...theme.cards.primary,
  })),

  Title: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    marginBottom: "2.5px",
    fontSize: "2em",
    textShadow: "5px 5px 0px #2AFE00",
  })),

  CollectionName: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.secondary,
    fontWeight: 500,
    marginBottom: "5px",
    fontSize: "0.9em",
    display: "inline-block",
    padding: "5px",
    boxShadow: "2.5px 2.5px 2.5px grey",
    backgroundColor: theme.backgroundColor.secondary,
    borderRadius: "5px",
  })),

  ScrollerChoose: styled("div")(({ theme }) => ({
    overflowY: "scroll",
    backgroundColor: theme.backgroundColor.primary,
    borderRadius: "5px",
    padding: "10px",
  })),

  StepTitle: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.secondary,
    fontWeight: 900,
    marginBottom: "20px",
    fontSize: "1.1em",
    borderBottom: "2.5px solid black",
    display: "inline-block",
  })),

  SmallTitle: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.secondary,
    fontWeight: 900,
    marginBottom: "2.5px",
    fontSize: "0.75em",
  })),

  MintPrice: styled("div")(({ theme }) => ({
    padding: "5px",
    borderRadius: "5px",
    textAlign: "center",
    fontFamily: theme.fontFamily.secondary,
    color: "black",
    fontSize: "0.9em",
    backgroundColor: theme.backgroundColor.primary,
    paddingRight: "20px",
    paddingLeft: "20px",
    boxShadow: "1px 1px 2.5px #bebebe",
  })),

  MintButton: styled("div")(({ theme }) => ({
    padding: "5px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "2.5px",
    textAlign: "center",
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.8em",
    letterSpacing: "1px",
    fontWeight: 900,
    boxShadow: "2.5px 2.5px 0px #2AFE00",
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
