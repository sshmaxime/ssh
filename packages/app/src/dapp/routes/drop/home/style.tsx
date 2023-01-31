import { styled } from "@mui/material/styles";

import { Grid, Typography } from "@mui/material";
import { url } from "inspector";
import ImgWave from "@/_utils/assets/images/wave.png";

const headerHeight = "100px";
const footerHeight = "25px";

const style = {
  Root: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level3,
    height: `100vh`,
  })),

  DropItem: styled("div")(({ theme }) => ({
    height: "65vh",
    width: "200px",
    padding: "2.5px",
    color: "white",
  })),
  GalleryWrapContainer: styled("div")(({ theme }) => ({
    height: "50%",
    width: "50%",
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
        filter: "grayscale(50%)",
        top: 0,
        left: 0,
        objectPosition: "50% 50%",
        backgroundPosition: "10% 30%",
        objectFit: "none",
        width: "100%",
        height: "100%",
        imageRendering: "pixelated",
        WebkitPrintColorAdjust: "exact",
      },
      position: "relative",
      flex: $onHover ? 7 : 1,
      width: "100%",
      backgroundColor: $onHover ? "" : "black",
      transition: "flex 0.8s ease",
      cursor: !disabled ? "pointer" : "auto",
    })
  ),
  GalleryItemContainer: styled("div")(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "50px",
    paddingTop: "15px",
    paddingBottom: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
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
  ContainerExplore: styled("div")(({ theme }) => ({
    position: "absolute",
    left: "calc(50% + 25px)",
    top: "50%",
    transform: "translate(-50%,-50%)",
  })),
};

export default style;
