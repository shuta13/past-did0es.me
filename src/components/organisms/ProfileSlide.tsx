import styles from "./ProfileSlide.module.scss";
import { sleep } from "../molecules/Menu";
import { TextAnimation } from "../molecules/TextAnimation";
import { CanvasColor } from "../../pages";
import { useEffect, useState } from "react";

interface ProfileSlideParams {
  isLoaded: boolean;
  setCanvasColor: (canvasColor: CanvasColor) => void;
}

const Face: React.FC<{ isMoveOverlay: boolean }> = (props) => {
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
        text="Web Developer, Designer"
        fontSize={4}
      />
      <TextAnimation
        isMoveOverlay={isMoveOverlay}
        text="I Love Developments, Designs, Arts."
        fontSize={4}
      />
    </div>
  );
};

const Makeup: React.FC = () => {
  return (
    <>
      <div className={styles.edge_text_top}>WORKS & WORK HISTORIES</div>
      <div className={styles.edge_text_bottom_left}>
        <TextAnimation
          isMoveOverlay={true}
          text="11.30, 2019 - THE PRESENT"
          fontSize={2.5}
          textAlign="left"
        />
      </div>
      <div className={styles.edge_text_left_vertical}>
        <TextAnimation
          isMoveOverlay={true}
          text="#PORTFOLIO #WEBGL #GRAPHICS"
          fontSize={2}
        />
      </div>
    </>
  );
};

const ThemeButton: React.FC<{
  color: CanvasColor;
  setCanvasColor: ProfileSlideParams["setCanvasColor"];
}> = (props) => {
  const { color, setCanvasColor } = props;
  return (
    <button
      onClick={() => setCanvasColor(color)}
      className={
        color === "theme"
          ? styles.button_theme
          : color === "twilight"
          ? styles.button_twilight
          : styles.button_monotone
      }
    />
  );
};

export const ProfileSlide: React.FC<ProfileSlideParams> = (props) => {
  const { isLoaded, setCanvasColor } = props;
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
      <div className={isMoveOverlay ? styles.fade_in : styles.fade_out}>
        <Makeup />
      </div>
      <div className={styles.button_wrap}>
        <div className={isMoveOverlay ? styles.fade_in : styles.fade_out}>
          <ThemeButton color="monotone" setCanvasColor={setCanvasColor} />
          <ThemeButton color="theme" setCanvasColor={setCanvasColor} />
          <ThemeButton color="twilight" setCanvasColor={setCanvasColor} />
        </div>
      </div>
    </div>
  );
};
