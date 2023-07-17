import React, { useState, useEffect } from "react";
import { StyledEngineProvider, createTheme } from "@mui/material/styles";
import getDesignTokens from "../theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useCookies } from "react-cookie";

export const CustomTheme = React.createContext({
  switchTheme: () => {},
  theme: createTheme(),
  open: "open",
  setOpen: () => {},
});

export const CustomThemeProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies();
  const [mode, setMode] = useState(cookies["theme-mode"] ?? "light");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    if (!cookies["theme-mode"])
      setCookie("theme-mode", cookies["theme-mode"] ?? "light");
    if (!cookies["sidebar"]) setCookie("sidebar", cookies["sidebar"] ?? "open");
  }, []);

  const switchTheme = () => {
    console.log(cookies);
    setMode((m) => (m === "light" ? "dark" : "light"));
    setCookie(
      "theme-mode",
      cookies["theme-mode"] === "light" ? "dark" : "light"
    );
  };

  const setOpen = () => {
    setCookie("sidebar", cookies["sidebar"] === "open" ? "closed" : "open");
  };

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

if (!cookies["sidebar"] || !cookies["theme-mode"] || !hydrated) return;
  return (
    <StyledEngineProvider injectFirst>
      <CustomTheme.Provider
        value={{
          switchTheme,
          theme,
          open: cookies["sidebar"],
          setOpen,
        }}
      >
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CustomTheme.Provider>
    </StyledEngineProvider>
  );
};
