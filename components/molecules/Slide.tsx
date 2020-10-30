import "./Slide.scss";
import React from "react";

interface Props {
  isProfileSlide: boolean;
  work: {
    img: string;
    info: { [key: string]: string };
  } | null;
}

export const Slide: React.FC<Props> = props => {
  const { isProfileSlide, work } = props;
  return (
    <div className="SlideWrap">
      {/* {isProfileSlide ? (
        <div className="SlideContent">
          <img
            className="SlideProfileIcon"
            src={require("../../public/icon.jpg")}
            alt="icon"
          />
          <div className="SlideTextWrap">
            <div className="SlideTitle">did0es - Shuta HIRAI</div>
            <div className="SlideSubTitle">Web Developer, Designer</div>
            <div className="SlideText">Student @ Ritsumeikan Univ</div>
            <div className="SlideText">FrontEnd Engineer @ Relie, inc</div>
            <div className="SlideText">
              FrontEnd Engineer・Designer @ AkinaiOne, inc
            </div>
            <div className="SlideText">
              FrontEnd Engineer・Designer @ ElevenBack LLC.
            </div>
            <div className="SlideText">Web Developer @ tambourine.inc</div>
          </div>
        </div>
      ) : ( */}
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
      {/* )} */}
    </div>
  );
};
