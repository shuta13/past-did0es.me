import React, { useEffect } from "react";
import { Carousel } from "../../components/organisms/Carousel";

const Work: React.FC<{
  setIsMenuReset: (isMenuReset: boolean) => void;
  setIsWorksClicked: (isWorksClicked: boolean) => void;
}> = props => {
  const { setIsMenuReset, setIsWorksClicked } = props;

  useEffect(() => {
    setIsWorksClicked(true);
  }, []);

  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <Carousel setIsMenuReset={setIsMenuReset} />
    </div>
  );
};

export default Work;
