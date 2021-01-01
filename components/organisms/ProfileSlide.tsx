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
            text="SHUTA"
            fontSize={12}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="HIRAI"
            fontSize={12}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="DID0ES"
            fontSize={12}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="FrontEnd Engineer, UI/UX Designer."
            fontSize={4}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="I Love React, WebGL, TypeScript."
            fontSize={4}
          />
          {/* <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="This project includes my works, work histories."
            fontSize={4}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="Welcome to contact me."
            fontSize={4}
          /> */}
        </div>
      </div>
      <div className={styles.edge_text_bottom_right}>
        <TextAnimation
          isMoveOverlay={isMoveOverlay}
          text="MY WORKS & WORK HISTORIES"
          fontSize={1.2}
          textAlign="right"
          fontStyle="italic"
        />
        <TextAnimation
          isMoveOverlay={isMoveOverlay}
          text="2019 - 2020"
          fontSize={1.2}
          textAlign="right"
          fontStyle="italic"
        />
      </div>
      <div className={styles.edge_text_left}>
        <TextAnimation
          isMoveOverlay={isMoveOverlay}
          text="#PORTFOLIO / #WEBSITE"
          fontSize={1.2}
        />
      </div>
      <div
        className={
          isMoveOverlay
            ? styles.icon_var_wrap_fade_in
            : styles.icon_var_wrap_fade_out
        }
      >
        <img src="/icon-var.svg" alt="Icon Var" width={32} height={32} />
        <img src="/icon-var.svg" alt="Icon Var" width={32} height={32} />
        <img src="/icon-var.svg" alt="Icon Var" width={32} height={32} />
      </div>
    </div>
  );
};
