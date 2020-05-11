import React, { useState } from "react";
import Link from "next/link";
import "./AppWorks.scss";

const AppWorks: React.FC<{
  img: string;
  title: string;
  desc: string;
  link: string;
  subDesc?: string;
}> = ({ img, title, desc, link, subDesc }) => {
  const name = img.split(".")[0].split("/works/")[1];
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="AppWorksWrap">
      <div className="AppWorksImageWrap">
        <Link href="/details/[name]" as={`/details/${name}`}>
          <a className="AppWorksImageClip">
            <img
              src={img}
              className={isHovered ? "AppWorksImageHovered" : "AppWorksImage"}
              alt="Works Image"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={() => setIsHovered(true)}
              onTouchStartCapture={() => setIsHovered(true)}
              onTouchEnd={() => setIsHovered(false)}
              onTouchEndCapture={() => setIsHovered(false)}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AppWorks;
