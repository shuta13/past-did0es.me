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
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        margin: "auto"
      }}
    >
      <div style={{}}>
        <TextAnimation
          isMoveOverlay={isLoaded || isRouteChange}
          text="GitHub"
          fontSize={6}
          href="https://github.com/shuta13"
          textAlign="left"
        />
        <TextAnimation
          isMoveOverlay={isLoaded || isRouteChange}
          text="Twitter"
          fontSize={6}
          href="https://twitter.com/did0es"
          textAlign="left"
        />
        <TextAnimation
          isMoveOverlay={isLoaded || isRouteChange}
          text="Instagram"
          fontSize={6}
          href="https://www.instagram.com/did0es13"
          textAlign="left"
        />
        <TextAnimation
          isMoveOverlay={isLoaded || isRouteChange}
          text="Scrapbox"
          fontSize={6}
          href="https://scrapbox.io/did0es"
          textAlign="left"
        />
      </div>
    </div>
  );
};

export default Contact;
