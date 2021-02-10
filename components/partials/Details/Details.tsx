import React, { useState, useEffect } from "react";
import Head from "next/head";
import DetailsInfo from "./DetailsInfo";

import response from "../../../pages/api/response.json";
import styles from "./Details.module.scss";
import ImagePostProcess from "../../common/ImagePostProcess";
import { useRouter } from "next/router";

const Details: React.FC<{
  name: string | string[];
  isRouteChange: boolean;
}> = ({ name, isRouteChange }) => {
  return (
    <div className="container">
      {response.map(res => (
        <React.Fragment key={res.img}>
          {res.img.split(".")[0] === name && (
            <>
              <Head>
                <title>did0es.me - {res.info.title}</title>
              </Head>

              {!isRouteChange && <ImagePostProcess img={`/works/${res.img}`} />}
              <DetailsInfo
                title={res.info.title}
                date={res.info.date}
                tags={res.info.tags}
                desc={res.info.desc}
                subDesc={res.info.subDesc}
                link={res.info.link}
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
