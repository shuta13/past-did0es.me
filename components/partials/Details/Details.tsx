import React from "react";
import Head from "next/head";
import DetailsImage from "../../common/DetailsImage";
import DetailsInfo from "../../common/DetailsInfo";

import development from "../../../public/static/json/development.json";
import design from "../../../public/static/json/design.json";
import trackMaking from "../../../public/static/json/trackMaking.json";
import "./Details.scss";
import Loading from "../../common/Loading";
import { BackButton } from "../../common/BackButton";

const Details: React.FC = () => {
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
        <title>APOSTRO - {worksTitle}</title>
      </Head>

      <Loading />
      <BackButton />
      <div className="DetailsContentsWrap">
        <DetailsImage img={`/static/works/${img}`} href={info.link} />
        <DetailsInfo info={info} />
      </div>
    </>
  );
};

export default Details;
