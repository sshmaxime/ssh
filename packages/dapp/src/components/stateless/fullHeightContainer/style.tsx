import { styled } from "@mui/material/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  Stack,
  Grid,
  SwipeableDrawer,
} from "@mui/material";

const style = {
  Root: styled("div")(({ theme }) => ({
    marginTop: "10px",
    marginBottom: "10px",
    minHeight: "calc(100vh - 100px)",
  })),
  Title: styled(Typography)(({ theme }) => ({
    fontSize: "4em",
    fontFamily: "montserrat-black",
  })),
  SecondTitle: styled("span")(({ theme }) => ({
    fontSize: "2.5em",
    fontFamily: "montserrat-black",
    marginBottom: "10px",
  })),
  SecondTitle2: styled("span")(({ theme }) => ({
    fontSize: "2.5em",
    fontFamily: "montserrat-black-italic",
    color: "red",
  })),
  SecondTitle3: styled("span")(({ theme }) => ({
    fontSize: "1em",
    fontFamily: "montserrat-normal",
    paddingTop: "250px",
  })),
  Text: styled(Typography)(({ theme }) => ({
    fontSize: "1em",
    fontFamily: "montserrat-normal",
  })),
  Container: styled("div")(({ theme }) => ({
    height: "50vh",
    paddingLeft: "5vw",
    paddingTop: "20vh",
  })),
  Img: styled("img")(({ theme }) => ({
    width: "200px",
    borderRadius: "10px",
    border: "2px black solid",
    boxShadow: "5px 5px 5px #bebebe, -2px -2px 0px white",
  })),
  Button: styled("div")(({ theme }) => ({
    padding: "10px",
    border: "1px black solid",
    display: "inline",
    borderRadius: "10px",
    backgroundColor: "black",
    color: "white",
    boxShadow: "5px 5px 0px #bebebe, -2px -2px 0px white",
    fontFamily: "montserrat-normal",
  })),
  A: styled("div")(({ theme }) => ({
    height: "40vh",
    position: "relative",
    paddingTop: "27vh",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "30px",
    },
  })),
  B: styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: 0,
    zIndex: 10,
  })),
  C: styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: 125,
    left: 125,
    zIndex: 9,
  })),
  D: styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: 225,
    left: 225,
    zIndex: 8,
  })),
  E: styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: 325,
    left: 325,
    zIndex: 7,
  })),
};

export default style;
