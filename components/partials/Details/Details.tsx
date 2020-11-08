import React, { useState, useEffect } from "react";
import Head from "next/head";
import DetailsInfo from "./DetailsInfo";

import works from "../../../public/json/works.json";
import styles from "./Details.module.scss";
import ImagePostProcess from "../../common/ImagePostProcess";
import { useRouter } from "next/router";

const Details: React.FC<{
  name: string | string[];
  isHeaderClicked: boolean;
  isMenuClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;
}> = ({ name, isHeaderClicked, isMenuClicked, setIsClicked }) => {
  useEffect(() => {
    setIsClicked(false);
  }, []);

  return (
    <div className="container">
      {works.map(work => (
        <React.Fragment key={work.img}>
          {work.img.split(".")[0] === name && (
            <>
              <Head>
                <title>did0es.me - {work.info.title}</title>
                {/* <meta name="description" content={`${work.info.title}`} />
                <meta
                  property="og:site_name"
                  content={`did0es.me - ${work.info.title}`}
                />
                <meta property="og:type" content="website" />
                <meta
                  property="og:url"
                  content={`https://did0es.me/details/${
                    work.img.split(".")[0]
                  }`}
                />
                <meta
                  property="og:title"
                  content={`did0es.me - ${work.info.title}`}
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  property="og:description"
                  content={`${work.info.title}`}
                />
                <meta
                  property="og:image"
                  content={`https://did0es.me/works/${work.img}`}
                /> */}
              </Head>

              {!isHeaderClicked && !isMenuClicked && (
                <ImagePostProcess img={`/works/${work.img}`} />
              )}
              <DetailsInfo info={work.info} />
              {/* <BackButton isClicked={isClicked} setIsClicked={setIsClicked} /> */}
              {/* <Loading /> */}
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Details;
