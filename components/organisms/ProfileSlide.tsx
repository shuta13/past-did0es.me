import styles from "./ProfileSlide.module.scss";
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
    <div className={styles.wrap}>
      <div className={styles.content}>
        {/* <div className="ProfileSlideContent" style={routeChangedStyle}> */}
        <img
          className={styles.icon}
          src={require("../../public/icon.jpg")}
          alt="icon"
        />
        <div className={styles.text_wrap}>
          <div className={styles.title}>Shuta HIRAI</div>
          <div className={styles.sub_title}>Web Developer, Designer</div>
          <div className={styles.text}>Student @ Ritsumeikan Univ</div>
          <div className={styles.text}>FrontEnd Engineer @ Relie, inc</div>
          <div className={styles.text}>
            FrontEnd Engineer・Designer @ AkinaiOne, inc
          </div>
          <div className={styles.text}>
            FrontEnd Engineer・Designer @ ElevenBack LLC.
          </div>
          <div className={styles.text}>Web Developer @ tambourine.inc</div>
          <div className={styles.text}>
            Ex. FrontEnd Engineer @ Tech Design, inc
          </div>
        </div>
      </div>
    </div>
  );
};
