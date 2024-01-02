import { SessionProvider } from "next-auth/react";
import { CustomThemeProvider } from "../context/theme";


export default function RootLayout({ Component, pageProps }) {
 
  return (
    // <SessionProvider>
      <CustomThemeProvider>
          {<Component {...pageProps} />}
      </CustomThemeProvider>
    // </SessionProvider>
  );
}

