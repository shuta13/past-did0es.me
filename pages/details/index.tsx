import React from 'react';
import Head from 'next/head';
import Layout from '../../components/common/Layout';

const Details = () => {
  const title = 'f*ck'
  return (
    <Layout>
      <Head>
        <title>APOSTRO - {title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Poiret+One&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond&display=swap" rel="stylesheet"></link>

        <meta name="description" content="APOSTRO"/>
        <meta property="og:site_name" content="APOSTRO"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://did0es.me"/>
        <meta property="og:title" content="APOSTRO"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:description" content="APOSTRO"/>
        <meta property="og:image" content="https://did0es.me/static/ogp.jpg" />
      </Head>
    </Layout>
  )
}

export default Details