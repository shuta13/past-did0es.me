import "./BackButton.scss";
import React, { useState } from "react";
import Link from "next/link";

export const BackButton: React.FC<{
  isClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;
}> = ({ isClicked, setIsClicked }) => {
  const [isHovered, setIsHovered] = useState(false);
  const text = "< BACK";
  return (
    <div
      className="BackButtonWrap"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStartCapture={() => setIsHovered(true)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEndCapture={() => setIsHovered(false)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <a
        className={isHovered ? "BackButtonSquareHovered" : "BackButtonSquare"}
        onClick={() => setIsClicked(!isClicked)}
      >
        {text}
      </a>
      <Link href="/">
        <a
          className={isHovered ? "BackButtonHovered" : "BackButton"}
          onClick={() => setIsClicked(!isClicked)}
        >
          {text}
        </a>
      </Link>
    </div>
  );
};
