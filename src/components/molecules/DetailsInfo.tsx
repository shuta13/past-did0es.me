import React from "react";
import { IResponse } from "../../shared/types/Response";

import styles from "./DetailsInfo.module.scss";
import { TextAnimation } from "./TextAnimation";

type StringOrBoolean = string | boolean;

// TODO: IResponse の型持ってきたい
interface DetailsInfoParams {
  title: string;
  date: string;
  tags: string;
  desc: string;
  link: string;
  isRouteChange: boolean;
}

const DetailsInfo: React.FC<DetailsInfoParams> = (props) => {
  const { title, date, tags, desc, link, isRouteChange } = props;
  return (
    <>
      <div className={styles.wrap}>
        <TextAnimation
          isMoveOverlay={!isRouteChange}
          text={title.toUpperCase()}
          fontSize={8}
        />
        <TextAnimation
          isMoveOverlay={!isRouteChange}
          text={date}
          fontSize={2.5}
        />
        <TextAnimation
          isMoveOverlay={!isRouteChange}
          text={tags}
          fontSize={2.5}
        />
      </div>
      <div className={styles.link_wrap}>
        <TextAnimation
          isMoveOverlay={true}
          text="VISIT"
          fontSize={2.8}
          href={link}
        />
      </div>
    </>
  );
};

export default DetailsInfo;
