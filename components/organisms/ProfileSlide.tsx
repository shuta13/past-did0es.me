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
            text="Shuta HIRAI"
            fontSize={3}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="Web Developer, Designer"
            fontSize={3}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="Student @ Ritsumeikan Univ"
            fontSize={3}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="FrontEnd Engineer @ Relie, inc"
            fontSize={3}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="FrontEnd Engineer・Designer @ AkinaiOne, inc"
            fontSize={3}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="FrontEnd Engineer・Designer @ ElevenBack LLC."
            fontSize={3}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="Web Developer @ tambourine.inc"
            fontSize={3}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="Ex. FrontEnd Engineer @ Tech Design, inc"
            fontSize={3}
          />
        </div>
      </div>
    </div>
  );
};
