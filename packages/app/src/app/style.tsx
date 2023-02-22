import { styled } from "@mui/material/styles";

import { AppBar, Grid, Typography } from "@mui/material";
import { url } from "inspector";
import ImgWave from "@/common/assets/images/wave.png";

const footerHeight = "25px";
const itemTitleContainerWidth = "75px";

const style = {
  // Navbar
  AppBar: styled(AppBar)(({ theme }) => ({
    ...theme.myBreakpoints(theme).level3,
    height: theme.header.height,
    padding: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    display: "flex",
    justifyContent: "center",
  })),
  OpenApp: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    fontSize: "0.9em",
    letterSpacing: "0.25px",
    padding: "10px",
    paddingLeft: "25px",
    paddingRight: "25px",
    borderRadius: "15px",
    color: "black",
    backgroundColor: theme.backgroundColor.primary,
  })),
  //
  Root: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level3,
  })),
  RootInner: styled("div")(({ theme }) => ({})),
  HomeScreenContainer: styled("div")(({ theme }) => ({
    paddingTop: theme.header.height,
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

  ScreenContainer: styled("div")(({ theme }) => ({
    width: `100%`,
    boxSizing: "border-box",
    paddingBottom: "25px",
  })),
  Screen: styled("div")(({ theme }) => ({
    height: `100%`,
    width: `100%`,
    borderRadius: "5px",
    padding: "25px",
    boxSizing: "border-box",
    backgroundColor: theme.backgroundColor.primary,
  })),

  Title: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.tertiary,
    fontWeight: 900,
    fontSize: "10.5vw",
  })),
  Title2: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.tertiary,
    fontWeight: 900,
    fontSize: "7.5em",
  })),
  SubTitle: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.tertiary,
    fontWeight: 900,
    paddingTop: "25px",
    fontSize: "2.5em",
  })),
  SubTitle2: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.tertiary,
    fontWeight: 900,
    fontSize: "2.5em",
  })),
  SubTitle3: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.tertiary,
    fontWeight: 900,
    fontSize: "7.5em",
  })),
  SubTitle4: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.tertiary,
    fontWeight: 900,
    paddingLeft: "15px",
    paddingRight: "10px",
    fontSize: "0.85em",
  })),
  SubTitle5: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.tertiary,
    fontWeight: 900,
    fontSize: "1em",
  })),
  SubTitleText: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.tertiary,
    fontWeight: 500,
    paddingLeft: "15px",
    paddingRight: "50px",
    // backgroundColor: "red",
  })),
  ContainerExempleDrip: styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: `2.5px 2.5px 2.5px ${theme.backgroundColor.secondary}, -.1px -.1px 1.5px ${theme.backgroundColor.secondary}`,
  })),
  ContainerExempleDripContainer: styled("div")(({ theme }) => ({
    backgroundColor: "white",
    paddingLeft: "5px",
    paddingRight: "5px",
    borderRadius: "5px",
  })),
  GoToApp: styled("div")(({ theme }) => ({
    borderRadius: "5px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "0.7em",
    padding: "5px",
  })),
  ContainerContract: styled("div")(({ theme }) => ({
    // backgroundColor: theme.backgroundColor.primary,
    // padding: "10px",
    borderRadius: "5px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "0.7em",
  })),
  GalleryWrap: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    gap: "1.5px",
  })),
  GalleryItem: styled("div")<{ color: string; $onHover: boolean }>(
    ({ theme, color, $onHover }) => ({
      flex: $onHover ? 7 : 1,
      backgroundPosition: "30% 10%",
      imageRendering: "pixelated",
      WebkitPrintColorAdjust: "exact",
      width: "100%",
      backgroundImage: `url(${color})`,
      transition: "flex 0.8s ease",
      objectFit: "none",
      objectPosition: "30% 10%",
      cursor: $onHover ? "pointer" : "auto",
    })
  ),
  InfoDivItemName: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    fontSize: "0.8em",
    letterSpacing: "1.25px",
    marginBottom: "7.5px",
  })),
  ContainerInfoDiv: styled("div")(({ theme }) => ({
    padding: "10px",
    backgroundColor: theme.backgroundColor.primary,
    borderRadius: "5px",
  })),
  // Footer
  RootFooter: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
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
