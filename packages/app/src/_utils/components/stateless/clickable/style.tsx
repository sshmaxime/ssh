import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const style = {
  RealRoot: styled("div")<{ activated?: boolean }>(({ theme, activated }) => ({
    transition: "all .2s ease-in-out",
    opacity: activated ? "" : "25%",
    ":hover": {
      transform: activated ? "scale(1.02)" : "",
      cursor: activated ? "pointer" : "",
    },
  })),
  Root: styled("div")(({ theme }) => ({})),
  RootLink: styled(Link)(({ theme }) => ({
    color: "black",
    textDecoration: "none",
  })),
  RootHref: styled("a")(({ theme }) => ({
    color: "black",
    textDecoration: "none",
  })),
};

export default style;
