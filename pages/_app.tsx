import "../assets/style/global.scss";
import Head from "next/head";

const Did0esMe = ({
  Component,
  pageProps
}: {
  Component: any;
  pageProps: any;
}) => {
  return (
    <>
      <Head>
        <title>did0es.me</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Cormorant+Garamond&family=Poiret+One&family=Abel&?family=Ubuntu:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Did0esMe;
