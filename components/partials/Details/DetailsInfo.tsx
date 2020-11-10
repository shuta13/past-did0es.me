import React from "react";

import styles from "./DetailsInfo.module.scss";
import { ExternalLink } from "../../common/ExternalLink";
import { TextAnimation } from "../../molecules/TextAnimation";

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
    <>
      <div className={styles.wrap}>
        <TextAnimation isMoveOverlay={true} text={info.title} fontSize={3} />
        <TextAnimation isMoveOverlay={true} text={info.date} fontSize={1.8} />
        <TextAnimation isMoveOverlay={true} text={info.tags} fontSize={1.8} />
        {/* <div className={styles.title}>{info.title}</div>
      <div className={styles.date}>{info.date}</div>
      <div className={styles.tags}>{info.tags}</div> */}
        {/* <div className={styles.description}>
        <div
          dangerouslySetInnerHTML={{
            __html: info.desc.replace(/\s/g, "<br />")
          }}
        />
      </div> */}
        {/* {info.subDesc && <div className={styles.text}>{info.subDesc}</div>} */}
      </div>
      <div className={styles.link_wrap}>
        <TextAnimation
          isMoveOverlay={true}
          text="VISIT"
          fontSize={3}
          href={info.link}
        />
      </div>
    </>
  );
};

export default DetailsInfo;
