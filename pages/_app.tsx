import { SessionProvider } from "next-auth/react";
import { CustomThemeProvider } from "../context/theme";
import { ErrorsProvider } from "@/context/errors";
import { SnackbarProvider } from "@/context/snackbar";

export default function RootLayout({ Component, pageProps }) {
  return (
    <ErrorsProvider>
      <SnackbarProvider>
        <SessionProvider>
          <CustomThemeProvider>
            {<Component {...pageProps} />}
          </CustomThemeProvider>
        </SessionProvider>
      </SnackbarProvider>
    </ErrorsProvider>
  );
}
