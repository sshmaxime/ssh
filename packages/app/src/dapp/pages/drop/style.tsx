import { styled } from "@mui/material/styles";

import {
  Typography,
  Grid,
  Stepper,
  StepLabel,
  StepContent,
} from "@mui/material";

const headerHeight = "10vh";
const sizeWidthLeft = "1vw";
const sizeWidthRight = "2.5vw";

const style = {
  Root: styled("div")(({ theme }) => ({
    height: "100vh",
    position: "relative",
  })),
  Header: styled("div")(({ theme }) => ({
    height: headerHeight,
    width: "100%",
    position: "absolute",
    top: 0,
  })),
  Part1: styled("div")(({ theme }) => ({
    backgroundColor: theme.backgroundColor.secondary,
    height: "calc(100vh - (125px + 15vh))",
    position: "relative",
  })),
  Overlay: styled("div")(({ theme }) => ({
    backgroundColor: theme.backgroundColor.primary,
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: "calc(125px + 15vh)",
    display: "flex",
    alignItems: "center",
  })),
  InnerOverlay: styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })),
  BodyLeftSide: styled("div")(({ theme }) => ({
    backgroundColor: theme.backgroundColor.primary,
    borderRadius: "5px",
    position: "absolute",
    top: "15.25vh",
    left: sizeWidthLeft,
    width: "20vw",
    height: "55vh",
    overflowY: "scroll",
    //
    opacity: 0.25,
    transition: "all 1s",
    ":hover": {
      opacity: 1,
    },
  })),
  LeftSide: styled("div")(({ theme }) => ({})),
  InnerLeftSide: styled("div")(({ theme }) => ({
    padding: "10px",
  })),
  HeaderLeftSide: styled(Grid)(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: "5px",
    position: "absolute",
    top: "10vh",
    left: sizeWidthLeft,
    width: "20vw",
    padding: "10px",
  })),
  ContainerInfo: styled("div")<{ maxed?: boolean }>(({ theme, maxed }) => ({
    position: "absolute",
    borderRadius: "5px",
    padding: maxed ? "25px" : "0px",
    width: maxed ? "35vw" : "310px",
    bottom: maxed ? sizeWidthLeft : sizeWidthRight,
    right: maxed ? sizeWidthLeft : sizeWidthRight,
    backgroundColor: maxed ? "white" : "",
    height: maxed ? "65vh" : "12.5vh",
    transition: "all 0.5s ease-in-out",
  })),
  CloseContainerInfo: styled("div")<{ maxed?: boolean }>(
    ({ theme, maxed }) => ({
      position: "absolute",
      right: 25,
      top: 35,
      display: maxed ? "block" : "none",
      color: "#4C4C75",
      opacity: 0.5,
      backgroundColor: "#D6D6E4",
      padding: "5px",
      borderRadius: "5px",
      fontFamily: theme.fontFamily.primary,
      fontSize: "0.75em",
      letterSpacing: "0.5px",
      fontWeight: 900,
    })
  ),
  ContainerMoreInfoContent: styled("div")(({ theme }) => ({
    marginTop: "25px",
    height: "90%",
    overflowY: "scroll",
  })),
  InnerContainerMoreInfoContent: styled("div")(({ theme }) => ({
    padding: "15px",
  })),
  ContainerTitle: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "3.5em",
    fontWeight: 900,
  })),
  ContainerMoreInfo: styled("div")<{ maxed?: boolean }>(({ theme, maxed }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.85em",
    letterSpacing: "2.5px",
    display: maxed ? "none" : "inline-block",
    color: "#4C4C75",
    opacity: 0.5,
    borderRadius: "5px",
    padding: "5px",
    textAlign: "right",
    fontWeight: 900,
    marginTop: "20px",
  })),
  //
  //
  //
  //
  StepTitle: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    letterSpacing: "1px",
    fontSize: "0.75em",
    display: "inline-block",
  })),
  SearchBar: styled("div")(({ theme }) => ({
    padding: "5px",
    backgroundColor: "#F5F5F5",
    borderRadius: "25px",
    fontFamily: theme.fontFamily.primary,
  })),
  CollectionName: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    letterSpacing: "0.5px",
    fontSize: "0.75em",
    display: "inline-block",
    padding: "5px",
    paddingLeft: "5px",
    paddingRight: "5px",
    marginBottom: "2.5px",
    color: "black",
    backgroundColor: theme.backgroundColor.secondary,
    borderRadius: "5px",
  })),
  //
  //
  //
  //
  ProjectExplanationImg2: styled("img")(({ theme }) => ({
    width: "100%",
    transition: "all .2s ease-in-out",
    borderRadius: "10px",
    opacity: "25%",
    boxShadow: `10px 15px 2px ${theme.backgroundColor.tertiary}`,
    backgroundColor: "white",
  })),
  ProjectExplanationImg2Active: styled("img")(({ theme }) => ({
    width: "100%",
    boxShadow: `10px 15px 5px ${theme.backgroundColor.tertiary}`,
    transition: "all .2s ease-in-out",
    transform: "scale(1.1)",
    borderRadius: "5px",
  })),
};

export default style;
