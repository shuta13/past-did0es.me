import "./ProfileSlide.scss";
import React from "react";

export const ProfileSlide: React.FC = () => {
  return (
    <div className="ProfileSlideWrap">
      <div className="ProfileSlideContent">
        <img
          className="ProfileSlideIcon"
          src={require("../../public/icon.jpg")}
          alt="icon"
        />
        <div className="ProfileSlideTextWrap">
          <div className="ProfileSlideTitle">did0es - Shuta HIRAI</div>
          <div className="ProfileSlideSubTitle">Web Developer, Designer</div>
          <div className="ProfileSlideText">Student @ Ritsumeikan Univ</div>
          <div className="ProfileSlideText">FrontEnd Engineer @ Relie, inc</div>
          <div className="ProfileSlideText">
            FrontEnd Engineer・Designer @ AkinaiOne, inc
          </div>
          <div className="ProfileSlideText">
            FrontEnd Engineer・Designer @ ElevenBack LLC.
          </div>
          <div className="ProfileSlideText">Web Developer @ tambourine.inc</div>
        </div>
      </div>
    </div>
  );
};
