import "./Works.scss";
import React from "react";
import AppTitle from "../../common/AppTitle";
import AppWorks from "../../common/AppWorks";

import response from "../../../pages/api/response.json";

export const Works: React.FC = () => {
  return (
    <div className="WorksWrap">
      <div className="WorksClip">
        <AppTitle title="- Works -" />
        {response.map(res => (
          <AppWorks
            key={res.img}
            img={`/works/${res.img}`}
            title={res.info.title}
            date={res.info.date}
          />
        ))}
      </div>
    </div>
  );
};
