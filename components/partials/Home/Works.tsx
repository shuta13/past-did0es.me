import "./Works.scss";
import React from "react";
import AppTitle from "../../common/AppTitle";
import AppWorks from "../../common/AppWorks";

import development from "../../../public/json/development.json";
import design from "../../../public/json/design.json";
import trackMaking from "../../../public/json/trackMaking.json";

export const Works: React.FC = () => {
  const works = development.concat(design).concat(trackMaking);
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
