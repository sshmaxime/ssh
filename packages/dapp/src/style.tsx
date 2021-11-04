import { styled } from "@mui/material/styles";

const style = {
  // Root breakpoints should be similar to navbar -> AppBar
  Root: styled("div")(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "18vw",
      paddingRight: "18vw",
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "15vw",
      paddingRight: "15vw",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "10vw",
      paddingRight: "10vw",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "5vw",
      paddingRight: "5vw",
    },
  })),
};

export default style;
