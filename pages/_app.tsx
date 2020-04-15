import "../assets/style/global.scss";
import Header from "../components/common/Header";
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
        <title>APOSTRO</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Cormorant+Garamond&family=Abel&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default Did0esMe;
