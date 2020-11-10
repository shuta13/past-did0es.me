import React from "react";
import styles from "./TextAnimation.module.scss";

export const TextAnimation: React.FC<{
  isMoveOverlay: boolean;
  text: string;
  fontSize: number;
}> = props => {
  const { isMoveOverlay, text, fontSize } = props;
  return (
    <div className={styles.text_animation}>
      <div
        className={isMoveOverlay ? styles.text_moved : styles.text}
        style={{ fontSize: `${fontSize}rem` }}
      >
        {text}
      </div>
    </div>
  );
};
