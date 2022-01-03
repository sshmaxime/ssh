import { styled } from "@mui/material/styles";

const style = {
  Root: styled("div")(({ theme }) => ({
    ":hover": {
      cursor: "pointer",
    },
  })),
};

export default style;
