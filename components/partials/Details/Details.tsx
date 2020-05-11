import React, { useState } from "react";
import Head from "next/head";
import DetailsInfo from "../../common/DetailsInfo";

import development from "../../../public/json/development.json";
import design from "../../../public/json/design.json";
import trackMaking from "../../../public/json/trackMaking.json";
import "./Details.scss";
import Loading from "../../common/Loading";
import { BackButton } from "../../common/BackButton";
import ImagePostProcess from "../../common/ImagePostProcess";

const Details: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const queryTitle = new URL(window.location.href).searchParams.get("title");
  const worksAll = development.concat(design, trackMaking);
  let worksTitle = "";
  let img = "";
  let info = {
    title: "",
    date: "",
    tags: "",
    desc: "",
    link: ""
  };
  worksAll.map(works => {
    if (works.img.split(".")[0] === queryTitle) {
      worksTitle = works.info.title;
      img = works.img;
      info = works.info;
    }
  });

  return (
    <>
      <Head>
        <title>did0es.me - {worksTitle}</title>
      </Head>

      <Loading />
      <div className="DetailsClip">
        <ImagePostProcess
          img={`/works/${img}`}
          isDetails={true}
          isBackButtonClicked={isClicked}
        />
        <DetailsInfo info={info} />
      </div>
      <BackButton isClicked={isClicked} setIsClicked={setIsClicked} />
    </>
  );
};

export default Details;
