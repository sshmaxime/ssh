import { styled } from "@mui/material/styles";

import { AppBar, Toolbar, Typography, Button, Card, Grid, SwipeableDrawer } from "@mui/material";

const triangleHeight = "7.5vh";

const style = {
  Root: styled("div")(({ theme }) => ({})),
  //
  LandingScreenComponent: styled("div")(({ theme }) => ({
    height: "100vh",
  })),
  Background: styled("div")(({ theme }) => ({
    height: "100%",
    "&:before": {
      content: `""`,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    backgroundColor: theme.backgroundColor.secondary,
  })),
  TitleContainer: styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: "5%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  })),
  Subtitle: styled("p")(({ theme }) => ({
    fontSize: "0.65em",
    letterSpacing: "1.5px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    marginTop: "5px",
    // color: theme.backgroundColor.darker,
  })),
  GridTitle: styled(Grid)(({ theme }) => ({
    height: "calc(100vh - 100px - 100px - 7.5vh)",
  })),
  ButtonCallToAction: styled(Grid)(({ theme }) => ({
    fontSize: "0.9em",
    backgroundColor: "black",
    padding: "10px",
    color: "white",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
  })),
  TitleContainer2: styled("div")(({ theme }) => ({
    position: "absolute",
    top: "100px",
    left: 0,
    right: 0,
    backgroundColor: theme.backgroundColor.secondary,
    ...theme.myBreakpoints(theme).level1,
  })),
  Title: styled("p")(({ theme }) => ({
    fontSize: "2em",
    letterSpacing: "1.5px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    fontStyle: "italic",
    display: "inline-block",
    paddingBottom: "10px",
    marginBottom: "10px",
    borderBottom: "10px solid black",
    textShadow: `5px 5px ${theme.backgroundColor.tertiary}`,
  })),
  TitleKeywordPrefix: styled("p")(({ theme }) => ({
    fontSize: "4.5em",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    padding: "1.5px 5px 1.5px 5px",
    marginRight: "15px",
    backgroundColor: theme.backgroundColor.tertiary,
    color: "white",
    borderRadius: "2.5px",
  })),
  TitleKeyword: styled("div")(({ theme }) => ({
    fontSize: "4em",
    display: "inline-block",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 700,
    padding: "5px 15px 5px 15px",
    borderRadius: "2.5px",
    backgroundColor: "black",
    color: "white",
    boxShadow: `5px 5px 0px ${theme.backgroundColor.tertiary}`,
  })),
  TitleButton: styled("p")(({ theme }) => ({
    fontSize: "6px",
    fontFamily: theme.fontFamily.secondary,
    fontWeight: 500,
    letterSpacing: "1.25px",
    lineHeight: "13px",
  })),
  ImgIcon: styled("img")(({ theme }) => ({
    width: "25px",
    height: "25px",
  })),
  TitleVertical: styled("span")(({ theme }) => ({
    fontSize: "0.9em",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    backgroundColor: "black",
    color: "white",
    letterSpacing: "1.5px",
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    padding: "7.5px 1.5px 7.5px 1.5px",
  })),
  TitleVertical1: styled("span")(({ theme }) => ({
    fontSize: "0.9em",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    fontStyle: "italic",
    padding: "7.5px 1.5px 7.5px 1.5px",
  })),
  ProjectQuickPresentation: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })),
  ProjectPresentationTitle: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    padding: "2.5px",
    paddingLeft: "25px",
    paddingRight: "25px",
    fontSize: "0.8em",
    letterSpacing: "0.05em",
    marginTop: "15px",
    color: "black",
    backgroundColor: "white",
    textAlign: "center",
    fontWeight: 900,
    border: `2px solid ${theme.backgroundColor.tertiary}`,
    boxShadow: `5px 5px 0px ${theme.backgroundColor.tertiary}`,
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
  })),
  Triangle: styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: 0,
    height: 0,
    width: 0,
    borderTop: "125px solid transparent",
    borderRight: `50vw solid  ${theme.backgroundColor.primary}`,
    borderLeft: `50vw solid ${theme.backgroundColor.primary}`,
    display: "table",
    margin: "0 auto",
    paddingBottom: `${triangleHeight}`,
  })),

  //
  DripComponent: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    paddingTop: "2.5vh",
    paddingBottom: "7.5vh",
    // background: `r/gb(34,193,195)`,
    background: `linear-gradient(0deg, ${theme.backgroundColor.secondary} 0%, ${theme.backgroundColor.primary} 50%)`,
  })),
  DripWarningContainer: styled("div")(({ theme }) => ({
    marginTop: "35px",
    padding: "15px",
    backgroundColor: theme.backgroundColor.secondary,
    borderRadius: "5px",
  })),
  ViewTitle: styled("div")<{ big?: boolean; shadow?: boolean }>(({ theme, shadow = true }) => ({
    fontSize: "2.5em",
    fontFamily: theme.fontFamily.primary,
    fontStyle: "italic",
    fontWeight: 900,
    marginBottom: "50px",
    display: "inline-block",
    borderRadius: "2.5px",
    // textShad ow: shadow ? `10px 5px ${theme.backgroundColor.tertiary}` : "",
  })),

  View2Content: styled("div")(({ theme }) => ({
    fontSize: "1em",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 500,
    lineHeight: "1.75em",
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

  //
  View3: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
  })),
  View3StepName: styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    paddingLeft: "15px",
    paddingRight: "15px",
    borderRadius: "5px",
    fontStyle: "italic",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    backgroundColor: theme.backgroundColor.secondary,
    color: "black",
    textAlign: "center",
    display: "table",
    margin: "0 auto",
  })),
  View3Char: styled("div")(({ theme }) => ({
    fontSize: "3em",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    textAlign: "center",
  })),
  View3Container: styled("div")(({ theme }) => ({
    paddingTop: "25px",
    paddingBottom: "25px",
  })),

  //
  SocietyComponent: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    backgroundColor: theme.backgroundColor.secondary,
    paddingTop: "7.5vh",
    paddingBottom: "7.5vh",
  })),
  Titlea: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    color: "black",
    fontSize: "1.75em",
    fontWeight: 900,
    marginBottom: "35px",
    letterSpacing: "-0.5px",
    display: "inline-block",
  })),
  Button: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    backgroundColor: theme.backgroundColor.secondary,
    color: "black",
    borderRadius: "25px",
    padding: "5px 15px 5px 15px",
    fontSize: "0.75em",
    fontWeight: 700,
    letterSpacing: "1.5px",
  })),
  //
  RoadmapComponent: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    backgroundColor: theme.backgroundColor.primary,
    paddingTop: "7.5vh",
    paddingBottom: "7.5vh",
  })),
  //
  TeamComponent: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    backgroundColor: theme.backgroundColor.secondary,
    paddingTop: "7.5vh",
    paddingBottom: "7.5vh",
  })),
  TeamContainer: styled("div")(({ theme }) => ({
    backgroundColor: theme.backgroundColor.primary,
    padding: "25px",
    borderRadius: "5px",
  })),
  ImgTeam: styled("img")(({ theme }) => ({
    width: "100%",
    borderRadius: "5px",
  })),
  TeamName: styled(Typography)(({ theme }) => ({
    ...theme.titles(theme).primary,
    paddingLeft: "5px",
  })),
  TeamNameTitle: styled(Typography)(({ theme }) => ({
    ...theme.titles(theme).secondary,
    opacity: "35%",
    paddingLeft: "5px",
    marginBottom: "5px",
  })),

  //
  LabsComponent: styled("div")(({ theme }) => ({
    backgroundColor: "black",
    paddingTop: ".5vh",
    paddingBottom: ".5vh",
  })),
  Sentence: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    color: theme.backgroundColor.primary,
    fontSize: "1.25em",
    fontWeight: 900,
    textAlign: "center",
  })),

  //
  ContractsComponent: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    backgroundColor: theme.backgroundColor.secondary,
    paddingTop: "7.5vh",
    paddingBottom: "7.5vh",
  })),
  ContractsTitle: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "1em",
    fontWeight: 900,
    marginBottom: "20px",
    display: "inline-block",
    borderBottom: "2.5px solid black",
  })),
  ContractsName: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 700,
    marginRight: "15px",
    fontSize: "0.85em",
  })),
  ContractsAddy: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.8em",
    opacity: "50%",
    textDecoration: "underline",
  })),

  RoadMapItemStep: styled(Typography)(({ theme }) => ({
    color: "black",
    borderRadius: "5px",
    display: "inline-block",
    paddingLeft: "10px",
    paddingRight: "10px",
    fontFamily: "montserrat",
    fontWeight: 700,
    fontSize: "0.8em",
  })),
  RoadMapItem: styled("div")(({ theme }) => ({
    padding: "10px",
    borderRadius: "5px",
    boxShadow: `10px 10px 2.5px ${theme.backgroundColor.secondary}`,
    backgroundColor: `white`,
    marginLeft: "10px",
    marginBottom: "35px",
  })),
  RoadMapItemTitle: styled(Typography)(({ theme }) => ({
    paddingLeft: "10px",
    paddingRight: "10px",
    fontStyle: "italic",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    fontSize: "1.1em",
    color: "black",
    marginBottom: "15px",
  })),
  RoadMapItemType: styled(Typography)(({ theme }) => ({
    fontSize: "0.75em",
    padding: "2.5px",
    paddingLeft: "10px",
    paddingRight: "10px",
    fontWeight: 900,
    letterSpacing: "0.5px",
    fontFamily: theme.fontFamily.primary,
    backgroundColor: theme.backgroundColor.secondary,
    borderRadius: "5px",
  })),
  RoadMapItemContent: styled(Typography)(({ theme }) => ({
    paddingLeft: "10px",
    paddingRight: "10px",
    fontFamily: "montserrat",
    fontWeight: 300,
    fontSize: "1em",
    color: "black",
    opacity: "75%",
  })),
  RoadMapItem2: styled("div")(({ theme }) => ({
    padding: "10px",
    borderRadius: "5px",
    boxShadow: `-10px 10px 2.5px ${theme.backgroundColor.secondary}`,
    backgroundColor: `white`,
    textAlign: "start",
    marginRight: "10px",
    marginBottom: "35px",
  })),
  FooterSplitContainer: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    backgroundColor: theme.backgroundColor.secondary,
  })),
  FooterSplit: styled("div")(({ theme }) => ({
    height: "2px",
    backgroundColor: theme.backgroundColor.tertiary,
  })),
};

export default style;
