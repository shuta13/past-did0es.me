import "./CommonContents.scss";
import React from "react";

import Profile from "../partials/Body/Profile";
import AppTitle from "../common/AppTitle";
import AppWorks from "../partials/Body/AppWorks";
import Skills from "../partials/Foot/Skills";
import Social from "../partials/Foot/Social";
import Copywrite from "../partials/Foot/Copyright";

import Canvas from "../partials/Head/Canvas";

import development from "../../public/static/json/development.json";
import design from "../../public/static/json/design.json";
import trackMaking from "../../public/static/json/trackMaking.json";

const CommonContents: React.FC = () => (
  <div className="ContentsWrap">
    <Canvas />
    <div className="ContentsClip">
      <AppTitle title="- profile -" />
      <Profile />
      <AppTitle title="- Works -" />
      {development.map(params => {
        return (
          <AppWorks
            key={params.img}
            img={`/static/works/${params.img}`}
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
            img={`/static/works/${params.img}`}
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
            img={`/static/works/${params.img}`}
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
      <Copywrite person="© 2020 did0es / Hirai Shuta" />
    </div>
  </div>
);

export default CommonContents;
