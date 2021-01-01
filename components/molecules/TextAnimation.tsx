import Link from "next/link";
import React from "react";
import styles from "./TextAnimation.module.scss";

interface TextAnimationProps {
  isMoveOverlay: boolean;
  text: string;
  fontSize: number;
  href?: string;
  link?: string;
  textAlign?: "left" | "right" | "center";
  fontStyle?: CSSStyleDeclaration["fontStyle"];
  setIsClicked?: (isClicked: boolean) => void;
}

interface HrefProps {
  isMoveOverlay: boolean;
  href: string;
  fontSize: number;
  text: string;
  fontStyle: CSSStyleDeclaration["fontStyle"];
}

interface AppLinkProps {
  link: string;
  isMoveOverlay: boolean;
  fontSize: number;
  setIsClicked?: (isClicked: boolean) => void;
  text: string;
  fontStyle: CSSStyleDeclaration["fontStyle"];
}

const Href: React.FC<HrefProps> = props => {
  const { isMoveOverlay, href, fontSize, text, fontStyle } = props;
  return (
    <a
      className={isMoveOverlay ? styles.text_moved : styles.text}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        fontSize: `${fontSize}rem`,
        fontStyle: fontStyle
      }}
    >
      {text}
    </a>
  );
};

const AppLink: React.FC<AppLinkProps> = props => {
  const {
    link,
    isMoveOverlay,
    fontSize,
    setIsClicked,
    text,
    fontStyle
  } = props;
  return (
    <Link href={link}>
      <div
        className={isMoveOverlay ? styles.text_moved : styles.text}
        style={{
          fontSize: `${fontSize}rem`,
          cursor: "pointer",
          fontStyle: fontStyle
        }}
        onClick={() => setIsClicked && setIsClicked(false)}
      >
        {text}
      </div>
    </Link>
  );
};

const getTextAlign = (textAlign: TextAnimationProps["textAlign"]) => {
  if (textAlign) {
    if (textAlign === "left") return "flex-start";
    else if (textAlign === "right") return "flex-end";
    else if (textAlign === "center") return "center";
  }
};

export const TextAnimation: React.FC<TextAnimationProps> = props => {
  const {
    isMoveOverlay,
    text,
    fontSize,
    href,
    link,
    textAlign,
    fontStyle,
    setIsClicked
  } = props;
  return (
    <div
      className={styles.text_animation}
      style={{ justifyContent: getTextAlign(textAlign) }}
    >
      {href ? (
        <Href
          isMoveOverlay={isMoveOverlay}
          href={href}
          fontSize={fontSize}
          text={text}
          fontStyle={fontStyle ? fontStyle : "normal"}
        />
      ) : (
        <>
          {link ? (
            <AppLink
              link={link}
              isMoveOverlay={isMoveOverlay}
              fontSize={fontSize}
              setIsClicked={setIsClicked}
              text={text}
              fontStyle={fontStyle ? fontStyle : "normal"}
            />
          ) : (
            <div
              className={isMoveOverlay ? styles.text_moved : styles.text}
              style={{
                fontSize: `${fontSize}rem`,
                fontStyle: fontStyle
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
