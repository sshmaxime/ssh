import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    basicBreakpoints: Function;
    backgroundColor: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    fontFamily: {
      primary: string;
      secondary: string;
    };
    cards: {
      primary: {
        boxShadow: string;
        padding: string;
        backgroundColor: string;
        borderRadius: string;
      };
    };
    button: {
      cursor: string;
    };
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    basicBreakpoints: Function;

    backgroundColor: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    fontFamily: {
      primary: string;
      secondary: string;
    };
    cards: {
      primary: {
        boxShadow: string;
        padding: string;
        backgroundColor: string;
        borderRadius: string;
      };
    };
    button: {
      cursor: string;
    };
  }
}

export const theme = createTheme({
  backgroundColor: {
    primary: "#f9f9fb",
    secondary: "#ededf3",
    tertiary: "#cbcbdc",
  },

  fontFamily: {
    primary: "montserrat",
    secondary: "helvetica",
  },

  cards: {
    primary: {
      boxShadow: "5px 5px 5px #bebebe, -1px -1px 1px #fff",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "25px",
    },
  },

  button: {
    cursor: "pointer",
  },

  basicBreakpoints: (themeObj: any) => {
    return {
      [themeObj.breakpoints.up("lg")]: {
        paddingLeft: "15vw",
        paddingRight: "15vw",
      },
      [themeObj.breakpoints.down("lg")]: {
        paddingLeft: "12vw",
        paddingRight: "12vw",
      },
      [themeObj.breakpoints.down("md")]: {
        paddingLeft: "8vw",
        paddingRight: "8vw",
      },
      [themeObj.breakpoints.down("sm")]: {
        paddingLeft: "3vw",
        paddingRight: "3vw",
      },
    };
  },
});
