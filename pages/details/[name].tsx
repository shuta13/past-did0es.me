import React from "react";
import Head from "next/head";

import Details from "../../components/partials/Details/Details";

const DetailsHome = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Cormorant+Garamond&family=Abel&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Details />
    </>
  );
};

export default DetailsHome;
