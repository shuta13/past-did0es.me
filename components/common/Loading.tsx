import "./Loading.scss";
import React, { useState } from "react";

import LoadingCanvas from "../partials/Loading/LoadingCanvas";

const Loading: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={isLoaded ? "LoadingLoaded" : "Loading"}>
      <div className={isLoaded ? "LoadingImageLoaded" : "LoadingImage"}>
        <LoadingCanvas setIsLoaded={setIsLoaded} />
      </div>
    </div>
  );
};

export default Loading;
