import "./Loading.scss";
import React, { useState, useEffect } from "react";
import Router from "next/router";

import AppLoadingCube from "../partials/Loading/AppLoadingCube";

const Loading: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  useEffect(() => {
    const linkEvent = new Event("link");
    // for on load
    const startOnLoadAnimation = () => {
      return new Promise(resolve => {
        setIsLoaded(true);
        document.body.style.overflowY = "scroll";
        resolve();
      });
    };
    // delay for webkit...
    const startOnChangeAnimation = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          window.dispatchEvent(linkEvent);
          resolve();
        }, 5000);
      });
    };
    const finishedAnimate = () => {
      setTimeout(() => {
        setIsFinished(true);
      }, 3000);
    };
    window.addEventListener("link", () => {
      startOnLoadAnimation().then(() => finishedAnimate());
    });
    document.body.style.overflow = "hidden";
    // window.addEventListener("load", () => {
    //   startOnLoadAnimation().then(() => finishedAnimate());
    // });
    Router.events.on("routeChangeStart", () => {
      startOnChangeAnimation().then(() => finishedAnimate());
    });

    // Safari... (; ;)
    // const notSupportedAnimation = () => {
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       setIsLoaded(true);
    //       document.body.style.overflowY = "scroll";
    //       resolve();
    //     }, 5000);
    //   });
    // };
    // notSupportedAnimation().then(() => finishedAnimate());
  }, []);
  return (
    <div
      className={
        isLoaded
          ? isFinished
            ? "LoadingWrapFinished"
            : "LoadingWrapLoaded"
          : "LoadingWrap"
      }
    >
      <div className={isLoaded ? "LoadingTextsLoaded" : "LoadingTexts"}>
        <AppLoadingCube text="L" />
        <AppLoadingCube text="O" />
        <AppLoadingCube text="A" />
        <AppLoadingCube text="D" />
        <AppLoadingCube text="I" />
        <AppLoadingCube text="N" />
        <AppLoadingCube text="G" />
      </div>
    </div>
  );
};

export default Loading;
