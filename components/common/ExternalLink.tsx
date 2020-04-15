import "./ExternalLink.scss";
import React, { useState } from "react";

export const ExternalLink: React.FC<{ href: string; text: string }> = ({
  href,
  text
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="ExternalLinkWrap"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStartCapture={() => setIsHovered(true)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEndCapture={() => setIsHovered(false)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div
        className={
          isHovered ? "ExternalLinkSquareHovered" : "ExternalLinkSquare"
        }
      >
        {!isHovered ? text : null}
      </div>
      <a
        href={href}
        target="_blank"
        className={isHovered ? "ExternalLinkHovered" : "ExternalLink"}
        rel="noopener noreferrer"
      >
        {isHovered ? text : null}
      </a>
    </div>
  );
};
