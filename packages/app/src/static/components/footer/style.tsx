import { styled } from "@mui/material/styles";

import { Typography } from "@mui/material";

const style = {
  RootFooter: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level4,
    paddingTop: "5vh",
    paddingBottom: "5vh",
    borderRadius: "5px",
    backgroundColor: theme.backgroundColor.primary,
  })),
  ContentCategory: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.8em",
    fontWeight: 400,
    lineHeight: "2em",
  })),
  ImgIcon2: styled("img")(({ theme }) => ({
    width: "25px",
    height: "25px",
  })),
  Credentials: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    textAlign: "right",
    fontSize: "0.7em",
    fontWeight: 900,
  })),
  ExternalLink: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    textAlign: "right",
    fontSize: "0.8em",
    fontWeight: 500,
  })),
};

export default style;
