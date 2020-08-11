import React, { useState } from "react";
import Link from "next/link";
import "./AppWorks.scss";
import { maxHeaderSize } from "http";

const AppWorks: React.FC<{
  img: string;
  title: string;
  date: string;
}> = ({ img, title, date }) => {
  const name = img.split(".")[0].split("/works/")[1];
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="AppWorksWrap">
      <div className="AppWorksImageWrap">
        <Link href="/details/[name]" as={`/details/${name}`}>
          <a
            className="AppWorksImageClip"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchStartCapture={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            onTouchEndCapture={() => setIsHovered(false)}
          >
            <img src={img} className="AppWorksImage" alt="Works Image" />
            <div
              className={isHovered ? "AppWorksSquareHovered" : "AppWorksSquare"}
            >
              <div className="AppWorksTextWrap">
                <div
                  className={isHovered ? "AppWorksTextHovered" : "AppWorksText"}
                >
                  {title}
                </div>
              </div>
              <div className="AppWorksTextWrap">
                <div
                  className={isHovered ? "AppWorksTextHovered" : "AppWorksText"}
                  style={{
                    fontSize: "14px"
                  }}
                >
                  {date}
                </div>
              </div>
              <div className="AppWorksTextWrap">
                <div
                  className={isHovered ? "AppWorksTextHovered" : "AppWorksText"}
                >
                  more →
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AppWorks;
