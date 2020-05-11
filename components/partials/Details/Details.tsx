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
    name: "",
    img: "",
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
            name: work.info.title,
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
        <title>did0es.me - {details.name}</title>
        <meta
          name="description"
          content={`did0es.me ${details.name} - ${details.info.desc}`}
        />
        <meta property="og:site_name" content={`did0es.me - ${details.name}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://did0es.me/details/${details.name}`}
        />
        <meta property="og:title" content={`did0es.me - ${details.name}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:description"
          content={`did0es.me - ${details.info.desc}`}
        />
        <meta
          property="og:image"
          content={`https://did0es.me/works/${details.img}`}
        />
      </Head>

      <Loading />
      <div className="DetailsClip">
        <ImagePostProcess
          img={`/works/${details.img}`}
          isBackButtonClicked={isClicked}
        />
        <DetailsInfo info={details.info} />
      </div>
      <BackButton isClicked={isClicked} setIsClicked={setIsClicked} />
    </>
  );
};

export default Details;
