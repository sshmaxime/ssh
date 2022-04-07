import { styled } from "@mui/material/styles";

const style = {
  Root: styled("div")<{ secondary?: boolean; small?: boolean }>(
    ({ theme, secondary, small }) => ({
      textAlign: "center",
      height: "20px",
      fontSize: small ? "0.5em" : "0.7em",
      backgroundColor: !secondary
        ? theme.backgroundColor.primary
        : theme.backgroundColor.secondary,
      color: "black",
      borderRadius: "20px",
      paddingLeft: "20px",
      paddingRight: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "montserrat",
      fontWeight: 600,
      boxShadow: "1.5px 1.5px 0px #2AFE00",
    })
  ),
};

export default style;
