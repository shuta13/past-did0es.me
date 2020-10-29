import "./Contents.scss";
import React from "react";

import Profile from "./Profile";

import Social from "./Social";
import Copyright from "./Copyright";

import Main from "./Main";
import { Works } from "./Works";
import { Carousel } from "../../molecules/Carousel";

const Contents: React.FC = () => {
  return (
    <>
      <Main />
      <div className="ContentsWrap">
        <Carousel />
        {/* <Profile /> */}
        {/* <Works /> */}
        {/* <Skills /> */}
        {/* <Social /> */}
        <Copyright />
      </div>
    </>
  );
};

export default Contents;
