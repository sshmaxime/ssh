import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    backgroundColor: {
      primary: string;
      secondary: string;
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
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    backgroundColor: {
      primary: string;
      secondary: string;
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
  }
}

export const theme = createTheme({
  backgroundColor: {
    primary: "#f9f9fb",
    secondary: "#ffffff",
  },

  fontFamily: {
    primary: "montserrat",
    secondary: "sourcecode",
  },

  cards: {
    primary: {
      boxShadow: "5px 5px 5px #bebebe, -1px -1px 1px #fff",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "25px",
    },
  },
});
