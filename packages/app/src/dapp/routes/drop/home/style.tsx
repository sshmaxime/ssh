import { styled } from "@mui/material/styles";

import { Grid, Typography } from "@mui/material";
import { url } from "inspector";
import ImgWave from "@/_utils/assets/images/wave.png";

const headerHeight = "100px";
const footerHeight = "25px";

const style = {
  Root: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level3,
    width: "100%",
    height: `calc(100vh - ${headerHeight})`,
    paddingTop: headerHeight,
  })),

  DropItem: styled("div")(({ theme }) => ({
    height: "65vh",
    width: "200px",
    padding: "2.5px",
    color: "white",
  })),
};

export default style;
