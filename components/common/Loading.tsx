import styles from "./Loading.module.scss";
import React, { useState } from "react";

import LoadingCanvas from "../partials/Loading/LoadingCanvas";

const Loading: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={isLoaded ? styles.overlay_loaded : styles.overlay}>
      <div className={isLoaded ? styles.image_loaded : styles.image}>
        <LoadingCanvas setIsLoaded={setIsLoaded} />
      </div>
    </div>
  );
};

export default Loading;
