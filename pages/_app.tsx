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
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default Did0esMe;
