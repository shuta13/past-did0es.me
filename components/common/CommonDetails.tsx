import React from 'react'
import Head from 'next/head'

const CommonDetails: React.FC = () => {
  // will coming props values
  const worksTitle = 'f*ck'
  const worksImage = ''

  return (
    <div>
      <Head>
        <title>APOSTRO - {worksTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link href="https://fonts.googleapis.com/css?family=Poiret+One&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond&display=swap" rel="stylesheet"></link> */}

        <meta name="description" content={"APOSTRO - " + worksTitle}/>
        <meta property="og:site_name" content={"APOSTRO - " + worksTitle}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://did0es.me/details"/>
        <meta property="og:title" content="APOSTRO"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:description" content={"APOSTRO - " + worksTitle}/>
        <meta property="og:image" content="https://did0es.me/static/ogp.jpg" />
      </Head>
    </div>
  )
}

export default CommonDetails