import Head from "next/head";
import { Router } from "next/router";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "context/Auth";
import { Navbar } from "components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import nProgress from "nprogress";
import "styles/globals.css";
import "nprogress/nprogress.css";
import { MainThemeProvider } from "styles";
import type { AppProps } from "next/app";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Typeracer </title>
        <meta name='description' content='typeracer online game' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      </Head>

      <QueryClientProvider client={client}>
        <AuthProvider>
          <MainThemeProvider>
            <Navbar />
            <AnimatePresence mode='wait'>
              <Component {...pageProps} />
            </AnimatePresence>
          </MainThemeProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
