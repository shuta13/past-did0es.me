import "./Menu.scss";
import React from "react";
import Link from "next/link";

export const Menu: React.FC = () => {
  return (
    <div className="MenuWrap">
      <Link href="/works">
        <a className="MenuPageName">Works</a>
      </Link>
      <Link href="/contact">
        <a className="MenuPageName">Contact</a>
      </Link>
    </div>
  );
};
