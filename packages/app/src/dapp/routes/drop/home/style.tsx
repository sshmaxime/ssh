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
      position: "relative",
      flex: $onHover ? 7 : 1,
      backgroundPosition: "10% 30%",
      imageRendering: "pixelated",
      WebkitPrintColorAdjust: "exact",
      width: "100%",
      backgroundImage: $onHover ? `url(${color})` : "",
      backgroundColor: $onHover ? "" : "black",
      transition: "flex 0.8s ease",
      objectFit: "none",
      filter: "grayscale(10%)",
      // backgroundSize: "cover",
      objectPosition: "50% 50%",
      cursor: !disabled ? "pointer" : "auto",
    })
  ),
  GalleryItemTitle: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    fontSize: "2.5em",
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    boxSizing: "border-box",
    writingMode: "vertical-rl",
    transform: "scale(-1)",
    backgroundColor: "black",
    padding: "35px",
    color: "white",
  })),
};

export default style;
