import styles from "./ExternalLink.module.scss";
import React, { useState } from "react";

export const ExternalLink: React.FC<{ href: string; text: string }> = ({
  href,
  text
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={styles.wrap}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStartCapture={() => setIsHovered(true)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEndCapture={() => setIsHovered(false)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={isHovered ? styles.square_hovered : styles.square}
      >
        {!isHovered ? text : null}
      </a>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={isHovered ? styles.link_hovered : styles.link}
      >
        {isHovered ? text : null}
      </a>
    </div>
  );
};
