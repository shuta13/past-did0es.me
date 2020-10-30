import "./Menu.scss";
import React from "react";
import Link from "next/link";

export const Menu: React.FC = () => {
  return (
    <div className="MenuWrap">
      <Link href="/contact">
        <a className="MenuPageName">Contact</a>
      </Link>
      <Link href="/work">
        <a className="MenuPageName">Work</a>
      </Link>
    </div>
  )
}
