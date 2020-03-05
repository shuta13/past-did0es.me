import React from "react";
import ImageCanvas from "./ImageCanvas";

import "./DetailsImage.scss";

const DetailsImage: React.FC<{ img: string; href: string }> = ({
  img,
  href
}) => {
  return (
    <a
      className="DetailsImageWrap"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ImageCanvas img={img} isDetails={true} />
    </a>
  );
};

export default DetailsImage;
