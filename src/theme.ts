import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#D64227",
    },
    secondary: {
      main: "#010A15",
      light: "#FBF9F2",
    },
  },
});

export default theme;
