import React from "react";
import Link from "next/link";
import { animateScroll } from "react-scroll";

import "./Header.scss";

const Header: React.FC = () => (
  <div className="HeaderWrap">
    <img
      className="HeaderImage"
      src={require("../../public/logo.svg")}
      onClick={() =>
        animateScroll.scrollToTop({
          smooth: "easeInOutQuint",
          duration: 1200
        })
      }
      alt="logo"
    />
  </div>
);

export default Header;
