import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import Header from '../components/common/Header'
import Layout from '../components/common/Layout'
import Contents from '../components/partials/Body/Contents'

const CanvasNoSSR = dynamic(
  () => import('../components/partials/Head/Canvas'),
  { ssr: false }
)

const Home: React.FC = () => (
  <Layout>
    <Head>
      <title>APOSTRO</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Poiret+One&display=swap" rel="stylesheet"></link>
    </Head>

    <Header></Header>

    <CanvasNoSSR></CanvasNoSSR>

    <Contents></Contents>

  </Layout>
)

export default Home