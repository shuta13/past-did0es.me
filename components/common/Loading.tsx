import React, { useState, useEffect } from "react";

import "./Loading.scss";

const Loading: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("load", () => {
      setIsLoaded(true);
      document.body.style.overflow = "scroll";
    });
    return window.removeEventListener("load", () => {
      setIsLoaded(false);
    });
  }, []);
  return (
    <div className={isLoaded ? "LoadingWrapLoaded" : "LoadingWrap"}>
      now loading
    </div>
  );
};

export default Loading;
