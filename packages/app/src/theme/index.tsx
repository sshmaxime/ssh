import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    myBreakpoints: (param: Theme) => {
      level0: any;
      level1: any;
      level2: any;
    };
    titles: (param: Theme) => {
      primary: any;
      secondary: any;
    };

    backgroundColor: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    fontFamily: {
      primary: string;
      secondary: string;
      tertiary: string;
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
    myBreakpoints: Function;
    titles: Function;

    backgroundColor: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    fontFamily: {
      primary: string;
      secondary: string;
      tertiary: string;
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
    secondary: "sourcecode",
    tertiary: "sourcesans",
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

  titles: (themeObj: any) => {
    return {
      primary: {
        color: "black",
        fontFamily: themeObj.fontFamily.primary,
        fontSize: "1.75em",
        fontWeight: 900,
      },
      secondary: {
        color: "black",
        fontFamily: themeObj.fontFamily.primary,
        fontSize: "1em",
        letterSpacing: "-0.025em",
        fontWeight: 900,
      },
    };
  },

  myBreakpoints: (themeObj: any) => {
    return {
      level0: {
        [themeObj.breakpoints.up("lg")]: {
          paddingLeft: "25vw",
          paddingRight: "25vw",
        },
        [themeObj.breakpoints.down("lg")]: {
          paddingLeft: "15vw",
          paddingRight: "15vw",
        },
        [themeObj.breakpoints.down("md")]: {
          paddingLeft: "12vw",
          paddingRight: "12vw",
        },
        [themeObj.breakpoints.down("sm")]: {
          paddingLeft: "8vw",
          paddingRight: "8vw",
        },
      },
      level1: {
        [themeObj.breakpoints.up("lg")]: {
          paddingLeft: "17.5vw",
          paddingRight: "17.5vw",
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
      },
      level2: {
        [themeObj.breakpoints.up("lg")]: {
          paddingLeft: "8vw",
          paddingRight: "8vw",
        },
        [themeObj.breakpoints.down("lg")]: {
          paddingLeft: "7vw",
          paddingRight: "7vw",
        },
        [themeObj.breakpoints.down("md")]: {
          paddingLeft: "5vw",
          paddingRight: "5vw",
        },
        [themeObj.breakpoints.down("sm")]: {
          paddingLeft: "2vw",
          paddingRight: "2vw",
        },
      },
    };
  },
});
