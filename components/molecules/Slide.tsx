import "./Slide.scss";
import React from "react";
import Link from "next/link";
import works from "../../public/json/works.json";

interface Props {
  work: typeof works[0];
  style: React.CSSProperties;
}

export const Slide: React.FC<Props> = props => {
  const { work, style } = props;
  const name = work?.img.split(".")[0];
  return (
    <Link href={`works/details/${name}`}>
      <a className="SlideWrap" style={style}>
        <div className="SlideContent">
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
        </div>
      </a>
    </Link>
  );
};
