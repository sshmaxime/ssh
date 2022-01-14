import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const style = {
  RealRoot: styled("div")<{ hoverEffect?: boolean }>(
    ({ theme, hoverEffect }) => ({
      transition: "all .2s ease-in-out",
      ":hover": {
        opacity: hoverEffect ? "0.9" : "",
        transform: "scale(1.01)",
      },
    })
  ),
  Root: styled("div")(({ theme }) => ({
    ":hover": {
      cursor: "pointer",
    },
  })),
  RootLink: styled(Link)(({ theme }) => ({
    ":hover": {
      cursor: "pointer",
    },
    color: "black",
    textDecoration: "none",
  })),
  RootHref: styled("a")(({ theme }) => ({
    ":hover": {
      cursor: "pointer",
    },
    color: "black",
    textDecoration: "none",
  })),
};

export default style;
