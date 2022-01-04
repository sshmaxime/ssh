import { styled } from "@mui/material/styles";

const style = {
  Root: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    minHeight: "100vh",
  })),
  RootDocElement: styled("div")(({ theme }) => ({
    marginBottom: "35px",
  })),

  PageTitle: styled("div")(({ theme }) => ({
    ...theme.titles(theme).primary,
    textShadow: "5px 5px 0px #2AFE00",
  })),

  Title: styled("div")(({ theme }) => ({
    color: "black",
    fontFamily: theme.fontFamily.primary,
    fontSize: "1.15em",
    fontWeight: 900,
    marginBottom: "15px",
    paddingBottom: "5px",
    borderBottom: "5px solid #2AFE00",
    display: "inline-block",
  })),

  Inner: styled("div")(({ theme }) => ({
    color: "black",
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.9em",
    lineHeight: "20px",
    fontWeight: 300,
  })),
};

export default style;
