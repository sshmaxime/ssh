import { styled } from "@mui/material/styles";

type rootProps = {
  color: string;
};

const style = {
  Root: styled("div")<rootProps>(({ theme, color }) => ({
    textAlign: "center",
    height: "20px",
    fontSize: "0.7em",
    backgroundColor: color,
    borderRadius: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "montserrat",
    fontWeight: 600,
  })),
};

export default style;
