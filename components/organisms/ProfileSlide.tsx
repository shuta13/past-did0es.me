import "./ProfileSlide.scss";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const ProfileSlide: React.FC = () => {
  // const router = useRouter();

  // const [routeChangedStyle, setRouteChangedStyle] = useState<React.CSSProperties>({ opacity: 1 })

  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     console.log("changed", url);
  //     if (url === "/work") {
  //       setRouteChangedStyle({
  //         transform: "translateY(-100%)",
  //         opacity: 0
  //       })
  //     }
  //   };

  //   router.events.on("routeChangeStart", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChange);
  //   };
  // });

  return (
    <div className="ProfileSlideWrap">
      <div className="ProfileSlideContent">
        {/* <div className="ProfileSlideContent" style={routeChangedStyle}> */}
        <img
          className="ProfileSlideIcon"
          src={require("../../public/icon.jpg")}
          alt="icon"
        />
        <div className="ProfileSlideTextWrap">
          <div className="ProfileSlideTitle">Shuta HIRAI</div>
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
          <div className="ProfileSlideText">
            Ex. FrontEnd Engineer @ Tech Design, inc
          </div>
        </div>
      </div>
    </div>
  );
};
