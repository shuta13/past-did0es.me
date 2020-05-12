import React from "react";

import Loading from "../components/common/Loading";
import Contents from "../components/partials/Home/Contents";
import Head from "next/head";

const Home: React.FC = () => (
  <>
    <Head>
      <meta name="description" content="did0es(shuta13)'s Portfolio" />
      <meta property="og:site_name" content="did0es.me" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://did0es.me" />
      <meta property="og:title" content="did0es.me" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:description" content="did0es(shuta13)'s Portfolio" />
      <meta property="og:image" content="https://did0es.me/og-image.png" />
    </Head>
    <Contents />
    <Loading />
  </>
);

export default Home;
