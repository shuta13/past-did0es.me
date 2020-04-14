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
      <div className="DetailsInfoTitle">{info.title}</div>
      <div className="DetailsInfoText">{info.date}</div>
      <div className="DetailsInfoText">{info.tags}</div>
      <div className="DetailsInfoText">{info.desc}</div>
      <div className="DetailsInfoText">{info.subDesc}</div>
    </div>
  );
};

export default DetailsInfo;
