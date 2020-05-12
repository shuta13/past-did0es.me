import React from "react";
import Head from "next/head";

import Details from "../../components/partials/Details/Details";
import { useRouter } from "next/router";

const DetailsHome = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Cormorant+Garamond&family=Abel&display=swap"
          rel="stylesheet"
        />
      </Head>
      {name !== undefined ? <Details name={name} /> : null}
    </>
  );
};

export default DetailsHome;
