import React, { useState, useEffect } from "react";
import Router from "next/router";

import "./Loading.scss";

const Loading: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("load", () => {
      setIsLoaded(true);
      document.body.style.overflow = "scroll";
    });
  }, []);
  Router.events.on("routeChangeComplete", () => {
    console.log(isLoaded);
    setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflow = "scroll";
    }, 3000);
  });
  return (
    <div className={isLoaded ? "LoadingWrapLoaded" : "LoadingWrap"}>
      {/* now loading */}
    </div>
  );
};

export default Loading;
