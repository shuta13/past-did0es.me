import "./ExternalLink.scss";
import React, { useState } from "react";

export const ExternalLink: React.FC<{ href: string; text: string }> = ({
  href,
  text
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      className={isHovered ? "ExternalLinkHovered" : "ExternalLink"}
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </a>
  );
};
