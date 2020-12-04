import styles from "./ProfileSlide.module.scss";
import React, { useEffect, useState } from "react";
import { sleep } from "../molecules/Menu";
import { TextAnimation } from "../molecules/TextAnimation";

export const ProfileSlide: React.FC<{ isLoaded: boolean }> = props => {
  const { isLoaded } = props;
  const [isMoveOverlay, setIsMoveOverlay] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(false);

  useEffect(() => {
    if (isLoaded && isInitialLoad) {
      sleep(1200).then(() => {
        setIsMoveOverlay(true);
      });
    } else if (isLoaded) {
      sleep(200).then(() => {
        setIsMoveOverlay(true);
      });
    }
  }, [isLoaded]);

  useEffect(() => {
    setIsInitialLoad(true);
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        {/* <div className="ProfileSlideContent" style={routeChangedStyle}> */}
        {/* <img
          className={styles.icon}
          src={require("../../public/icon.jpg")}
          alt="icon"
        /> */}
        <div className={styles.text_wrap}>
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="Shuta HIRAI,"
            fontSize={12}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="AKA did0es"
            fontSize={8}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="Software Engineer(Web, iOS) & UI/UX Designer."
            fontSize={4}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="I Love React, WebGL, TypeScript."
            fontSize={4}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="This project includes my works, work histories."
            fontSize={4}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="Welcome to contact me."
            fontSize={4}
          />
        </div>
      </div>
    </div>
  );
};
