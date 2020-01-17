import React from 'react'
import Head from 'next/head'
import Layout from '../components/common/Layout'
import Canvas from '../components/partials/Canvas'

const Home: React.FC = () => (
  <Layout>
    <Head>
      <title>did0es.me</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Canvas></Canvas>

    <style jsx>{`
    `}</style>
  </Layout>
)

export default Home