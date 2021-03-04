import React from "react";

import Details from "../../components/organisms/Details";
import { useRouter } from "next/router";
import { Response } from "../../shared/types/Response";
import { END_POINT_URL } from "../../config";

const DetailsHome: React.FC<{
  isRouteChange: boolean;
  data: Response["data"];
}> = (props) => {
  const router = useRouter();
  const { isRouteChange, data } = props;
  const { name } = router.query;

  return (
    <>
      {name && (
        <Details name={name} isRouteChange={isRouteChange} data={data} />
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`${END_POINT_URL}/api/v1`);
  const data: Response["data"] = await res.json();
  const paths = data.map((d) => `/works/${d.pathname}`);
  return { paths, fallback: false };
};

export const getStaticProps = async () => {
  const res = await fetch(`${END_POINT_URL}/api/v1`);
  const data: Response["data"] = await res.json();
  return { props: { data } };
};

export default DetailsHome;
