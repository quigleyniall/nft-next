import font from "./font/font";
import sidebar from "./sidebar/sidebar";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      contrastText: "#fff",
      dark: "#22a176",
      light: "#11B981",
      main: "#11B981",
    },
    secondary: {
      contrastText: "#fff",
      dark: "#7b1fa2",
      light: "#ba68c8",
      main: "#9c27b0",
    },
    ...sidebar(mode).palette,
    background: {
      ...(mode === "light"
        ? {
            default: "#F4F5FA",
            paper: "#FFFF",
            page: "#F4F5FA",
          }
        : {
            default: "#161C24",
            paper: "#233044",
            page: "#161C24",
          }),
    },
    //     text: {
    // disabled: "rgba(255, 255, 255, 0.5)",
    // icon: "rgba(255, 255, 255, 0.5)",
    // primary: "#fff",
    // secondary: "rgba(255, 255, 255, 0.7)",
    //     },
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  components: {},
  typography: {
    fontFamily: "Inter",
    ...font(mode),
  },
});

export default getDesignTokens;
