import { styled } from "@mui/material/styles";

import { Typography, Grid, Stepper, StepLabel, StepContent } from "@mui/material";

const headerHeight = "125px";

const leftDefaultWidth = "20vw";
const rightDefaultWidth = "310px";

const bottomOverlayHeight = "50px";
const rightHeightReduced = "310px";

const sizeWidthLeft = "20px";
const sizeWidthRight = "20px";

const style = {
  Root: styled("div")(({ theme }) => ({
    height: "100vh",
    position: "relative",
  })),
  Header: styled("div")(({ theme }) => ({
    position: "absolute",
    top: 0,
    height: headerHeight,
    width: "100vw",
    zIndex: 1,
  })),
  Body: styled("div")(({ theme }) => ({
    backgroundColor: theme.backgroundColor.secondary,
    height: `calc(100vh - ${bottomOverlayHeight})`,
    position: "relative",
  })),
  Footer: styled("div")(({ theme }) => ({
    position: "absolute",
    height: bottomOverlayHeight,
    bottom: 0,
    backgroundColor: theme.backgroundColor.primary,
    width: "100%",
    display: "flex",
    alignItems: "center",
  })),
  //
  LeftSide: styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: sizeWidthLeft,
    left: sizeWidthLeft,
    width: leftDefaultWidth,
    height: `calc(100vh - ${headerHeight} - ${bottomOverlayHeight} - ${sizeWidthLeft})`,
  })),
  InnerLeftSide: styled("div")(({ theme }) => ({
    padding: "10px",
  })),
  InnerLeftSideNoNfts: styled("div")(({ theme }) => ({
    paddingTop: "25vh",
    textAlign: "center",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 500,
    fontSize: "0.8em",
  })),
  HeaderLeftSide: styled(Grid)(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "10px",
    height: "50px",
  })),
  BodyLeftSide: styled("div")<{ connected: boolean }>(({ theme, connected }) => ({
    backgroundColor: theme.backgroundColor.primary,
    borderRadius: "5px",
    overflowY: "scroll",
    height: `calc(100vh - ${headerHeight} - ${bottomOverlayHeight} - 50px - ${sizeWidthLeft})`,
    opacity: connected ? 0.25 : 1,
    transition: "all 1s",
    ":hover": {
      opacity: 1,
    },
  })),
  ContainerInfo: styled("div")<{ maxed?: boolean }>(({ theme, maxed }) => ({
    zIndex: 2,
    position: "absolute",
    borderRadius: "5px",
    width: maxed ? "35vw" : rightDefaultWidth,
    bottom: maxed ? sizeWidthLeft : sizeWidthRight,
    right: maxed ? sizeWidthLeft : sizeWidthRight,
    backgroundColor: maxed ? theme.backgroundColor.primary : "",
    height: maxed
      ? `calc(100vh - 1vh - ${bottomOverlayHeight} - ${sizeWidthLeft} - ${headerHeight})`
      : rightHeightReduced,
    transition: "all 0.5s ease-in-out",
    boxShadow: maxed ? `5px 5px 2px ${theme.backgroundColor.tertiary}` : "",
  })),
  InnerContainerInfo: styled("div")<{ maxed?: boolean }>(({ theme, maxed }) => ({
    padding: maxed ? "25px" : "0px",
    transition: "all .5s ease-in-out",
  })),
  CloseContainerInfo: styled("div")<{ maxed?: boolean }>(({ theme, maxed }) => ({
    display: maxed ? "block" : "none",
    opacity: 0.5,
    backgroundColor: "#D6D6E4",
    padding: "5px",
    borderRadius: "5px",
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.75em",
    letterSpacing: "0.5px",
    fontWeight: 900,
  })),
  ContainerMoreInfoContent: styled("div")<{ maxed?: boolean }>(({ theme, maxed }) => ({
    marginTop: "25px",
    height: maxed
      ? `calc(100vh - 2vh - ${bottomOverlayHeight} - ${sizeWidthLeft} - ${headerHeight} - 152.5px)`
      : "0px",
    overflowY: "scroll",
    borderRadius: "5px",
    opacity: maxed ? 1 : 0,
    transition: "all 1s",
    display: maxed ? "block" : "none",
  })),
  InnerContainerMoreInfoContent: styled("div")<{ maxed?: boolean }>(({ theme, maxed }) => ({
    padding: "15px",
    backgroundColor: theme.backgroundColor.secondary,
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
    textAlign: "right",
    fontWeight: 900,
    marginTop: "20px",
  })),
  ContainerPayment: styled("div")<{ maxed?: boolean }>(({ theme, maxed }) => ({
    display: maxed ? "none" : "inline-block",
    marginTop: "20px",
    width: "100%",
  })),
  InnerContainerPayment: styled("div")<{ maxed?: boolean }>(({ theme, maxed }) => ({
    padding: "15px",
    background: "white",
    borderRadius: "5px",
  })),
  MintButton: styled("div")(({ theme }) => ({
    backgroundColor: "black",
    fontFamily: theme.fontFamily.primary,
    textAlign: "center",
    fontWeight: 900,
    color: "white",
    borderRadius: "10px",
    padding: "10px",
  })),
  MintPriceTitle: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.9em",
    fontWeight: 600,
    opacity: 0.3,
  })),
  MintPrice: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "1.75em",
    fontWeight: 600,
    letterSpacing: "1.5px",
  })),
  MintPriceUsd: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.8em",
    fontWeight: 600,
    opacity: 0.3,
  })),
  DetailsContainer: styled(Grid)(({ theme }) => ({
    backgroundColor: theme.backgroundColor.tertiary,
    paddingLeft: "10px",
    paddingRight: "10px",
    borderRadius: "5px",
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
  ProjectExplanationImg2: styled("img")<{ active?: boolean }>(({ theme, active }) => ({
    width: "100%",
    transition: "all .2s ease-in-out",
    borderRadius: "5px",
    opacity: active ? "" : "25%",
    boxShadow: `10px 15px 2px ${theme.backgroundColor.tertiary}`,
    backgroundColor: "white",
    transform: active ? "scale(1.1)" : "",
  })),
};

export default style;
