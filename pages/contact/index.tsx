import React, { useEffect } from "react";
import { TextAnimation } from "../../components/molecules/TextAnimation";

const Contact: React.FC<{
  setIsWorksActive: (isWorksActive: boolean) => void;
  setIsContactActive: (isContactActive: boolean) => void;
  isLoaded: boolean;
  isRouteChange: boolean;
}> = props => {
  const {
    setIsContactActive,
    setIsWorksActive,
    isLoaded,
    isRouteChange
  } = props;
  useEffect(() => {
    setIsContactActive(true);
    setIsWorksActive(false);
  }, []);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          margin: "auto"
        }}
      >
        <TextAnimation
          isMoveOverlay={isLoaded || isRouteChange}
          text="GitHub"
          fontSize={4}
          href="https://github.com/shuta13"
          textAlign="center"
        />
        <TextAnimation
          isMoveOverlay={isLoaded || isRouteChange}
          text="Twitter"
          fontSize={4}
          href="https://twitter.com/did0es"
          textAlign="center"
        />
        <TextAnimation
          isMoveOverlay={isLoaded || isRouteChange}
          text="Instagram"
          fontSize={4}
          href="https://www.instagram.com/did0es13"
          textAlign="center"
        />
        <TextAnimation
          isMoveOverlay={isLoaded || isRouteChange}
          text="Scrapbox"
          fontSize={4}
          href="https://scrapbox.io/did0es"
          textAlign="center"
        />
      </div>
    </>
  );
};

export default Contact;
