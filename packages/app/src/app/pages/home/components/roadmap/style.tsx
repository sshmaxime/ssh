import { styled } from "@mui/material/styles";

import { Typography } from "@mui/material";

const style = {
  Root: styled("div")(({ theme }) => ({})),
  RoadMapItemStep: styled(Typography)(({ theme }) => ({
    color: "black",
    padding: "5px 10px 5px 10px",
    borderRadius: "10px",
    display: "inline-block",
    paddingLeft: "10px",
    paddingRight: "10px",
    fontFamily: "montserrat",
    fontWeight: 700,
    fontSize: "0.8em",
  })),
  RoadMapItem: styled("div")(({ theme }) => ({
    padding: "10px",
    borderRadius: "5px",
    boxShadow: `25px -25px 2.5px ${theme.backgroundColor.primary}`,
    backgroundColor: `white`,
    marginLeft: "10px",
  })),
  RoadMapItemTitle: styled(Typography)(({ theme }) => ({
    paddingLeft: "10px",
    textShadow: "2.5px 2.5px 0px #2AFE00",
    paddingRight: "10px",
    fontStyle: "italic",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    fontSize: "1.1em",
    color: "black",
    marginTop: "5px",
    marginBottom: "10px",
  })),
  RoadMapItemContent: styled(Typography)(({ theme }) => ({
    paddingLeft: "10px",
    paddingRight: "10px",
    fontFamily: "montserrat",
    fontWeight: 300,
    fontSize: "1em",
    color: "black",
    opacity: "75%",
  })),
  RoadMapItem2: styled("div")(({ theme }) => ({
    padding: "10px",
    borderRadius: "5px",
    boxShadow: `-25px -25px 2.5px ${theme.backgroundColor.primary}`,
    backgroundColor: `white`,
    textAlign: "start",
    marginRight: "10px",
  })),
};

export default style;
