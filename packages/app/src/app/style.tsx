import { styled } from "@mui/material/styles";

import { AppBar, Toolbar, Typography, Button, Card, Grid, SwipeableDrawer } from "@mui/material";

const triangleHeight = "10vh";

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
    top: "85%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  })),
  TitleContainer2: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    position: "absolute",
    top: "30%",
    //
    fontSize: "2em",
    fontFamily: theme.fontFamily.primary,
    fontStyle: "italic",
    lineHeight: "2em",
    fontWeight: 900,
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
    backgroundColor: theme.backgroundColor.primary,
    paddingBottom: "10vh",
  })),
  DripWarningContainer: styled("div")(({ theme }) => ({
    marginTop: "35px",
    padding: "15px",
    backgroundColor: theme.backgroundColor.secondary,
    borderRadius: "5px",
  })),
  ViewTitle: styled("div")(({ theme }) => ({
    fontSize: "2.5em",
    fontFamily: theme.fontFamily.primary,
    fontStyle: "italic",
    lineHeight: "2em",
    fontWeight: 900,
    marginBottom: "35px",
    display: "inline-block",
    borderRadius: "2.5px",
    textShadow: `10px 5px ${theme.backgroundColor.tertiary}`,
  })),
  View2Content: styled("div")(({ theme }) => ({
    fontSize: "1.1em",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 500,
    lineHeight: "1.75em",
  })),
  MoreLinkContainer: styled("div")(({ theme }) => ({
    marginTop: "35px",
    display: "inline-block",
  })),
  MoreLink: styled("div")(({ theme }) => ({
    fontSize: "0.85em",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    letterSpacing: "1.5px",
  })),

  //
  View3: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    backgroundImage: `linear-gradient(180deg, ${theme.backgroundColor.primary} 50%,  ${theme.backgroundColor.secondary} 50%)`,
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
  RoadmapComponent: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    backgroundColor: theme.backgroundColor.secondary,
    paddingTop: "10vh",
    paddingBottom: "10vh",
  })),

  RoadMapItemStep: styled(Typography)(({ theme }) => ({
    color: "black",
    padding: "5px 10px 5px 10px",
    borderRadius: "10px",
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
    boxShadow: `25px -25px 2.5px ${theme.backgroundColor.primary}`,
    backgroundColor: `white`,
    marginLeft: "10px",
    marginBottom: "5px",
  })),
  RoadMapItemTitle: styled(Typography)(({ theme }) => ({
    paddingLeft: "10px",
    textShadow: `3px 3px 0px ${theme.backgroundColor.tertiary}`,
    paddingRight: "10px",
    fontStyle: "italic",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    fontSize: "1.1em",
    color: "black",
    marginBottom: "10px",
  })),
  RoadMapItemType: styled(Typography)(({ theme }) => ({
    fontSize: "0.65em",
    padding: "2.5px",
    paddingLeft: "10px",
    paddingRight: "10px",
    fontWeight: 900,
    letterSpacing: "0.5px",
    fontFamily: theme.fontFamily.primary,
    backgroundColor: theme.backgroundColor.primary,
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
    boxShadow: `-25px -25px 2.5px ${theme.backgroundColor.primary}`,
    backgroundColor: `white`,
    textAlign: "start",
    marginRight: "10px",
    marginBottom: "5px",
  })),
};

export default style;
