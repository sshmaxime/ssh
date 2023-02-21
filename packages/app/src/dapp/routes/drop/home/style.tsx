import { styled } from "@mui/material/styles";

import { Grid, Typography } from "@mui/material";
import { url } from "inspector";
import ImgWave from "@/common/assets/images/wave.png";

const footerHeight = "25px";
const itemTitleContainerWidth = "75px";

const style = {
  Root: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level3,
    height: `100vh`,
  })),
  RootInner: styled("div")(({ theme }) => ({
    paddingTop: theme.header.height,
    paddingBottom: "25px",
    height: `100%`,
    width: `100%`,
    boxSizing: "border-box",
  })),
  GalleryWrapContainer: styled("div")(({ theme }) => ({
    height: "calc(100%)",
    width: "100%",
  })),
  GalleryWrap: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    gap: "1.5px",
  })),
  GalleryItem: styled("div")<{ color: string; $onHover: boolean; disabled: boolean }>(
    ({ theme, color, $onHover, disabled }) => ({
      "&:before": {
        content: `""`,
        display: "block",
        position: "absolute",
        backgroundImage: $onHover ? `url(${color})` : "",
        backgroundColor: "black",
        filter: "grayscale(75%)",
        top: 0,
        left: 0,
        objectPosition: "10% 10%",
        backgroundPosition: "10% 10%",
        backgroundSize: "cover",
        objectFit: "contain",
        width: "100%",
        height: "100%",
        imageRendering: "pixelated",
        WebkitPrintColorAdjust: "exact",
        borderRadius: "5px",
      },
      position: "relative",
      flex: $onHover ? 7 : 1,
      width: "100%",
      backgroundColor: $onHover ? "" : "black",
      transition: "flex 0.8s ease",
      cursor: !disabled ? ($onHover ? "auto" : "pointer") : "auto",
      borderRadius: "5px",
    })
  ),
  GalleryItemContainer: styled("div")(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: itemTitleContainerWidth,
    paddingTop: "15px",
    paddingBottom: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: "5px",
    backgroundColor: "black",
    // padding: "15px",
    boxSizing: "border-box",
  })),
  GalleryItemTitle: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    fontSize: "2em",
    writingMode: "vertical-rl",
    transform: "scale(-1)",
    color: "white",
    letterSpacing: "0.5px",
  })),
  LiveTitle: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    fontSize: "0.9em",
    writingMode: "vertical-rl",
    transform: "scale(-1)",
    color: "white",
  })),
  ButtonDiscover: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    fontSize: "1em",
    backgroundColor: "white",
    color: "black",
    padding: "10px",
    transition: "all .2s ease-in-out",
    ":hover": {
      cursor: "pointer",
      backgroundColor: "black",
      color: "white",
    },
  })),
  ItemName: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    fontSize: "2.5em",
    backgroundColor: "red",
    color: "white",
    padding: "10px",
  })),
  ContainerExplore: styled("div")<{ isVisible: boolean }>(({ theme, isVisible }) => ({
    position: "absolute",
    left: `calc(50% + calc(${itemTitleContainerWidth} / 2))`,
    top: "50%",
    transform: "translate(-50%,-50%)",
    transition: "all 0.5s ease-in-out",
    opacity: isVisible ? "100%" : "0%",
    scale: isVisible ? "scale(0.5)" : "0%",
  })),
};

export default style;
