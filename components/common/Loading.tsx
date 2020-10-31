import "./Loading.scss";
import React, { useState, useEffect } from "react";

import LoadingCanvas from "../partials/Loading/LoadingCanvas";

const Loading: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const checkIsFinished = () => {
    return new Promise(resolve => {
      if (!isFinished) {
        setTimeout(() => {
          setIsLoaded(true);
          resolve();
        }, 3000);
      } else {
        resolve();
      }
    });
  };

  // const handleRouteChange = () => {
  //   setIsLoaded(true)
  //   setIsFinished(true)
  // }

  const onDomLoaded = () => {
    window.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        setIsLoaded(true);
        setIsFinished(true);
      }, 1000);
    });
    checkIsFinished();
  };
  // useEffect(() => {
  //   Router.events.on("routeChangeComplete", handleRouteChange)
  //   return () => {
  //     Router.events.on("routeChangeComplete", handleRouteChange)
  //   }
  // }, [])

  return (
    <div className={isLoaded ? "LoadingLoaded" : "Loading"} ref={onDomLoaded}>
      <div className={isLoaded ? "LoadingImageLoaded" : "LoadingImage"}>
        <LoadingCanvas />
      </div>
    </div>
  );
};

export default Loading;
