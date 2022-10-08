import { styled } from "@mui/material/styles";

import { Typography, Grid, Stepper, StepLabel, StepContent } from "@mui/material";

const headerHeight = "125px";

const leftDefaultWidth = "20vw";
const rightDefaultWidth = "310px";

const bottomOverlayHeight = "35px";
const rightHeightReduced = "320px";

const sizeWidthLeft = "35px";
const sizeWidthRight = "35px";

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
    height: `calc(100vh - ${headerHeight} - ${bottomOverlayHeight} - ${sizeWidthLeft} - 50px)`,
  })),
  Explanation: styled("div")(({ theme }) => ({
    height: "20px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    display: "inline-block",
    marginLeft: "5px",
    color: "#ACACEC",
    fontSize: "0.75em",
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
  NoNfts: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 500,
    marginTop: "7.5px",
    fontSize: "0.8em",
    color: "grey",
    marginLeft: "7.5px",
  })),

  HeaderLeftSide: styled(Grid)(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "10px",
    height: "50px",
  })),
  RealHeader: styled(Grid)(({ theme }) => ({
    height: "125px",
  })),
  HeaderFirstLeftSideTitle: styled(Grid)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "1.75em",
    marginBottom: "20px",
    fontWeight: 500,
  })),
  CommandsContainer: styled(Grid)(({ theme }) => ({
    backgroundColor: theme.backgroundColor.primary,
    padding: "10px",
    borderRadius: "5px",
    boxShadow: `1.5px 1.5px 0px ${theme.backgroundColor.tertiary}`,
  })),
  CommandsText: styled("div")(({ theme }) => ({
    paddingBottom: "10px",
  })),
  Commands: styled(Grid)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.8em",
    paddingLeft: "5px",
  })),
  CommandItem: styled(Grid)<{ bgcolor: string; $last?: boolean }>(({ theme, bgcolor, $last }) => ({
    backgroundColor: bgcolor,
    padding: "3.5px 10px 3.5px 10px",
    borderRadius: "10px",
    marginRight: $last ? "" : "5px",
    fontWeight: 600,
    fontSize: "0.9em",
    letterSpacing: "0.5px",
  })),
  BodyLeftSide: styled("div")<{ $connected: boolean }>(({ theme, $connected }) => ({
    backgroundColor: theme.backgroundColor.primary,
    borderRadius: "5px",
    overflowY: "scroll",
    height: `calc(100vh - ${headerHeight} - ${bottomOverlayHeight} - 50px - 125px - 10px - ${sizeWidthLeft} - 50px)`,
    opacity: $connected ? 0.25 : 1,
    transition: "all 1s",
    ":hover": {
      opacity: 1,
    },
  })),
  BodyLeftSideTextContainer: styled("div")(({ theme }) => ({
    backgroundColor: theme.backgroundColor.primary,
    position: "relative",
    borderRadius: "5px",
    height: `calc(100vh - ${headerHeight} - ${bottomOverlayHeight} - 125px - 10px - ${sizeWidthLeft} - 50px)`,
  })),
  BodyLeftSideText: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.8em",
    textAlign: "center",
    padding: "0 30px 0 30px",
    lineHeight: "1.25em",
  })),
  ContainerInfo: styled("div")<{ $maxed?: boolean }>(({ theme, $maxed }) => ({
    zIndex: 2,
    position: "absolute",
    borderRadius: "5px",
    width: $maxed ? "35vw" : rightDefaultWidth,
    bottom: `calc(${sizeWidthLeft})`,
    right: $maxed ? sizeWidthLeft : sizeWidthRight,
    backgroundColor: $maxed ? theme.backgroundColor.primary : "",
    maxHeight: $maxed
      ? `calc(100vh - 1vh - ${bottomOverlayHeight} - ${sizeWidthLeft} - ${headerHeight})`
      : rightHeightReduced,
    // minHeight: rightHeightReduced,
    transition: "all 0.5s ease-in-out",
    boxShadow: $maxed ? `5px 5px 2px ${theme.backgroundColor.tertiary}` : "",
  })),
  DetailsButton: styled("div")(({ theme }) => ({
    letterSpacing: "2.5px",
  })),
  InnerContainerInfo: styled("div")<{ $maxed?: boolean }>(({ theme, $maxed }) => ({
    padding: $maxed ? "25px 25px 0 25px" : "0px",
    transition: "all 0.5s ease-in-out",
  })),
  CloseContainerInfo: styled("div")<{ $maxed?: boolean }>(({ theme, $maxed }) => ({
    transition: "all 0.5s ease-in-out",
    display: $maxed ? "block" : "none",
    opacity: 0.5,
    backgroundColor: "#D6D6E4",
    padding: "5px",
    borderRadius: "5px",
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.75em",
    letterSpacing: "0.5px",
    fontWeight: 900,
  })),
  ContainerMoreInfoContent: styled("div")<{ $maxed?: boolean }>(({ theme, $maxed }) => ({
    marginTop: "15px",
    maxHeight: $maxed
      ? `calc(100vh - 2vh - ${bottomOverlayHeight} - ${sizeWidthLeft} - ${headerHeight} - 152.5px - 50px)`
      : "0px",
    overflowY: "scroll",
    opacity: $maxed ? 1 : 0,
    transition: "all 1s",
    display: $maxed ? "block" : "none",
  })),
  InnerContainerMoreInfoContent: styled("div")<{ $maxed?: boolean }>(({ theme, $maxed }) => ({
    padding: "15px",
    backgroundColor: theme.backgroundColor.secondary,
    borderRadius: "10px",
  })),
  PayContainerInfoOpen: styled("div")<{ $maxed?: boolean }>(({ theme, $maxed }) => ({
    display: $maxed ? "inline-block" : "none",
    marginTop: "12.5px",
    marginBottom: "12.5px",
    float: "right",
  })),
  PayContainerInfoGrid: styled(Grid)(({ theme }) => ({
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: theme.backgroundColor.secondary,
  })),
  EligibleCollection: styled("div")<{ $maxed?: boolean }>(({ theme, $maxed }) => ({
    display: $maxed ? "block" : "none",
    padding: "10px",
    marginBottom: "15px",
    backgroundColor: "white",
    borderRadius: "10px",
  })),
  EligibleCollectionTitle: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    paddingLeft: "5px",
    marginBottom: "5px",
    fontWeight: 800,
    letterSpacing: "1px",
    fontSize: "0.75em",
  })),
  ContainerTitle: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "2.5em",
    fontWeight: 900,
  })),
  ContainerMoreInfo: styled("div")<{ $maxed?: boolean }>(({ theme, $maxed }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.85em",
    letterSpacing: "2.5px",
    display: $maxed ? "none" : "inline-block",
    color: "#4C4C75",
    opacity: 0.5,
    borderRadius: "5px",
    textAlign: "right",
    fontWeight: 900,
    marginTop: "20px",
  })),
  ContainerPayment: styled("div")<{ $maxed?: boolean }>(({ theme, $maxed }) => ({
    display: $maxed ? "none" : "inline-block",
    marginTop: "20px",
    width: "100%",
  })),
  InnerContainerPayment: styled("div")<{ $maxed?: boolean }>(({ theme, $maxed }) => ({
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
  MintInfo: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.7em",
    height: "20px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: `1.5px 1.5px 0px ${theme.backgroundColor.tertiary}`,
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
    fontWeight: 700,
    letterSpacing: "0.2px",
    fontSize: "0.7em",
    display: "inline-block",
  })),
  StepTitle3: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 700,
    fontSize: "0.7em",
    display: "inline-block",
    backgroundColor: theme.backgroundColor.secondary,
    borderRadius: "5px",
    padding: "1.5px 10px 1.5px 10px",
  })),
  StepTitle2: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 700,
    letterSpacing: "0.5px",
    fontSize: "0.9em",
    textAlign: "center",
    display: "block !important",
    padding: "0px 0px 35px 0px",
  })),
  BodyLeftSideTextContainerCenterer: styled("div")(({ theme }) => ({
    position: "absolute",
    top: "42.5%",
    transform: "translate(0, -50%)",
    width: "100%",
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
  //
  RootNotFound: styled("div")(({ theme }) => ({
    height: "100vh",
    position: "relative",
    backgroundColor: theme.backgroundColor.secondary,
  })),
  NotFound: styled("div")(({ theme }) => ({
    position: "absolute",
    left: "50%",
    top: "45%",
    transform: "translate(-50%, -50%)",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    letterSpacing: "0.5px",
  })),
  MoreLinkContainer: styled("div")(({ theme }) => ({
    marginTop: "35px",
    display: "inline-block",
  })),
  MoreLink: styled("div")(({ theme }) => ({
    fontSize: "0.8em",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    letterSpacing: "1.5px",
    borderBottom: "2.5px solid black",
    paddingBottom: "5px",
  })),
  BottomLinks: styled(Typography)(({ theme }) => ({
    fontSize: "0.8em",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 500,
    lineHeight: "2em",
    textAlign: "center",
  })),
  Credentials: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.7em",
    fontWeight: 900,
    paddingLeft: sizeWidthLeft,
    lineHeight: "2em",
  })),
  Version: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.7em",
    fontWeight: 500,
    lineHeight: "2em",
    textAlign: "right",
    paddingRight: sizeWidthRight,
  })),
};

export default style;
