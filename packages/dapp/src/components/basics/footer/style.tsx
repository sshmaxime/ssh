import { styled } from "@mui/material/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  SwipeableDrawer,
} from "@mui/material";

const style = {
  Root: styled("div")(({ theme }) => ({
    ...theme.basicBreakpoints(theme),

    padding: "50px",
    backgroundColor: theme.backgroundColor.secondary,
  })),
};

export default style;
