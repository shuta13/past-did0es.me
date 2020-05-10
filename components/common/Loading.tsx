import "./Loading.scss";
import React, { useState, useEffect } from "react";
// import Router from "next/router";

import AppLoading from "../partials/Loading/AppLoading";

const Loading: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  // const [isFinished, setIsFinished] = useState(false);
  // for on load
  // const startOnLoadAnimation = () => {
  //   return new Promise(resolve => {
  //     setIsLoaded(true);
  //     resolve();
  //   });
  // };
  // // delay for webkit...
  // const startOnChangeAnimation = (e: Event) => {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       window.dispatchEvent(e);
  //       resolve();
  //     }, 5000);
  //   });
  // };
  // const finishedAnimate = () => {
  //   setTimeout(() => {
  //     setIsFinished(true);
  //   }, 3000);
  // };
  // Safari... (; ;)
  const notSupportedAnimation = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        setIsLoaded(true);
        resolve();
      }, 5000);
    });
  };
  const onDomLoaded = () => {
    notSupportedAnimation();
    // const linkEvent = new Event("link");
    // window.addEventListener("link", () => {
    //   startOnLoadAnimation().then(() => finishedAnimate());
    // });
    // window.addEventListener("load", () => {
    //   startOnLoadAnimation().then(() => finishedAnimate());
    // });
    // Router.events.on("routeChangeStart", () => {
    //   startOnChangeAnimation(linkEvent).then(() => finishedAnimate());
    // });
  };
  // useEffect(() => {
  //   return () => {
  //     window.removeEventListener("link", () => startOnLoadAnimation);
  //     window.removeEventListener("load", () => startOnLoadAnimation);
  //     window.removeEventListener(
  //       "routeChangeStart",
  //       () => startOnChangeAnimation
  //     );
  //   };
  // });
  return (
    <div className={isLoaded ? "LoadingLoaded" : "Loading"} ref={onDomLoaded}>
      <div className={isLoaded ? "LoadingImageLoaded" : "LoadingImage"}>
        <AppLoading />
      </div>
    </div>
  );
};

export default Loading;
