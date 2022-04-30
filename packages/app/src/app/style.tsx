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
    // ...theme.myBreakpoints(theme).level1,
    position: "absolute",
    top: "30%",
    width: "700px",
    height: "100px",

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
    paddingTop: "7.5vh",
    paddingBottom: "7.5vh",
  })),
  DripWarningContainer: styled("div")(({ theme }) => ({
    marginTop: "35px",
    padding: "15px",
    backgroundColor: theme.backgroundColor.secondary,
    borderRadius: "5px",
  })),
  ViewTitle: styled("div")<{ big?: boolean; shadow?: boolean }>(
    ({ theme, big, shadow = true }) => ({
      fontSize: big ? "3em" : "2em",
      fontFamily: theme.fontFamily.primary,
      fontStyle: "italic",
      fontWeight: 900,
      marginBottom: "30px",
      display: "inline-block",
      borderRadius: "2.5px",
      textShadow: shadow ? `10px 5px ${theme.backgroundColor.tertiary}` : "",
    })
  ),

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
    backgroundColor: theme.backgroundColor.primary,
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
  View2Content2: styled("div")(({ theme }) => ({
    fontSize: "1em",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 500,
    lineHeight: "1.75em",
  })),
  Yessir: styled("div")(({ theme }) => ({
    backgroundColor: theme.backgroundColor.secondary,
    padding: "25px",
    borderRadius: "10px",
  })),
  //

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
  //
  ContractsComponent: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    backgroundColor: theme.backgroundColor.primary,
    paddingTop: "2.5vh",
    paddingBottom: "2.5vh",
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
};

export default style;
