import { styled } from "@mui/material/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  Grid,
  SwipeableDrawer,
} from "@mui/material";

import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";

const style = {
  Root: styled("div")(({ theme }) => ({
    ...theme.myBreakpoints(theme).level1,
    paddingTop: "10vh",
    paddingBottom: "10vh",
  })),
  ImgTeam: styled("img")(({ theme }) => ({
    width: "100%",
    borderRadius: "2.5px",
  })),
  TeamName: styled(Typography)<{ bgColor: string }>(({ theme, bgColor }) => ({
    ...theme.titles(theme).secondary,
    color: "white",
    textShadow: "2.5px 2.5px 1px black, -1px -1px 1px grey",
    borderRadius: "10px",
    padding: "1px",
    paddingLeft: "7.5px",
    paddingRight: "7.5px",
    backgroundColor: bgColor,
  })),
  SubTextSubtitle: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    letterSpacing: "2px",
    marginBottom: "6.5vh",
    color: "#2AFE00",
    textShadow: "2px 2px 1px black, -1px -1px 1px black",
  })),
  ProjectPlanGrid: styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })),
  TeamNameTitle: styled(Typography)(({ theme }) => ({
    ...theme.titles(theme).secondary,
    color: "black",
    paddingLeft: "5px",
    paddingRight: "5px",
    fontSize: "0.75em",
  })),
  TextAbout: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    letterSpacing: "0.05em",
    fontSize: "1em",
    fontWeight: 300,
    paddingBottom: "2.5vh",
  })),
  TextSubtitle2: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "3em",
    textShadow: `-2px 2px 2px white,
      -3px 3px 0px #303049,
      -5px 5px 4px ${theme.backgroundColor.tertiary}`,
  })),
  TextSubtitle3: styled(Typography)(
    ({ theme }) => `
    font-family: ${theme.fontFamily.primary},
    font-weight: 800,
    color: "black",
    font-size: "1.75em",
    text-shadow: -2px 2px 2px white,
      -3px 3px 0px #303049,
      -5px 5px 4px ${theme.backgroundColor.tertiary},
  `
  ),

  Tab: styled(TabUnstyled)(
    ({ theme }) => `
    transition: all 0.5s ease; 
    cursor: pointer;
    margin-right: 25px;
    font-family: ${theme.fontFamily.primary};
    font-weight: 800;
    background: none;
    color: black;
    font-size: 1.25em;
    border: none;
    text-shadow: -2px 2px 2px white,
      -3px 3px 0px #303049,
      -5px 5px 4px ${theme.backgroundColor.tertiary};
      opacity: 25%;

    &:hover {
      opacity: 50%;
    }

    &.${buttonUnstyledClasses.focusVisible} {
      color: #fff;
      outline: none;
    }

    &.${tabUnstyledClasses.selected} {
      color: black;
      opacity: 100%;
      font-size: 1.75em;
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `
  ),

  TabPanel: styled(TabPanelUnstyled)``,

  TabsList: styled(TabsListUnstyled)`
    margin-bottom: 25px;
    height: 50px;
    display: flex;
    align-items: center !important;
  `,
};

export default style;
