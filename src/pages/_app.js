import Head from "next/head";
import GlobalStyles from "../styles/global";
import { ParallaxProvider } from 'react-scroll-parallax'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Sukha Tents </title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Defi Automation Platform. Interact with DeFi in a simpler,
          safer way through Smart Vaults"
        />
      </Head>
      <ParallaxProvider>
      <GlobalStyles />
      <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
};

export default MyApp;
