import React, { useState, useEffect } from "react";
import Router from "next/router";

import "./Loading.scss";

const Loading: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const linkEvent = new Event("link");
    window.addEventListener("link", () => {
      setIsLoaded(true);
      document.body.style.overflowY = "scroll";
    });
    document.body.style.overflow = "hidden";
    window.addEventListener("load", () => {
      setIsLoaded(true);
      document.body.style.overflowY = "scroll";
    });
    Router.events.on("routeChangeStart", () => {
      // for webkit...
      const startAnimation = () => {
        return new Promise(resolve => {
          setTimeout(() => {
            window.dispatchEvent(linkEvent);
            resolve();
          }, 5000);
        });
      };
      startAnimation().then(() => {
        setIsLoaded(false);
      });
    });

    // Safari... (; ;)
    setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflow = "hidden";
      document.body.style.overflowY = "scroll";
    }, 5000);
  }, []);
  return (
    <div className={isLoaded ? "LoadingWrapLoaded" : "LoadingWrap"}>
      <div className={isLoaded ? "LoadingTextsLoaded" : "LoadingTexts"}>
        LOADING
      </div>
    </div>
  );
};

export default Loading;
