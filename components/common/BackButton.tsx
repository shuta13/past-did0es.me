import "./BackButton.scss";
import React from "react";
import Link from "next/link";

export const BackButton: React.FC<{
  isClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;
}> = ({ isClicked, setIsClicked }) => {
  const text = "< BACK";
  return (
    <div className="BackButtonWrap">
      <Link href="/">
        <a className="BackButton" onClick={() => setIsClicked(!isClicked)}>
          {text}
        </a>
      </Link>
    </div>
  );
};
