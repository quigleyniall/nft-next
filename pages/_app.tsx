import { SessionProvider } from "next-auth/react";
import { CustomThemeProvider } from "../context/theme";
import { ErrorsProvider } from "@/context/errors";

export default function RootLayout({ Component, pageProps }) {
  return (
    <ErrorsProvider>
      <SessionProvider>
        <CustomThemeProvider>
          {<Component {...pageProps} />}
        </CustomThemeProvider>
      </SessionProvider>
    </ErrorsProvider>
  );
}
