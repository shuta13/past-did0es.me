import "../assets/style/global.scss";
import React, { useState } from "react";
import Head from "next/head";
import Loading from "../components/common/Loading";
import { Menu } from "../components/molecules/Menu";
import { Header } from "../components/molecules/Header";
import { AppProps } from "next/app";

const Did0esMe = ({ Component, pageProps }: AppProps) => {
  const [isHeaderClicked, setIsHeaderClicked] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <Head>
        <title>did0es.me</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Cormorant+Garamond&family=Poiret+One&family=Abel&?family=Ubuntu:wght@500&family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className={
          isHeaderClicked || isMenuClicked || isClicked
            ? "FadeOutToLeft"
            : "FadeInToRight"
        }
      >
        <Component
          {...pageProps}
          isHeaderClicked={isHeaderClicked}
          isMenuClicked={isMenuClicked}
          setIsClicked={setIsClicked}
        />
      </div>
      <Header
        isClicked={isClicked}
        isHeaderClicked={isHeaderClicked}
        isMenuClicked={isMenuClicked}
        setIsHeaderClicked={setIsHeaderClicked}
      />
      <Menu
        isClicked={isClicked}
        isHeaderClicked={isHeaderClicked}
        isMenuClicked={isMenuClicked}
        setIsMenuClicked={setIsMenuClicked}
      />
      <Loading />
    </>
  );
};

export default Did0esMe;
