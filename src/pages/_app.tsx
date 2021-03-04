import "../shared/styles/global.scss";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Loading from "../components/organisms/Loading";
import { Menu, sleep } from "../components/molecules/Menu";
import { Header } from "../components/molecules/Header";
import { AppProps } from "next/app";
import { Router } from "next/router";
import { BackgroundTexts } from "../components/molecules/BackgroundTexts";

const Did0esMe = ({ Component, pageProps }: AppProps) => {
  const [isRouteChange, setIsRouteChange] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuReset, setIsMenuReset] = useState(false);
  const [isWorksActive, setIsWorksActive] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);

  Router.events.on("routeChangeStart", () => setIsRouteChange(true));
  Router.events.on("routeChangeComplete", () => {
    sleep().then(() => setIsRouteChange(false));
  });

  const resetActiveMenu = () => {
    setIsWorksActive(false);
    setIsContactActive(false);
  };

  return (
    <>
      <Head>
        <title>did0es.me</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Karla&family=Abel&family=Libre+Caslon+Display&family=Libre+Barcode+128&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <div className={isRouteChange ? "FadeOut" : "FadeIn"}>
        <BackgroundTexts
          svg={
            isWorksActive
              ? require("../public/svg/works.svg")
              : isContactActive
              ? require("../public/svg/contact.svg")
              : require("../public/svg/home.svg")
          }
          isRouteChange={isRouteChange}
        />
      </div> */}
      <div className={isRouteChange ? "FadeOut" : "FadeIn"}>
        {!isRouteChange && (
          <Component
            {...pageProps}
            isRouteChange={isRouteChange}
            isLoaded={isLoaded}
            setIsMenuReset={setIsMenuReset}
            setIsWorksActive={setIsWorksActive}
            setIsContactActive={setIsContactActive}
          />
        )}
      </div>
      <Header isRouteChange={isRouteChange} resetActiveMenu={resetActiveMenu} />
      <Menu
        isRouteChange={isRouteChange}
        isWorksActive={isWorksActive}
        isContactActive={isContactActive}
      />
      <Loading isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
    </>
  );
};

export default Did0esMe;
