import { styled } from "@mui/material/styles";

type rootProps = {
  color: string;
};

const style = {
  Root: styled("div")<rootProps>(({ theme, color }) => ({
    textAlign: "center",
    height: "30px",
    backgroundColor: color,
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "montserrat",
    fontWeight: 600,
  })),
};

export default style;
