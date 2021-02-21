import React from "react";
import { GetStaticProps } from "next";

import Details from "../../components/partials/Details/Details";
import { useRouter } from "next/router";
import { Response } from "../../shared/types/Response";

const DetailsHome: React.FC<{
  isRouteChange: boolean;
  data: Response["data"];
}> = props => {
  const router = useRouter();
  const { isRouteChange, data } = props;
  const { name } = router.query;

  return (
    <>
      {name && data.length > 0 && (
        <Details name={name} isRouteChange={isRouteChange} data={data} />
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://did0es.me/api/v1");
  const data: Response["data"] = await res.json();
  const paths = data.map(d => `/works/${d.pathname}`);
  return { paths, fallback: false };
};

export const getStaticProps = async () => {
  const res = await fetch("https://did0es.me/api/v1");
  const data: Response["data"] = await res.json();
  return { props: { data } };
};

export default DetailsHome;
