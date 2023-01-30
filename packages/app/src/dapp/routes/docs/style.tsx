import { styled } from "@mui/material/styles";

import { Grid, Typography } from "@mui/material";

const headerHeight = "100px";

const style = {
  Root: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level3,
    width: "100%",
    height: `100vh`,
    //
    fontFamily: theme.fontFamily.primary,
    letterSpacing: "-0.25px",
  })),
};

export default style;
