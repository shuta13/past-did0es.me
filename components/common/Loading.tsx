import styles from "./Loading.module.scss";
import React, { useEffect, useRef, useState } from "react";

import LoadingCanvas from "../partials/Loading/LoadingCanvas";

const Loading: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isShowLoading, setIsShowLoading] = useState(true);
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    isLoaded &&
      setTimeout(() => {
        setIsShowLoading(false);
      }, 2000);
  }, [isLoaded]);

  return (
    <div
      className={isLoaded ? styles.overlay_loaded : styles.overlay}
      ref={mountRef}
    >
      <div className={isLoaded ? styles.image_loaded : styles.image}>
        {isShowLoading && <LoadingCanvas setIsLoaded={setIsLoaded} />}
      </div>
    </div>
  );
};

export default Loading;
