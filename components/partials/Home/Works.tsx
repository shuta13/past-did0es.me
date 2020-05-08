import "./Works.scss";
import React from "react";
import AppTitle from "../../common/AppTitle";
import AppWorks from "../../common/AppWorks";

import development from "../../../public/json/development.json";
import design from "../../../public/json/design.json";
import trackMaking from "../../../public/json/trackMaking.json";

export const Works: React.FC = () => {
  return (
    <div className="WorksWrap">
      <div className="WorksClip">
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
      </div>
    </div>
  );
};
