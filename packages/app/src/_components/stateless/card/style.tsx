import { styled } from "@mui/material/styles";

const style = {
  Root: styled("div")(({ theme }) => ({})),
  Card: styled("div")(({ theme }) => ({
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "5px 5px 5px #bebebe, -10px -10px 0px #ffffff",
  })),
};

export default style;
