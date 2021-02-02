import styles from "./ProfileSlide.module.scss";
import React, { useEffect, useState } from "react";
import { sleep } from "../molecules/Menu";
import { TextAnimation } from "../molecules/TextAnimation";

const Face: React.FC<{ isMoveOverlay: boolean }> = props => {
  const { isMoveOverlay } = props;
  return (
    <div className={styles.text_wrap}>
      <TextAnimation isMoveOverlay={isMoveOverlay} text="SHUTA" fontSize={12} />
      <TextAnimation isMoveOverlay={isMoveOverlay} text="HIRAI" fontSize={12} />
      <TextAnimation
        isMoveOverlay={isMoveOverlay}
        text="DID0ES"
        fontSize={12}
      />
      <TextAnimation
        isMoveOverlay={isMoveOverlay}
        text="FrontEnd Engineer, UI/UX Designer"
        fontSize={4}
      />
      <TextAnimation
        isMoveOverlay={isMoveOverlay}
        text="I Love Development, Design, Arts."
        fontSize={4}
      />
    </div>
  );
};

const Makeup: React.FC = () => {
  return (
    <>
      <div className={styles.edge_text_top}>- WORKS & WORK HISTORIES -</div>
      <div className={styles.edge_text_bottom_right}>
        <TextAnimation
          isMoveOverlay={true}
          text="11.30, 2019 -"
          fontSize={4}
          textAlign="left"
          fontStyle="italic"
        />
        <TextAnimation
          isMoveOverlay={true}
          text="The Present"
          fontSize={4}
          textAlign="left"
          fontStyle="italic"
        />
      </div>
      <div className={styles.edge_text_left}>
        <TextAnimation
          isMoveOverlay={true}
          text="#PORTFOLIO #WEBGL #GRAPHICS"
          fontSize={2}
        />
      </div>
      <div className={styles.edge_text_bottom}>f**k'in bored</div>
    </>
  );
};

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
        <Face isMoveOverlay={isMoveOverlay} />
      </div>
      <div
        className={
          isMoveOverlay
            ? styles.icon_var_wrap_fade_in
            : styles.icon_var_wrap_fade_out
        }
      >
        <Makeup />
      </div>
    </div>
  );
};
