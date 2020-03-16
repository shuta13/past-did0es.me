import React from "react";

import "./DetailsInfo.scss";

type InfoParams = {
  title: string;
  date: string;
  tags: string;
  desc: string;
  subDesc?: string;
  link: string;
};

const DetailsInfo: React.FC<{ info: InfoParams }> = ({ info }) => {
  return (
    <div className="DetailsInfoWrap">
      <div className="DetailsInfoWrapCommon">
        <div className="DetailsInfoTitle DetailsInfoCommon">{info.title}</div>
      </div>
      <div className="DetailsInfoWrapCommon">
        <div className="DetailsInfoDate DetailsInfoCommon">
          date : {info.date}
        </div>
      </div>
      <div className="DetailsInfoWrapCommon">
        <div className="DetailsInfoTags DetailsInfoCommon">
          tags : {info.tags}
        </div>
      </div>
      <div className="DetailsInfoWrapCommon">
        <div className="DetailsInfoDescription DetailsInfoCommon">
          {info.desc}
        </div>
      </div>
      <div className="DetailsInfoWrapCommon">
        <div className="DetailsInfoDescription DetailsInfoCommon">
          {info.subDesc}
        </div>
      </div>
    </div>
  );
};

export default DetailsInfo;
