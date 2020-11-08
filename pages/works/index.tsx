import React from "react";
import { Carousel } from "../../components/organisms/Carousel";

const Work: React.FC<{
  setIsClicked: (isClicked: boolean) => void;
}> = props => {
  const { setIsClicked } = props;
  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <Carousel setIsClicked={setIsClicked} />
    </div>
  );
};

export default Work;
