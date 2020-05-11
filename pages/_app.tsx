import "../assets/style/global.scss";
// import Header from "../components/common/Header";
import Head from "next/head";
import Loading from "../components/common/Loading";

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
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Cormorant+Garamond&family=Poiret+One&family=Abel&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Header /> */}
      <Component {...pageProps} />
      <Loading />
    </>
  );
};

export default Did0esMe;
