import "../assets/style/global.scss";
import React, { useState } from "react";
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
  const [isHeaderClicked, setIsHeaderClicked] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  return (
    <>
      <Head>
        <title>did0es.me</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Cormorant+Garamond&family=Poiret+One&family=Abel&?family=Ubuntu:wght@500&family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main />
      <div className={isHeaderClicked || isMenuClicked ? "FadeOut" : "FadeIn"}>
        <Component {...pageProps} />
      </div>
      <Header setIsHeaderClicked={setIsHeaderClicked} />
      <Menu setIsMenuClicked={setIsMenuClicked} />
      <Loading />
    </>
  );
};

export default Did0esMe;
