import styles from "./ProfileSlide.module.scss";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { sleep } from "../molecules/Menu";

const TextAnimation: React.FC<{
  isMoveOverlay: boolean;
  text: string;
}> = props => {
  const { isMoveOverlay, text } = props;
  return (
    <div className={styles.text_animation}>
      {/* <div className={isMoveOverlay ? styles.overlay_moved : styles.overlay} /> */}
      <div className={isMoveOverlay ? styles.text_moved : styles.text}>
        {text}
      </div>
    </div>
  );
};

export const ProfileSlide: React.FC<{ isLoaded: boolean }> = props => {
  const { isLoaded } = props;
  const [isMoveOverlay, setIsMoveOverlay] = useState(false);

  useEffect(() => {
    isLoaded &&
      sleep(200).then(() => {
        setIsMoveOverlay(true);
      });
  }, [isLoaded]);

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
          <TextAnimation isMoveOverlay={isMoveOverlay} text="Shuta HIRAI" />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="Web Developer, Designer"
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="Student @ Ritsumeikan Univ"
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="FrontEnd Engineer @ Relie, inc"
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="FrontEnd Engineer・Designer @ AkinaiOne, inc"
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="FrontEnd Engineer・Designer @ ElevenBack LLC."
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="Web Developer @ tambourine.inc"
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="Ex. FrontEnd Engineer @ Tech Design, inc"
          />
        </div>
      </div>
    </div>
  );
};
