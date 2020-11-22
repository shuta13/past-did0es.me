import Link from "next/link";
import React from "react";
import styles from "./TextAnimation.module.scss";

export const TextAnimation: React.FC<{
  isMoveOverlay: boolean;
  text: string;
  fontSize: number;
  href?: string;
  link?: string;
  textAlign?: "left" | "right" | "center";
  setIsClicked?: (isClicked: boolean) => void;
}> = props => {
  const {
    isMoveOverlay,
    text,
    fontSize,
    href,
    link,
    textAlign,
    setIsClicked
  } = props;
  const getTextAlign = () => {
    if (textAlign) {
      if (textAlign === "left") return "flex-start";
      else if (textAlign === "right") return "flex-end";
      else if (textAlign === "center") return "center";
    }
  };
  return (
    <div
      className={styles.text_animation}
      style={{ justifyContent: getTextAlign() }}
    >
      {href ? (
        <a
          className={isMoveOverlay ? styles.text_moved : styles.text}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", fontSize: `${fontSize}rem` }}
        >
          {text}
        </a>
      ) : (
        <>
          {link ? (
            <Link href={link}>
              <div
                className={isMoveOverlay ? styles.text_moved : styles.text}
                style={{
                  fontSize: `${fontSize}rem`,
                  cursor: "pointer"
                }}
                onClick={() => setIsClicked && setIsClicked(false)}
              >
                {text}
              </div>
            </Link>
          ) : (
            <div
              className={isMoveOverlay ? styles.text_moved : styles.text}
              style={{
                fontSize: `${fontSize}rem`
              }}
            >
              {text}
            </div>
          )}
        </>
      )}
    </div>
  );
};
