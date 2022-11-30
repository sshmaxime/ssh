import { styled } from "@mui/material/styles";

import { Grid, Typography } from "@mui/material";

const headerHeight = "125px";

const leftDefaultWidth = "20vw";
const rightDefaultWidth = "350px";

const footerHeight = "25px";
const bottomBarHeight = "50px";
const bottomHeight = `calc(${footerHeight} + ${bottomBarHeight})`;
const rightHeightReduced = "320px";

const sizeWidthLeft = "1.5vw";
const sizeWidthRight = "1.5vw";
const bottom = "25px";

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
    height: `calc(100vh - ${footerHeight})`,
    position: "relative",
  })),
  BodyScene: styled("div")(({ theme }) => ({
    height: "100%",
    position: "relative",
  })),
  //
  BottomBar: styled("div")(({ theme }) => ({
    height: bottomBarHeight,
    position: "absolute",
    bottom: bottom,
    width: "100%",
    display: "flex",
    alignItems: "center",
  })),
  Circle: styled("div")<{ bgcolor: string; $selected?: boolean }>(
    ({ theme, bgcolor, $selected }) => ({
      height: "25px",
      width: "25px",
      borderRadius: "50%",
      backgroundColor: bgcolor,
      opacity: $selected ? "100%" : "75%",
      border: `2px solid ${$selected ? "black" : theme.backgroundColor.tertiary}`,
      transition: "all 0.5s",
    })
  ),
  VersionName: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.tertiary,
    fontWeight: 500,
    fontSize: "1.1em",
    borderRadius: "5px",
    marginBottom: "10px",
    display: "inline-block",
    float: "right",
  })),
  Mutator: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.tertiary,
    fontWeight: 600,
    fontSize: "0.8em",
    borderRadius: "5px",
    marginBottom: "10px",
    display: "inline-block",
    padding: "2.5px",
  })),
  MutatorRemove: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.tertiary,
    fontWeight: 600,
    fontSize: "9px",
    letterSpacing: "1px",
    borderRadius: "5px",
    padding: "2.5px",
    paddingLeft: "5px",
    paddingRight: "5px",
    display: "inline-block",
    marginLeft: "5px",
    color: "grey",
    backgroundColor: theme.backgroundColor.tertiary,
    opacity: "60%",
  })),
  DefaultItem: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.tertiary,
    fontWeight: 600,
    fontSize: "9px",
    letterSpacing: "1px",
    borderRadius: "5px",
    padding: "2.5px",
    paddingLeft: "5px",
    paddingRight: "5px",
    display: "inline-block",
    marginLeft: "5px",
    color: "grey",
    backgroundColor: theme.backgroundColor.tertiary,
    opacity: "60%",
  })),

  InfoDiv: styled("div")<{ $display: boolean }>(({ theme, $display }) => ({
    opacity: $display ? 1 : 0,
    position: "absolute",
    top: headerHeight,
    right: sizeWidthRight,
    width: rightDefaultWidth,
    // boxShadow: `1.5px 1.5px 0px ${theme.backgroundColor.tertiary}`,
    // backgroundColor: theme.backgroundColor.primary,
    // padding: "15px",
    borderRadius: "5px",
    transition: "all 1s",
  })),
  InfoDivItemName: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "1.1em",
    marginBottom: "10px",
  })),
  InfoDivDescriptionContainer: styled("div")(({ theme }) => ({
    padding: "5px",
  })),
  InfoDivDescriptionTitle: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "0.9em",
  })),
  InfoDivDescriptionDescription: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "0.9em",
  })),
  //
  MoreInfoName: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "0.6em",
  })),
  MoreInfoSymbol: styled("div")(({ theme }) => ({
    display: "inline-block",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "0.7em",
    marginTop: "5px",
  })),
  Footer: styled("div")(({ theme }) => ({
    position: "absolute",
    height: footerHeight,
    bottom: 0,
    backgroundColor: theme.backgroundColor.primary,
    width: "100%",
    display: "flex",
    alignItems: "center",
  })),
  //
  LeftSide: styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: footerHeight,
    left: sizeWidthLeft,
    width: leftDefaultWidth,
    height: `calc(100vh - ${headerHeight} - ${footerHeight} - ${sizeWidthLeft} - 50px)`,
    zIndex: 1,
  })),
  LeftSideRightSide: styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: footerHeight,
    left: `calc(${leftDefaultWidth} + ${sizeWidthLeft} + 10px)`,
    width: leftDefaultWidth,
    zIndex: 1,
  })),
  LeftSideRightSideInner: styled("div")(({ theme }) => ({
    backgroundColor: theme.backgroundColor.primary,
    borderRadius: "5px",
    color: "black",
    padding: "7.5px",
    display: "inline-block",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 700,
    fontSize: "0.6em",
    letterSpacing: "0.95px",
    boxShadow: `1.5px 1.5px 0px ${theme.backgroundColor.tertiary}`,
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
    height: `calc(100vh - ${headerHeight} - ${footerHeight} - 50px - 125px - ${sizeWidthLeft} - 50px)`,
    opacity: $connected ? 0.5 : 1,
    transition: "all 1s",
    ":hover": {
      opacity: 1,
    },
  })),
  BodyLeftSideTextContainer: styled("div")(({ theme }) => ({
    backgroundColor: theme.backgroundColor.primary,
    position: "relative",
    borderRadius: "5px",
    height: `calc(100vh - ${headerHeight} - ${footerHeight} - 125px - ${bottom} - 50px)`,
  })),
  BodyLeftSideText: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.8em",
    textAlign: "center",
    padding: "0 30px 0 30px",
    lineHeight: "1.25em",
  })),
  ContainerInfo: styled("div")(({ theme }) => ({
    zIndex: 2,
    position: "absolute",
    borderRadius: "5px",
    width: rightDefaultWidth,
    bottom: `calc(${bottom} + 0px)`,
    right: sizeWidthRight,
    transition: "all 0.5s ease-in-out",
  })),
  DetailsButton: styled("div")(({ theme }) => ({
    letterSpacing: "2.5px",
  })),
  PayContainerInfoOpen: styled("div")(({ theme }) => ({
    marginTop: "12.5px",
    marginBottom: "12.5px",
  })),
  PayContainerInfoGrid: styled(Grid)(({ theme }) => ({
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: theme.backgroundColor.secondary,
  })),

  ContainerTitle: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "2.5em",
    fontWeight: 900,
    marginBottom: "10px",
    display: "inline-block",
  })),

  ContainerPayment: styled("div")(({ theme }) => ({
    display: "inline-block",
    width: "100%",
  })),
  InnerContainerPayment: styled("div")(({ theme }) => ({
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
  InnerContainerInfo2: styled("div")(({ theme }) => ({
    backgroundColor: theme.backgroundColor.primary,
    padding: "25px",
  })),
  BottomBarContainer: styled(Grid)(({ theme }) => ({
    height: "100%",
    minWidth: "250px",
    backgroundColor: theme.backgroundColor.primary,
    opacity: "85%",
    borderRadius: "5px",
    color: "black",
    transition: "all 0.5s",
    ":hover": {
      opacity: "100%",
    },
  })),
  MintInfoText: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.tertiary,
    fontSize: "1.1em",
    letterSpacing: "0.1px",
    lineHeight: "11.5px",
  })),
  //
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
    fontSize: "0.8em",
    fontWeight: 600,
    opacity: 0.3,
  })),
  MintPrice: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "1.5em",
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
