import { GlobalStyles } from "../styles/GlobalStyles";
import type { AppProps } from "next/app";
import { NavigationProvider } from "../context/Navigation";
import CustomThemeProvider from "../shared/CustomThemeProvider";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomThemeProvider>
        <NavigationProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </NavigationProvider>
      </CustomThemeProvider>
    </>
  );
}
