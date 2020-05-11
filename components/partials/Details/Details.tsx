import React, { useState } from "react";
import Head from "next/head";
import DetailsInfo from "../../common/DetailsInfo";

import individual from "../../../public/json/individual.json";
import joint from "../../../public/json/joint.json";
import "./Details.scss";
import Loading from "../../common/Loading";
import { BackButton } from "../../common/BackButton";
import ImagePostProcess from "../../common/ImagePostProcess";

const Details: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const queryTitle = new URL(window.location.href).searchParams.get("title");
  const works = individual.concat(joint);
  const details = {
    title: "",
    img: "",
    info: {
      title: "",
      date: "",
      tags: "",
      desc: "",
      link: ""
    }
  }
  works.map(work => {
    if (work.img.split(".")[0] === queryTitle) {
      details.title = work.info.title;
      details.img = work.img;
      details.info = work.info;
    }
  });

  return (
    <>
      <Head>
        <title>did0es.me - {details.title}</title>
      </Head>

      <Loading />
      <div className="DetailsClip">
        <ImagePostProcess
          img={`/works/${details.img}`}
          isDetails={true}
          isBackButtonClicked={isClicked}
        />
        <DetailsInfo info={details.info} />
      </div>
      <BackButton isClicked={isClicked} setIsClicked={setIsClicked} />
    </>
  );
};

export default Details;
