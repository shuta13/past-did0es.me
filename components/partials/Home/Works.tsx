import "./Works.scss";
import React from "react";
import AppTitle from "../../common/AppTitle";
import AppWorks from "../../common/AppWorks";

import individual from "../../../public/json/individual.json";
import joint from "../../../public/json/joint.json";

export const Works: React.FC = () => {
  const works = individual.concat(joint);
  return (
    <div className="WorksWrap">
      <div className="WorksClip">
        <AppTitle title="- Works -" />
        {works.map(work => (
          <AppWorks
            key={work.img}
            img={`/works/${work.img}`}
            title={work.info.title}
            desc={work.info.desc}
            link={work.info.link}
          />
        ))}
      </div>
    </div>
  );
};
