import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Header from "../components/common/Header";
import Loading from "../components/common/Loading";

// const CanvasNoSSR = dynamic(
//   () => import('../components/partials/Head/Canvas'),
//   { ssr: false }
// )

const ContentsNoSSR = dynamic(
  () => import("../components/partials/Body/Contents"),
  { ssr: false }
);

const Home: React.FC = () => (
  <>
    <Head>
      <title>APOSTRO</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Cormorant+Garamond&family=Abel&display=swap"
        rel="stylesheet"
      />

      <meta name="description" content="APOSTRO" />
      <meta property="og:site_name" content="APOSTRO" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://did0es.me" />
      <meta property="og:title" content="APOSTRO" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:description" content="APOSTRO" />
      <meta
        property="og:image"
        content="https://did0es.me/static/og-image.png"
      />
    </Head>

    <Header isDetails={false} />
    {/* <CanvasNoSSR /> */}
    <Loading />
    <ContentsNoSSR />
  </>
);

export default Home;
