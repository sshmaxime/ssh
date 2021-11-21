import { styled } from "@mui/material/styles";

import { Typography, Grid } from "@mui/material";

const style = {
  Root: styled("div")(({ theme }) => ({})),

  // View 1
  View_1: styled("div")(({ theme }) => ({
    background:
      "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(249,249,251,1) 100%)",
  })),
  PageTitleContainer: styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10vh",
  })),
  PageTitle: styled(Typography)(({ theme }) => ({
    paddingTop: "5vh",
    textAlign: "center",
    fontSize: "4.5em",
    fontFamily: theme.fontFamily.primary,
    fontStyle: "italic",
    fontWeight: 900,
    textShadow: "5px 5px #d3d3d3",
    [theme.breakpoints.down("md")]: {
      fontSize: "2em",
    },
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
  ProjectTitleContainer: styled(Typography)(({ theme }) => ({
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

  // View 2
  View_2: styled("div")(({ theme }) => ({
    background:
      "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(249,249,251,1) 100%)",
  })),
  TriangleContainer: styled("div")(({ theme }) => ({
    backgroundColor: "#f9f9fb",
  })),
  Triangle: styled("div")(({ theme }) => ({
    height: 0,
    width: 0,
    borderTop: "100px solid #ffffff",
    borderRight: "50vw solid transparent",
    borderLeft: "50vw solid transparent",
    display: "table",
    margin: "0 auto",
  })),
  ProjectQuickPresentation: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "100px",
    background: "linear-gradient(0deg, #ffffff 55%, #f9f9fb 55%)",
    paddingBottom: "15vh",
  })),
  ProjectPresentationGrid: styled(Grid)(({ theme }) => ({})),
  ProjectPresentationTitle: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "1em",
    letterSpacing: "0.1em",
    marginTop: "25px",
    color: "black",
    borderLeft: "5px solid #ffd6ba",
    display: "inline-block",
    fontWeight: 900,
  })),
  ProjectPresentationImg: styled("img")(({ theme }) => ({
    width: "100%",
    boxShadow: "3px 3px 1px #bebebe, 0px 0px 0px #ffffff",
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

  // View 3
  View_3: styled("div")(({ theme }) => ({
    background:
      "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(249,249,251,1) 100%)",
  })),
  ProjectPlan: styled("div")(({ theme }) => ({
    borderRadius: "5px",
    background:
      "linear-gradient(0deg, rgba(249,249,251,1) 0%, rgba(255,255,255,1) 100%)",
  })),
  ProjectPlanTitle: styled(Typography)(({ theme }) => ({
    color: "black",
    textAlign: "center",
    fontFamily: "montserrat",
    fontWeight: 800,
    fontSize: "3em",
    paddingBottom: "10vh",
  })),
  HeaderProjectSmallTitleHead: styled("span")(({ theme }) => ({
    backgroundColor: "red",
    color: "white",
    padding: "5px",
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: "5px",
    marginRight: "25px",
    boxShadow: "10px 10px 2px #bebebe, -5px -5px 0px #ffffff",
  })),
  ProjectPlanGrid: styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })),
  ProjectPlanGridContainer: styled("div")(({ theme }) => ({
    height: "80px",
    width: "80px",
    borderRadius: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })),
  ImgAbout: styled("img")(({ theme }) => ({
    width: "100%",
    borderRadius: "5px",
    boxShadow: "5px 5px 5px #bebebe, -5px -5px 0px #ffffff",
  })),
  TextTitle: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "1.5em",
    letterSpacing: "0.3em",
    paddingTop: "10px",
    borderTop: "5px solid #b6ccfe",
    marginBottom: "25px",
    display: "inline-block",
    fontWeight: 900,
  })),
  TextAbout: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "1.1em",
    fontWeight: 300,
  })),
  ReadMore: styled(Grid)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.7em",
    textTransform: "uppercase",
    color: "grey",
    letterSpacing: "3px",
    fontWeight: 700,
  })),

  // View 4
  View_4: styled("div")(({ theme }) => ({})),
  ProjectExempleImgs: styled("div")(({ theme }) => ({
    paddingTop: "10vh",
    paddingBottom: "10vh",
    backgroundColor: "white",
  })),
  ProjectExplanationImg2: styled("img")(({ theme }) => ({
    width: "100%",
    boxShadow: "3px 3px 1px #bebebe, 0px 0px 0px #ffffff",
  })),

  // View 5
  View_5: styled("div")(({ theme }) => ({})),
  Roadmap: styled("div")(({ theme }) => ({
    paddingRight: "20vw",
    paddingLeft: "20vw",
    borderRadius: "5px",
    paddingTop: "10vh",
    background:
      "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(249,249,251,1) 100%)",
    paddingBottom: "10vh",
  })),
  RoadMapItem: styled("div")(({ theme }) => ({})),
  RoadMapItemTitle: styled(Typography)(({ theme }) => ({
    marginBottom: "35px",
    padding: "5px",
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: "15px",
    display: "inline-block",
    textShadow: "3px 1px white",
    color: "black",
    backgroundColor: "#dbeaff",
    fontStyle: "italic",
    // textDecoration: "line-through",
    // textDecorationThickness: "2px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    letterSpacing: "5px",
    fontSize: "1.2em",
    marginTop: "-15px",
  })),
  RoadMapItemContent: styled(Typography)(({ theme }) => ({
    color: "black",
    fontFamily: "montserrat",
    fontWeight: 300,
    fontSize: "1.1em",
    paddingBottom: "5vh",
    marginTop: "-15px",
  })),
};

export default style;
