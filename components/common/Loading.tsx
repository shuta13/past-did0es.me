import "./Loading.scss";
import React, { useState, useEffect } from "react";
import Router from "next/router";

import AppLoading from "../partials/Loading/AppLoading";

const Loading: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  useEffect(() => {
    const linkEvent = new Event("link");
    // for on load
    const startOnLoadAnimation = () => {
      return new Promise(resolve => {
        setIsLoaded(true);
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
    window.addEventListener("load", () => {
      startOnLoadAnimation().then(() => finishedAnimate());
    });
    Router.events.on("routeChangeStart", () => {
      startOnChangeAnimation().then(() => finishedAnimate());
    });

    // Safari... (; ;)
    const notSupportedAnimation = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          setIsLoaded(true);
          resolve();
        }, 5000);
      });
    };
    notSupportedAnimation().then(() => finishedAnimate());
    return () => {
      window.removeEventListener("link", () => startOnLoadAnimation);
      window.removeEventListener("load", () => startOnLoadAnimation);
      window.removeEventListener(
        "routeChangeStart",
        () => startOnChangeAnimation
      );
    };
  }, []);
  return (
    <div
      className={
        isLoaded
          ? isFinished
            ? "LoadingFinished"
            : "LoadingLoaded"
          : "Loading"
      }
    >
      <div className={isLoaded ? "LoadingImageLoaded" : "LoadingImage"}>
        <AppLoading />
      </div>
    </div>
  );
};

export default Loading;
