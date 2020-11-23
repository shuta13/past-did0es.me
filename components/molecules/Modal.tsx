import React, { useEffect, useState } from "react";
import { sleep } from "./Menu";
import styles from "./Modal.module.scss";
import { TextAnimation } from "./TextAnimation";

export const Modal: React.FC<{
  isClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;
}> = props => {
  const { isClicked, setIsClicked } = props;
  const [isMoveOverlay, setIsMoveOverlay] = useState(false);
  useEffect(() => {
    sleep(600).then(() => setIsMoveOverlay(isClicked));
  }, [isClicked]);
  return (
    <div className={isClicked ? styles.modal : styles.modal_hide}>
      <div className={styles.content}>
        <div className={styles.text_wrap}>
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="HOME"
            fontSize={4}
            link="/"
            textAlign="left"
            setIsClicked={setIsClicked}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="WORKS"
            fontSize={4}
            link="/works"
            textAlign="left"
            setIsClicked={setIsClicked}
          />
          <TextAnimation
            isMoveOverlay={isMoveOverlay}
            text="CONTACT"
            fontSize={4}
            link="/contact"
            textAlign="left"
            setIsClicked={setIsClicked}
          />
        </div>
      </div>
    </div>
  );
};
