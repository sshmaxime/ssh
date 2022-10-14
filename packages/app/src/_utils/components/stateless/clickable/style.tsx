import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const style = {
  RealRoot: styled("div")<{ $activated?: boolean; $hoverAnimation?: boolean }>(
    ({ theme, $activated, $hoverAnimation }) => ({
      transition: "all .2s ease-in-out",
      opacity: $activated ? "" : "10%",
      ":hover": {
        transform: $activated && $hoverAnimation ? "scale(1.01)" : "",
        cursor: $activated ? "pointer" : "not-allowed",
      },
    })
  ),
  Root: styled("div")(({ theme }) => ({})),
  RootLink: styled("div")(({ theme }) => ({
    color: "black",
    textDecoration: "none",
  })),
  RootHref: styled("a")(({ theme }) => ({
    color: "black",
    textDecoration: "none",
  })),
};

export default style;
