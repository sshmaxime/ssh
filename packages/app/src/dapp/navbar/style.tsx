import { styled } from "@mui/material/styles";

import { AppBar, Toolbar, Typography, Button, Grid, SwipeableDrawer } from "@mui/material";

import { Link } from "react-router-dom";

const style = {
  Root: styled("div")(({ theme }) => ({})),
  AppBar: styled(AppBar)(({ theme }) => ({
    ...theme.myBreakpoints(theme).level4,

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

  LinkButton: styled(Link)<{ active?: boolean }>(({ theme, active }) => ({
    fontSize: "0.75em",
    color: active ? "black" : "black",
    textDecoration: "none",
    marginRight: "5px",
    marginLeft: "5px",
    letterSpacing: "1px",
    padding: "10px 22.5px 10px 22.5px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 700,
    boxShadow: active ? "2.5px 2.5px 2px #afafb4, -2.5px -2.5px 2px #ffffff" : "",
    borderRadius: "10px",
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
    backgroundColor: "white",
    borderRadius: "10px",
  })),
};

export default style;
