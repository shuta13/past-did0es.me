import "../assets/style/global.scss";
import Head from "next/head";
import Main from "../components/partials/Home/Main";
import Loading from "../components/common/Loading";
import { Menu } from "../components/molecules/Menu";
import { Header } from "../components/molecules/Header";

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
      <Main />
      {/* <Header /> */}
      <Menu />
      <Component {...pageProps} />
      <Loading />
    </>
  );
};

export default Did0esMe;
