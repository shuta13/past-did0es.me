import React, { useEffect } from "react";
import { Carousel } from "../../components/organisms/Carousel";

const Work: React.FC<{
  setIsMenuReset: (isMenuReset: boolean) => void;
  setIsWorksActive: (isWorksActive: boolean) => void;
  setIsContactActive: (isContactActive: boolean) => void;
}> = props => {
  const { setIsMenuReset, setIsWorksActive, setIsContactActive } = props;

  useEffect(() => {
    setIsWorksActive(true);
    setIsContactActive(false);
  }, []);

  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <Carousel setIsMenuReset={setIsMenuReset} />
    </div>
  );
};

export default Work;
