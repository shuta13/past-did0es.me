import { GetStaticProps } from "next";
import React, { useEffect } from "react";
import { Carousel } from "../../components/organisms/Carousel";
import { Response } from "../../shared/types/Response";

const Work: React.FC<{
  setIsMenuReset: (isMenuReset: boolean) => void;
  setIsWorksActive: (isWorksActive: boolean) => void;
  setIsContactActive: (isContactActive: boolean) => void;
  data: Response["data"];
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
  const res = await fetch("https://did0es.me/api/v1");
  const data: Response["data"] = await res.json();
  return { props: { data } };
};

export default Work;
