import "./Slide.scss";
import React from "react";

interface Props {
  work: {
    img: string;
    info: { [key: string]: string };
  } | null;
}

export const Slide: React.FC<Props> = props => {
  const { work } = props;
  return (
    <div className="SlideWrap">
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
    </div>
  );
};
