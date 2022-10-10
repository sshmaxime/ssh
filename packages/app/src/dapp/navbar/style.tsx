import { styled } from "@mui/material/styles";

import { AppBar, Toolbar, Typography, Button, Grid, SwipeableDrawer } from "@mui/material";

import { Link } from "react-router-dom";

const style = {
  Root: styled("div")(({ theme }) => ({})),
  AppBar: styled(AppBar)(({ theme }) => ({
    ...theme.myBreakpoints(theme).level2,

    padding: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    height: "100px",
    display: "flex",
    justifyContent: "center",
  })),
  Link: styled(Link)(({ theme }) => ({
    ...theme.titles(theme).primary,
  })),
  ExtraMenuButton: styled("div")(({ theme }) => ({
    padding: "7px 20px 7px 20px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    fontSize: "0.9em",
    color: "black",
  })),
  GoToAppButton: styled("div")(({ theme }) => ({
    fontSize: "0.85em",
    color: "white",
    textDecoration: "none",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 700,
    boxShadow: "2.5px 2.5px 5px #afafb4, -2.5px -2.5px 5px #ffffff",
    borderRadius: "30px",
    backgroundColor: "black",
    letterSpacing: "-0.25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    width: "180px",
  })),
  Wallet: styled(Grid)(({ theme }) => ({
    fontSize: "0.85em",
    color: "black",
    textDecoration: "none",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 700,
    boxShadow: "2.5px 2.5px 5px #afafb4",
    userSelect: "none",
    borderRadius: "30px",
    backgroundColor: "white",
    letterSpacing: "-0.25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    width: "180px",
  })),
  WalletENS: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 700,
    fontSize: "1em",
  })),
  WalletAddy: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    color: "grey",
    fontSize: "0.75em",
  })),
  WalletView: styled("div")(({ theme }) => ({
    padding: "15px",
    width: "300px",
    maxHeight: "250px",
  })),
  WalletTypo1: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 500,
    color: "grey",
    fontSize: "0.8em",
  })),
  WalletTypoCollection: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    letterSpacing: "0.5px",
    fontSize: "0.65em",
    padding: "2.5px",
    paddingLeft: "7.5px",
    paddingRight: "7.5px",
    color: "black",
    backgroundColor: theme.backgroundColor.secondary,
    borderRadius: "5px",
  })),
  WalletTypoCollectionDrop: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    letterSpacing: "-0.5px",
    fontSize: "0.65em",
    color: "black",
    padding: "2.5px",
  })),
  WalletTypoDripId: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    letterSpacing: "0.5px",
    fontSize: "0.65em",
    padding: "2.5px",
    paddingLeft: "10px",
    paddingRight: "10px",
    color: "grey",
    borderRadius: "5px",
    backgroundColor: theme.backgroundColor.secondary,
  })),
  WalletTypoDripAction: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    fontSize: "0.65em",
    padding: "2.5px",
    color: "#3366BB",
    borderRadius: "5px",
  })),
  Title: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    fontSize: "0.75em",
    color: "black",
  })),
};

export default style;
