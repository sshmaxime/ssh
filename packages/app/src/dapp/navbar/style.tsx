import { styled } from "@mui/material/styles";

import { AppBar, Toolbar, Typography, Button, Grid, SwipeableDrawer } from "@mui/material";

import { Link } from "react-router-dom";

const style = {
  Root: styled("div")(({ theme }) => ({})),
  AppBar: styled(AppBar)(({ theme }) => ({
    ...theme.myBreakpoints(theme).level3,

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
  HeaderFirstLeftSideTitle: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "1.25em",
    fontWeight: 500,
    marginTop: "25px",
    marginBottom: "25px",
    color: "black",
  })),
  GoToAppButton: styled("div")(({ theme }) => ({
    fontSize: "0.85em",
    color: "white",
    textDecoration: "none",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 700,
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
    // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 5px 1px",
    userSelect: "none",
    borderRadius: "25px",
    backgroundColor: theme.backgroundColor.primary,
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
    width: "325px",
    maxHeight: "calc(70vh)",
  })),
  //
  WalletTypo1: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 500,
    color: "grey",
    fontSize: "0.8em",
  })),
  WalletTypoCollection: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    letterSpacing: "0.25px",
    fontSize: "0.65em",
    padding: "5px",
    paddingLeft: "10px",
    paddingRight: "10px",
    color: "grey",
    backgroundColor: theme.backgroundColor.secondary,
    borderRadius: "5px",
  })),
  WalletTypoCollectionDrop: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    letterSpacing: "-0.5px",
    fontSize: "0.75em",
    color: "black",
  })),
  WalletTypoDripNft: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "0.65em",
    marginRight: "5px",
    color: "black",
    paddingTop: "5px",
    paddingBottom: "5px",
  })),
  WalletTypoDripId2: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    letterSpacing: "0.5px",
    fontSize: "0.65em",
    padding: "2.5px",
    fontWeight: 600,
    color: "black",
    borderRadius: "5px",
    backgroundColor: theme.backgroundColor.secondary,
    width: "25px",
    textAlign: "center",
    //
  })),
  WalletTypoDripId: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    letterSpacing: "0.5px",
    fontSize: "0.65em",
    padding: "2.5px",
    paddingLeft: "10px",
    paddingRight: "10px",
    color: "black",
    borderRadius: "5px",
    backgroundColor: theme.backgroundColor.secondary,
  })),
  WalletTypoDripAction: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    fontSize: "0.65em",
    color: "#3366BB",
    borderRadius: "5px",
  })),
  Title: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "0.7em",
    color: "white",
    backgroundColor: "red",
    paddingLeft: "5px",
    paddingRight: "5px",
  })),
  Title2: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "0.7em",
    color: "black",
  })),
  Title3: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 400,
    fontSize: "0.7em",
    color: "black",
  })),
  LinkNavbar: styled(Grid)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    marginRight: "5px",
    paddingTop: "5px",
    paddingBottom: "5px",
  })),
  LinkBarText: styled("div")(({ theme }) => ({
    fontSize: "0.75em",
    // padding: "2.5px",
    // paddingTop: "2.5px",
    paddingLeft: "5px",
    paddingRight: "5px",
    // backgroundColor: "black",
    borderRadius: "1px",
    color: "black",
    ":hover": {
      backgroundColor: "red",
      color: "white",
    },
  })),
};

export default style;
