import "./BackButton.scss";
import React from "react";
import Link from "next/link";

export const BackButton: React.FC = () => {
  const text = "< BACK";
  return (
    <div className="BackButtonWrap">
      <Link href="/">
        <a className="BackButton">{text}</a>
      </Link>
    </div>
  );
};
