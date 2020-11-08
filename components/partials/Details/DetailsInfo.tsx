import React from "react";

import styles from "./DetailsInfo.module.scss";
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
    <div className={styles.wrap}>
      <div className={styles.title}>{info.title}</div>
      <div className={styles.date}>{info.date}</div>
      <div className={styles.tags}>{info.tags}</div>
      {/* <div className={styles.description}>
        <div
          dangerouslySetInnerHTML={{
            __html: info.desc.replace(/\s/g, "<br />")
          }}
        />
      </div> */}
      {info.subDesc ? <div className={styles.text}>{info.subDesc}</div> : null}
      {/* <ExternalLink href={info.link} text="visit" /> */}
      <div className={styles.link_wrap}>
        <a
          href={info.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          VISIT
        </a>
      </div>
    </div>
  );
};

export default DetailsInfo;
