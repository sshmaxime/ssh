import { styled, keyframes } from "@mui/material/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  Grid,
  SwipeableDrawer,
  Container,
} from "@mui/material";

const triangleHeight = "10vh";

const rotate = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.1);
  }
`;

const style = {
  Root: styled("div")(({ theme }) => ({})),

  View1: styled("div")(({ theme }) => ({
    position: "relative",
    height: "100vh",
  })),
  Background: styled("div")(({ theme }) => ({
    height: "100%",
    // backgroundImage: `url(https://wallpaperset.com/w/full/1/9/3/505793.jpg)`,
    backgroundColor: theme.backgroundColor.secondary,
  })),
  TitleContainer: styled(Typography)(({ theme }) => ({
    position: "absolute",
    top: "60%",
    left: "50%",
    width: "100wh",
    transform: "translate(-50%, -50%)",
  })),
  Title: styled(Typography)(({ theme }) => ({
    color: "black",
    fontFamily: theme.fontFamily.primary,
    fontSize: "3em",
    fontWeight: 800,
    display: "inline-block",
  })),
  Title2: styled(Typography)(({ theme }) => ({
    color: "black",
    textShadow: "#fff 1px 0 10px",
    fontFamily: theme.fontFamily.primary,
    fontSize: "3em",
    fontWeight: 900,
    display: "inline-block",
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
  View2: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level2,
    backgroundImage: `linear-gradient(180deg, ${theme.backgroundColor.primary} 50%,  ${theme.backgroundColor.secondary} 50%)`,
    paddingTop: "2.5vh",
    paddingBottom: "2.5vh",
  })),
  ProjectQuickPresentation: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })),
  ProjectPresentationGrid: styled(Grid)(({ theme }) => ({})),
  ProjectPresentationTitleContainer: styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })),
  ProjectPresentationTitle: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    padding: "5px",
    paddingLeft: "25px",
    paddingRight: "25px",
    fontSize: "0.8em",
    letterSpacing: "0.1em",
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
  ProjectPresentationImg: styled("img")(({ theme }) => ({
    width: "100%",
    borderRadius: "10px",
    backgroundColor: "#f9f9fb",
  })),
  ProjectPresentationBigCharContainer: styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    marginBottom: "60px",
  })),
  ProjectPresentationBigChar: styled("div")(({ theme }) => ({
    fontSize: "6.5em",
  })),

  //
  View3: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level0,
    backgroundColor: theme.backgroundColor.secondary,
    paddingTop: "1vh",
    paddingBottom: "10vh",
  })),
  TextTitleContainer: styled("div")(({ theme }) => ({})),
  TextTitle: styled(Typography)(({ theme }) => ({
    ...theme.titles(theme).primary,
    textAlign: "right",
  })),
  TextSubtitle: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "3em",
    // textShadow: "5px 5px 1px white",
    marginBottom: "50px",
    textShadow: `-2px 2px 2px white,
      -3px 3px 0px #303049,
      -5px 5px 4px ${theme.backgroundColor.tertiary}`,
  })),
  TextSubtitle2: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "3em",
    textShadow: `-2px 2px 2px white,
      -3px 3px 0px #303049,
      -5px 5px 4px ${theme.backgroundColor.tertiary}`,
    marginBottom: "50px",
  })),
  TextAbout: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    letterSpacing: "0.05em",
    fontSize: "1em",
    fontWeight: 300,
  })),
  HeaderContainer: styled(Grid)(({ theme }) => ({
    paddingBottom: "5vh",
  })),
  ImageContainer: styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })),
  GridContainerCard: styled(Grid)(({ theme }) => ({
    ...theme.cards.primary,
  })),
  Image: styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "5px",
    boxShadow: "5px 5px 5px #bebebe, -5px -5px 1px #ffffff",
  })),
  ProjectTitleContainer: styled("div")(({ theme }) => ({
    fontSize: "2em",
    fontFamily: theme.fontFamily.primary,
    fontStyle: "italic",
    fontWeight: 900,
    [theme.breakpoints.down("md")]: {
      fontSize: "1em",
    },
  })),
  ProjectTitleKeyword: styled("span")(({ theme }) => ({
    backgroundColor: "red",
    color: "white",
    padding: "5px",
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: "5px",
    marginRight: "25px",
    boxShadow: "10px 10px 2px #bebebe, -5px -5px 0px #ffffff",
  })),
  ProjectSpacer: styled("div")(({ theme }) => ({
    fontSize: "2em",
    display: "inline-block",
    color: "black",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    paddingBottom: "5px",
    borderBottom: "5px solid black",
    marginBottom: "40px",
  })),
  ProjectDescription: styled(Typography)(({ theme }) => ({
    fontSize: "1.1em",
    color: "black",
    fontWeight: 300,
    fontFamily: theme.fontFamily.primary,
    paddingBottom: "30px",
  })),
  MintButton: styled("div")(({ theme }) => ({
    padding: "5px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "5px",
    textAlign: "center",
    paddingRight: "25px",
    paddingLeft: "25px",
    fontSize: "1em",
    boxShadow: "3px 3px 0px #bebebe, -5px -5px 0px #ffffff",
  })),
  MintPrice: styled("div")(({ theme }) => ({
    padding: "5px",
    borderRadius: "50px",
    textAlign: "center",
    fontFamily: theme.fontFamily.secondary,
    color: "black",
    fontSize: "0.9em",
    backgroundColor: "#F1F1F1",
    paddingRight: "20px",
    paddingLeft: "20px",
    boxShadow: "3px 3px 5px #bebebe, -5px -5px 0px #ffffff",
  })),
  ExternalLink: styled("div")(({ theme }) => ({
    padding: "5px",
    borderRadius: "5px",
    textAlign: "center",
    fontFamily: theme.fontFamily.secondary,
    fontWeight: 500,
    fontSize: "1em",
    backgroundColor: "beige",
    letterSpacing: "-1px",
    paddingRight: "10px",
    paddingLeft: "10px",
    boxShadow: "3px 3px 0px #bebebe, -5px -5px 0px #ffffff",
  })),
  //
  View4: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    paddingTop: "10vh",
    paddingBottom: "10vh",
  })),
  ProjectPlanGrid: styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })),
  ProjectExempleImgs: styled("div")(({ theme }) => ({})),
  ProjectExplanationImg2: styled("img")(({ theme }) => ({
    width: "100%",
    transition: "all .2s ease-in-out",
    borderRadius: "10px",
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
  InfoNft: styled("div")(({ theme }) => ({
    paddingLeft: "20vw",
    paddingRight: "20vw",
  })),
  InfoNftContainer: styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  })),
  InfoNftContent: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 700,
    fontSize: "3em",
  })),
  InfoNftTitle: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    fontSize: "0.9em",
    color: "#8080AE",
  })),
  //
  View5: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    backgroundColor: theme.backgroundColor.secondary,
    paddingTop: "10vh",
    paddingBottom: "10vh",
  })),
  Roadmap: styled("div")(({ theme }) => ({})),
  RoadMapItem: styled("div")(({ theme }) => ({
    padding: "15px",
    borderRadius: "15px",
    boxShadow: `25px -25px 2.5px ${theme.backgroundColor.primary}`,
    backgroundColor: `white`,
  })),
  RoadMapItem2: styled("div")(({ theme }) => ({
    padding: "15px",
    borderRadius: "15px",
    boxShadow: `-25px -25px 2.5px ${theme.backgroundColor.primary}`,
    backgroundColor: `white`,
  })),
  RoadMapItemTitle: styled(Typography)(({ theme }) => ({
    paddingLeft: "10px",
    paddingRight: "10px",
    marginBottom: "5px",
    display: "inline-block",
    fontStyle: "italic",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    letterSpacing: "1px",
    fontSize: "1.25em",
    borderBottom: "5px solid white",
    color: "black",
  })),
  RoadMapItemContent: styled(Typography)(({ theme }) => ({
    paddingLeft: "10px",
    paddingRight: "10px",
    fontFamily: "montserrat",
    fontWeight: 300,
    fontSize: "1.1em",
    paddingBottom: "1vh",
    color: "black",
    opacity: "75%",
  })),
  ProjectPlanTitle: styled(Typography)(({ theme }) => ({
    color: "black",
    textAlign: "center",
    fontFamily: "montserrat",
    fontWeight: 800,
    fontSize: "3em",
    paddingBottom: "10vh",
  })),
  View6: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    paddingTop: "10vh",
    paddingBottom: "10vh",
  })),
  ImgTeam: styled("img")(({ theme }) => ({
    width: "100%",
    borderRadius: "2.5px",
  })),
  TeamName: styled(Typography)(({ theme }) => ({
    ...theme.titles(theme).secondary,
    color: "white",
    textShadow: "1px 1px 1px black, -0.5px -0.5px 2.5px grey",
    borderRadius: "10px",
    padding: "1px",
    paddingLeft: "7.5px",
    paddingRight: "7.5px",
    backgroundColor: "#caffbf",
  })),
  TeamNameTitle: styled(Typography)(({ theme }) => ({
    ...theme.titles(theme).secondary,
    color: "black",
    paddingLeft: "5px",
    paddingRight: "5px",
    fontSize: "0.75em",
  })),
};

export default style;
