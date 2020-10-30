import "./Works.scss";
import React from "react";
import AppTitle from "../../common/AppTitle";
import AppWorks from "../../common/AppWorks";

import works from "../../../public/json/works.json";

export const Works: React.FC = () => {
  return (
    <div className="WorksWrap">
      <div className="WorksClip">
        <AppTitle title="- Works -" />
        {works.map(work => (
          <AppWorks
            key={work.img}
            img={`/works/${work.img}`}
            title={work.info.title}
            date={work.info.date}
          />
        ))}
      </div>
    </div>
  );
};
