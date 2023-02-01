import { styled } from "@mui/material/styles";

import { Grid, Typography } from "@mui/material";

const headerHeight = "100px";
const footerHeight = "25px";

const style = {
  Root: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level3,
  })),
  HomeScreenContainer: styled("div")(({ theme }) => ({
    paddingTop: headerHeight,
    paddingBottom: "25px",
    height: `100vh`,
    width: `100%`,
    boxSizing: "border-box",
  })),
  HomeScreen: styled("div")(({ theme }) => ({
    height: `100%`,
    width: `100%`,
    borderRadius: "5px",
    padding: "25px",
    boxSizing: "border-box",
    backgroundColor: theme.backgroundColor.primary,
  })),
  Title: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.tertiary,
    fontWeight: 500,
    fontSize: "1.5em",
  })),
};

export default style;
