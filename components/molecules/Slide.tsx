import "./Slide.scss";
import React from "react";
import Link from "next/link";

interface Props {
  work: {
    img: string;
    info: { [key: string]: string };
  } | null;
}

export const Slide: React.FC<Props> = props => {
  const { work } = props;
  const name = work?.img.split(".")[0]
  return (
    <div className="SlideWrap">
      <Link href={`works/details/${name}`}>
        <a className="SlideContent">
          <div className="SlideWorkOverlay" />
          <div className="SlideWorkInfo">
            <div className="SlideWorkDate">{work?.info.date}</div>
            <div className="SlideWorkTitle">{work?.info.title}</div>
          </div>
          <img
            className="SlideImage"
            src={require(`../../public/works/${work?.img}`)}
            alt="Works Image"
          />
        </a>
      </Link>
    </div>
  );
};
