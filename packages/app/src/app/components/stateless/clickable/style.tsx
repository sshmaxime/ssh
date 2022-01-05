import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const style = {
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
