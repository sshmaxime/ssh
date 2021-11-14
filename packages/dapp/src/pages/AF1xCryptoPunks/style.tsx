import { styled } from "@mui/material/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  SwipeableDrawer,
  Container,
  Grid,
} from "@mui/material";

const style = {
  Root: styled("div")(({ theme }) => ({})),
  HeaderProject: styled("div")(({ theme }) => ({
    minHeight: "calc(80vh - 150px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })),
  HeaderProjectTitle: styled(Typography)(({ theme }) => ({
    textAlign: "center",
    fontSize: "4em",
    fontFamily: "montserrat-black-italic",
    textShadow: "5px 2px grey",
    [theme.breakpoints.down("md")]: {
      fontSize: "2em",
    },
  })),
  HeaderProjectSmallTitle: styled(Typography)(({ theme }) => ({
    textAlign: "center",
    fontSize: "1.5em",
    fontFamily: "montserrat-black-italic",
    paddingTop: "25px",
    [theme.breakpoints.down("md")]: {
      fontSize: "1em",
    },
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
  Triangle: styled("div")(({ theme }) => ({
    height: 0,
    width: 0,
    borderTop: "100px solid #f9f9fb",
    borderRight: "50vw solid transparent",
    borderLeft: "50vw solid transparent",
    display: "table",
    margin: "0 auto",
  })),
  ProjectExplanationContainer: styled("div")(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    backgroundColor: "white",
  })),
  LinkContainer: styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })),
  LinkContainerItem: styled(Grid)(({ theme }) => ({})),
  LinkContainerItemText: styled(Typography)(({ theme }) => ({
    color: "black",
    display: "inline",
    textAlign: "center",
    padding: "15px",
    fontFamily: "montserrat",
    fontWeight: 800,
    borderRadius: "10px",
    background: "linear-gradient(145deg, #f9f9fb, #ffffff)",
    boxShadow: "5px 5px 5px #b3b3b5, -5px -5px 5px #ffffff",
  })),
  ProjectExplanation: styled("div")(({ theme }) => ({
    minHeight: "calc(100vh - 150px)",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    backgroundColor: "white",
    paddingTop: "20vh",
    paddingBottom: "10vh",
  })),
  ProjectExplanationGifContainer: styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  })),
  Gif: styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "5px",
    border: "3px solid black",
    boxShadow: "5px 5px 5px #bebebe, -5px -5px 0px #ffffff",
  })),
  ProjectExplanationNumberItems: styled("div")(({ theme }) => ({
    fontSize: "2em",
    fontFamily: "montserrat-black",
  })),
  ProjectExplanationGrid: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })),
  ProjectExplanationImg: styled("img")(({ theme }) => ({
    width: "200px",
    borderRadius: "5px",
    boxShadow: "15px 15px 5px #bebebe, -5px -5px 0px #ffffff",
  })),
  ProjectExplanationImgText: styled("div")(({ theme }) => ({
    fontFamily: "montserrat",
    paddingTop: "25px",
  })),
  ProjectExplanationBigCharContainer: styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
  })),
  ProjectExplanationBigChar: styled("div")(({ theme }) => ({
    fontSize: "6.5em",
    marginBottom: "50px",
  })),
  ProjectPlan: styled("div")(({ theme }) => ({
    borderRadius: "5px",
    backgroundColor: "#f9f9fb",
    paddingTop: "50px",
  })),
  ImgReference: styled("img")(({ theme }) => ({
    width: "100%",
    borderRadius: "5px",
    border: "3px solid black",
    boxShadow: "5px 5px 5px #bebebe, -5px -5px 0px #ffffff",
  })),
  Roadmap: styled("div")(({ theme }) => ({
    paddingRight: "20vw",
    paddingLeft: "20vw",
    borderRadius: "5px",
    paddingTop: "10vh",
    backgroundColor: "#f9f9fb",
    paddingBottom: "10vh",
  })),
  ProjectPlanTitle: styled(Typography)(({ theme }) => ({
    color: "black",
    textAlign: "center",
    fontFamily: "montserrat",
    fontWeight: 800,
    fontSize: "3em",
    paddingBottom: "10vh",
  })),
  RoadMapItem: styled("div")(({ theme }) => ({})),
  RoadMapItemTitle: styled(Typography)(({ theme }) => ({
    paddingBottom: "35px",
    color: "black",
    fontFamily: "montserrat",
    fontWeight: 800,
    fontSize: "2em",
    marginTop: "-15px",
  })),
  RoadMapItemContent: styled(Typography)(({ theme }) => ({
    color: "black",
    fontFamily: "montserrat",
    fontWeight: 200,
    fontSize: "1.1em",
    paddingBottom: "5vh",
    marginTop: "-15px",
  })),
};

export default style;
