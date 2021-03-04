import "./BackButton.scss";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import LoadingBlinder from "./LoadingBlinder";
import { useRouter } from "next/router";

export const BackButton: React.FC<{
  isClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;
}> = ({ isClicked, setIsClicked }) => {
  const [isHovered, setIsHovered] = useState(false);
  const text = "< BACK";
  const router = useRouter();
  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  }, [isClicked]);
  return (
    <>
      <div
        className="BackButtonWrap"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStartCapture={() => setIsHovered(true)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEndCapture={() => setIsHovered(false)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <div
          className={isHovered ? "BackButtonSquareHovered" : "BackButtonSquare"}
          onClick={() => setIsClicked(!isClicked)}
        >
          {text}
        </div>
        {/* <Link href="/"> */}
        <button
          className={isHovered ? "BackButtonHovered" : "BackButton"}
          onClick={() => setIsClicked(!isClicked)}
        >
          {text}
        </button>
        {/* </Link> */}
      </div>
      <LoadingBlinder isClicked={isClicked} />
    </>
  );
};
