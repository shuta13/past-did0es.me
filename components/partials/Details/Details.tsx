import React, { useState, useEffect } from "react";
import Head from "next/head";
import DetailsInfo from "../../common/DetailsInfo";

import individual from "../../../public/json/individual.json";
import joint from "../../../public/json/joint.json";
import "./Details.scss";
import Loading from "../../common/Loading";
import { BackButton } from "../../common/BackButton";
import ImagePostProcess from "../../common/ImagePostProcess";
import { useRouter } from "next/router";

const Details: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [details, setDetails] = useState({
    title: "",
    name: "",
    img: "default.png",
    info: {
      title: "",
      date: "",
      tags: "",
      desc: "",
      link: ""
    }
  });
  const { query } = useRouter();
  const works = individual.concat(joint);
  useEffect(() => {
    if (query.name !== undefined) {
      works.map(work => {
        if (work.img.split(".")[0] === query.name) {
          setDetails({
            title: work.info.title,
            name: work.img.split(".")[0],
            img: work.img,
            info: work.info
          });
        }
      });
    }
  }, [query.name]);

  return (
    <>
      <Head>
        <title>did0es.me - {details.title}</title>
        <meta name="description" content={`${details.title}`} />
        <meta
          property="og:site_name"
          content={`did0es.me - ${details.title}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://did0es.me/details/${details.name}`}
        />
        <meta property="og:title" content={`did0es.me - ${details.title}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" content={`${details.title}`} />
        <meta
          property="og:image"
          content={`https://did0es.me/works/${details.img}`}
        />
      </Head>

      <div className="DetailsClip">
        <ImagePostProcess
          img={`/works/${details.img}`}
          isBackButtonClicked={isClicked}
        />
        <DetailsInfo info={details.info} />
      </div>
      <BackButton isClicked={isClicked} setIsClicked={setIsClicked} />
      <Loading />
    </>
  );
};

export default Details;
