import { GlobalStyles } from "../styles/GlobalStyles";
import type { AppProps } from "next/app";
import { NavigationProvider } from "../context/Navigation";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </NavigationProvider>
    </>
  );
}
