import React from "react";

import "./DetailsInfo.scss";
import { ExternalLink } from "../../common/ExternalLink";

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
      <div className="DetailsInfoDescription">
        <div
          dangerouslySetInnerHTML={{
            __html: info.desc.replace(/\s/g, "<br />")
          }}
        />
      </div>
      {info.subDesc ? (
        <div className="DetailsInfoText">{info.subDesc}</div>
      ) : null}
      <ExternalLink href={info.link} text="visit" />
    </div>
  );
};

export default DetailsInfo;
