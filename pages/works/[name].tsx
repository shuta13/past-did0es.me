import React, { useEffect } from "react";

import Details from "../../components/partials/Details/Details";
import { useRouter } from "next/router";

const DetailsHome: React.FC<{
  isRouteChange: boolean;
}> = props => {
  const router = useRouter();
  const { isRouteChange } = props;
  const { name } = router.query;

  return (
    <>
      {name !== undefined && (
        <Details name={name} isRouteChange={isRouteChange} />
      )}
    </>
  );
};

// export const getStaticPaths = async () => {
//   const res = await fetch("https://did0es.me/api/v1");
//   const data = await res.json();
//   const paths = data.map((d: any) => `/works/${d.pathname}`);
//   return { paths, fallback: false };
// };

// export const getStaticProps = async (params: GetStaticProps) => {
//   const res = await fetch("https://did0es.me/api/v1");
//   const data = await res.json();
//   return { props: { data } };
// };

export default DetailsHome;
