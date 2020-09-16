import "./Contents.scss";
import React, { useState } from "react";

import Profile from "./Profile";
import Skills from "./Skills";
import Social from "./Social";
import Copywrite from "./Copyright";

import Main from "./Main";
import { Works } from "./Works";

const Contents: React.FC = () => {
  return (
    <>
      <Main />
      <div className="ContentsWrap">
        <Profile />
        <Works />
        {/* <Skills /> */}
        <Social />
        <Copywrite />
      </div>
    </>
  );
};

export default Contents;
