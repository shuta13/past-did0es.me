import { GetStaticProps } from "next";
import React, { useEffect } from "react";
import { Carousel } from "../../components/organisms/Carousel";
import { END_POINT_URL } from "../../config";
import { IResponse } from "../../shared/types/Response";
const result = require("../api/data/response.json");

const Work: React.FC<{
  setIsMenuReset: (isMenuReset: boolean) => void;
  setIsWorksActive: (isWorksActive: boolean) => void;
  setIsContactActive: (isContactActive: boolean) => void;
  data: IResponse["data"];
}> = (props) => {
  const { setIsMenuReset, setIsWorksActive, setIsContactActive, data } = props;

  useEffect(() => {
    setIsWorksActive(true);
    setIsContactActive(false);
  }, []);

  return (
    <div className="container" style={{ overflow: "hidden" }}>
      {data.length > 0 && (
        <Carousel setIsMenuReset={setIsMenuReset} data={data} />
      )}
    </div>
  );
};

export const getStaticProps = async () => {
  // const res = await fetch(`${END_POINT_URL}/api/v1`);
  // const data: IResponse["data"] = await res.json();
  const data = result;
  return { props: { data } };
};

export default Work;
