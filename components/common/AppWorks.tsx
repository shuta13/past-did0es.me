import React, { useState, useEffect } from "react";
import "./AppWorks.scss";
import LoadingBlinder from "./LoadingBlinder";
import { useRouter } from "next/router";

const AppWorks: React.FC<{
  img: string;
  title: string;
  date: string;
}> = ({ img, title, date }) => {
  const name = img.split(".")[0].split("/works/")[1];
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        router.push(`/details/${name}`);
      }, 1000);
    }
  }, [isClicked]);
  return (
    <>
      <div className="AppWorksWrap">
        <div className="AppWorksImageWrap">
          {/* <Link href="/details/[name]" as={`/details/${name}`}> */}
          <a
            className="AppWorksImageClip"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchStartCapture={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            onTouchEndCapture={() => setIsHovered(false)}
            onClick={() => setIsClicked(true)}
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
          {/* </Link> */}
        </div>
      </div>
      <LoadingBlinder isClicked={isClicked} />
    </>
  );
};

export default AppWorks;
