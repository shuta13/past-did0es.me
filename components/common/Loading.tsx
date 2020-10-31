import "./Loading.scss";
import React, { useState } from "react";

import LoadingCanvas from "../partials/Loading/LoadingCanvas";

const Loading: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onDomLoaded = () => {
    window.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    });
  };
  return (
    <div className={isLoaded ? "LoadingLoaded" : "Loading"} ref={onDomLoaded}>
      <div className={isLoaded ? "LoadingImageLoaded" : "LoadingImage"}>
        <LoadingCanvas setIsLoaded={setIsLoaded} />
      </div>
    </div>
  );
};

export default Loading;
