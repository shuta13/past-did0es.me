import "./CommonContents.scss";
import React from "react";

import Profile from "../partials/Home/Profile";
import AppTitle from "../common/AppTitle";
import AppWorks from "../partials/Home/AppWorks";
import Skills from "../partials/Home/Skills";
import Social from "../partials/Home/Social";
import Copywrite from "../partials/Home/Copyright";

import Canvas from "../partials/Home/Canvas";

import development from "../../public/json/development.json";
import design from "../../public/json/design.json";
import trackMaking from "../../public/json/trackMaking.json";

const CommonContents: React.FC = () => (
  <div className="ContentsWrap">
    <Canvas />
    <div className="ContentsClip">
      <AppTitle title="- Profile -" />
      <Profile />
      <AppTitle title="- Works -" />
      {development.map(params => {
        return (
          <AppWorks
            key={params.img}
            img={`/works/${params.img}`}
            title={params.info.title}
            desc={params.info.desc}
            link={params.info.link}
          />
        );
      })}
      {design.map(params => {
        return (
          <AppWorks
            key={params.img}
            img={`/works/${params.img}`}
            title={params.info.title}
            desc={params.info.desc}
            link={params.info.link}
          />
        );
      })}
      {trackMaking.map(params => {
        return (
          <AppWorks
            key={params.img}
            img={`/works/${params.img}`}
            title={params.info.title}
            desc={params.info.desc}
            subDesc={params.info.subDesc}
            link={params.info.link}
          />
        );
      })}
      <AppTitle title="- Skills -" />
      <Skills />
      <AppTitle title="- Social -" />
      <Social />
      <Copywrite person="© 2020 did0es(shuta13)" />
    </div>
  </div>
);

export default CommonContents;
