import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Header from "../../components/common/Header";

const DetailsNoSSR = dynamic(
  () => import("../../components/partials/Details/Details"),
  { ssr: false }
);

const DetailsHome = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Cormorant+Garamond&family=Abel&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header isDetails={true} />
      <DetailsNoSSR />
    </>
  );
};

export default DetailsHome;
