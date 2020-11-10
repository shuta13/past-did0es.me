import React from "react";
import styles from "./TextAnimation.module.scss";

export const TextAnimation: React.FC<{
  isMoveOverlay: boolean;
  text: string;
  fontSize: number;
  href?: string;
}> = props => {
  const { isMoveOverlay, text, fontSize, href } = props;
  return (
    <div className={styles.text_animation}>
      {href != null ? (
        <a
          className={isMoveOverlay ? styles.text_moved : styles.text}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          {text}
        </a>
      ) : (
        <div
          className={isMoveOverlay ? styles.text_moved : styles.text}
          style={{ fontSize: `${fontSize}rem` }}
        >
          {text}
        </div>
      )}
    </div>
  );
};
