import Head from "next/head";
import GlobalStyles from "../styles/global";
import { ParallaxProvider } from "react-scroll-parallax";
import {
  Bebas_Neue,
  Barlow_Condensed,
  Barlow_Semi_Condensed,
} from "next/font/google";

const bebasneue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebasneue",
});

const barlowcondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlowcondensed",
});

const barlowsemicondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlowsemicondensed",
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Sukha Tents </title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Alquiler de carpas para eventos" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ParallaxProvider>
        <GlobalStyles />
        <main
          className={`${bebasneue.variable} ${barlowcondensed.variable} ${barlowsemicondensed.variable} font-sans`}
        >
          <Component {...pageProps} />
        </main>
      </ParallaxProvider>
    </>
  );
};

export default MyApp;
