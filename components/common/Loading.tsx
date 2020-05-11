import "./Loading.scss";
import React, { useState, useEffect } from "react";
import Router from "next/router";

import AppLoading from "../partials/Loading/AppLoading";

const Loading: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const startOnLoadAnimation = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        setIsLoaded(true);
        resolve();
      }, 2000);
    });
  };

  const checkIsFinished = () => {
    return new Promise(resolve => {
      if (!isFinished) {
        setTimeout(() => {
          setIsLoaded(true);
          resolve();
        }, 5000);
      } else {
        resolve();
      }
    });
  };

  const onDomLoaded = () => {
    window.addEventListener("load", () => {
      startOnLoadAnimation().then(() => setIsFinished(true));
    });
    checkIsFinished();
  };
  Router.events.on("routeChangeComplete", () => {
    startOnLoadAnimation().then(() => setIsFinished(true));
  });

  return (
    <div className={isLoaded ? "LoadingLoaded" : "Loading"} ref={onDomLoaded}>
      <div className={isLoaded ? "LoadingImageLoaded" : "LoadingImage"}>
        <AppLoading />
      </div>
    </div>
  );
};

export default Loading;
