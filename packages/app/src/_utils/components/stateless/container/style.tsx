import { styled } from "@mui/material/styles";

import { Typography } from "@mui/material";

const style = {
  Root: styled("div")<{
    bgcolor?: "primary" | "secondary";
  }>(({ theme, bgcolor: bgcolor }) => ({
    ...theme.myBreakpoints(theme).level1,
    backgroundColor:
      bgcolor === "primary" ? theme.backgroundColor.primary : theme.backgroundColor.secondary,
    paddingTop: "7.5vh",
    paddingBottom: "7.5vh",
  })),

  Title: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "3em",
    textShadow: `-2px 2px 2px white,
      -3px 3px 0px #303049,
      -5px 5px 4px ${theme.backgroundColor.tertiary}`,
  })),
  Subtitle: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.9em",
    fontWeight: 900,
    letterSpacing: "2.5px",
    marginBottom: "7.5vh",
    color: "#2AFE00",
    textShadow: "2px 2px 2px black, -1px -1px 2px black",
  })),
};

export default style;
