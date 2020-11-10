import React, { useState, useEffect } from "react";
import Head from "next/head";
import DetailsInfo from "./DetailsInfo";

import works from "../../../public/json/works.json";
import styles from "./Details.module.scss";
import ImagePostProcess from "../../common/ImagePostProcess";
import { useRouter } from "next/router";

const Details: React.FC<{
  name: string | string[];
  isRouteChange: boolean;
}> = ({ name, isRouteChange }) => {
  return (
    <div className="container">
      {works.map(work => (
        <React.Fragment key={work.img}>
          {work.img.split(".")[0] === name && (
            <>
              <Head>
                <title>did0es.me - {work.info.title}</title>
              </Head>

              {!isRouteChange && (
                <ImagePostProcess img={`/works/${work.img}`} />
              )}
              <DetailsInfo
                title={work.info.title}
                date={work.info.date}
                tags={work.info.tags}
                desc={work.info.desc}
                subDesc={work.info.subDesc}
                link={work.info.link}
                isRouteChange={isRouteChange}
              />
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Details;
