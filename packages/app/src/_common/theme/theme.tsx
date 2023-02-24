import { createTheme, Theme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme extends MyTheme {}
  // allow configuration using `createTheme`
  interface ThemeOptions extends MyTheme {}
}

type MyTheme = typeof themeOpts;

const themeBasics = {
  backgroundColor: {
    primary: "#f9f9fb",
    secondary: "#f1f1f5",
    tertiary: "#cbcbdc",
    darker: "#8B8BAD",
  },

  fontFamily: {
    primary: "montserrat",
    secondary: "sourcecode",
    tertiary: "futura",
  },
};

const themeOpts = {
  ...themeBasics,

  header: {
    height: "100px",
  },

  components: {
    MuiGrid: {
      styleOverrides: {
        container: {},
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: "futura",
          fontSize: "11.5px",
          letterSpacing: "0.15px",
          lineHeight: "14.5px",
          fontWeight: 400,
        },
      },
    },
  },

  cards: {
    primary: {
      boxShadow: "5px 5px 5px #bebebe, -1px -1px 1px #fff",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "25px",
    },
    secondary: {
      boxShadow: "5px 5px 5px #bebebe, -1px -1px 1px #fff",
      padding: "20px",
      backgroundColor: "#f9f9fb",
      borderRadius: "25px",
    },
  },

  myTypography: {
    huge: {
      fontFamily: themeBasics.fontFamily.tertiary,
      fontWeight: 800,
      fontSize: "14em",
      lineHeight: "0.9em",
    },
    big: {
      fontFamily: themeBasics.fontFamily.tertiary,
      fontWeight: 800,
      fontSize: "8.5em",
      lineHeight: "0.9em",
    },
    normalBig: {
      fontFamily: themeBasics.fontFamily.tertiary,
      fontWeight: 800,
      fontSize: "3.1em",
    },
    normalBold: {
      fontFamily: themeBasics.fontFamily.tertiary,
      fontWeight: 800,
      fontSize: "1.1em",
      lineHeight: "0.9em",
    },
    normal: {
      fontFamily: themeBasics.fontFamily.primary,
      fontWeight: 500,
      fontSize: "0.95em",
      lineHeight: "1.1em",
    },
  },

  button: {
    cursor: "pointer",
  },

  titles: {
    primary: {
      fontFamily: themeBasics.fontFamily.secondary,
      fontSize: "17.5px",
      fontWeight: 700,
      letterSpacing: "-1.15px",
    },
    secondary: {
      fontFamily: themeBasics.fontFamily.secondary,
      fontSize: "12.5px",
      letterSpacing: "-0.5px",
      fontWeight: 600,
    },
  },

  myBreakpoints: (themeObj: Theme) => {
    return {
      level0: {
        [themeObj.breakpoints.up("lg")]: {
          paddingLeft: "22.5vw",
          paddingRight: "22.5vw",
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
          paddingLeft: "12vw",
          paddingRight: "12vw",
        },
        [themeObj.breakpoints.down("lg")]: {
          paddingLeft: "10vw",
          paddingRight: "10vw",
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
      level3: {
        [themeObj.breakpoints.up("lg")]: {
          paddingLeft: "1.5vw",
          paddingRight: "1.5vw",
        },
      },
      level4: {
        [themeObj.breakpoints.up("lg")]: {
          paddingLeft: "30vw",
          paddingRight: "30vw",
        },
      },
    };
  },
};

export const theme = createTheme(themeOpts);
