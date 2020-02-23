import React from 'react'
const Fade = require('react-reveal/Fade')

import './CommonContents.scss'

import Profile from '../partials/Body/Profile'
import AppTitle from '../common/AppTitle'
import AppSubTitle from '../common/AppSubTitle'
import AppWorks from '../partials/Body/AppWorks'
import Skills from '../partials/Foot/Skills'
import Social from '../partials/Foot/Social'
import Copywrite from '../partials/Foot/Copyright'

import Canvas from '../partials/Head/Canvas'

import data from '../../public/static/data.json'

const CommonContents: React.FC = () => (
  <div className="ContentsWrap">
    <Canvas />
    <div className="ContentsClip">
      <Fade delay={400} duration={400} effects="fadeInUp">
        <AppTitle title="- profile -" />
        <Profile />
        <AppTitle title="- Works -" />
        <AppSubTitle subtitle="Development" />
        {
          data.map(params => {
            return (
              <AppWorks
                img={`/static/works/${params.img}`}
                title={params.info.title}
                desc={params.info.desc}
                link={params.info.link}
              />
            )
          })
        }
        {/* <AppWorks
          img={require('../../public/static/works/experiments.jpg')}
          title="EXPERIMENTS"
          desc="Site of WebGL(Three.js) & Nuxt.js Experiments"
          link="https://experiments.did0es.me"
        />
        <AppWorks
          img={require('../../public/static/works/blog-candy.jpg')}
          title="Candy Official Blog"
          desc="Candy Official Blog of ElevenBack LLC."
          link="https://blog.candy.ac"
        />
        <AppWorks
          img={require('../../public/static/works/vue-tsx-keyframes.jpg')}
          title="vue-tsx-keyframes"
          desc="JavaScript Library for Supporting CSS of Vue-TSX"
          link="https://github.com/shuta13/vue-tsx-keyframes"
        />
        <AppWorks
          img={require('../../public/static/works/tam-podcast.jpg')}
          title="tambourine.inc podcast site"
          desc="Podcast Site of tambourine.inc for Co-workers"
          link="https://developers.tam-bourine.co.jp/entry/2019/12/19/190000"
        />
        <AppWorks
          img={require('../../public/static/works/lt-kyotojs17.jpg')}
          title="LT @Kyoto.js17"
          desc="Lighting Talk of vue-tsx-keyframes @Kyoto.js17"
          link="https://speakerdeck.com/shuta/keyframes-of-vue-and-tsx-with-css-in-js"
        />
        <AppSubTitle subtitle="Design" />
        <AppWorks
          img={require('../../public/static/works/design-works.jpg')}
          title="Design Works 2020"
          desc="Works designed in 2020"
          link="https://did0es.hatenablog.jp/entry/2020/02/05/225419"
        />
        <AppWorks
          img={require('../../public/static/works/FC2019-flyer.jpg')}
          title="ElevenBack's Flyer for FC2019"
          desc="Co-created Flyer of ElevenBack"
          link="https://techblog.elevenback.co.jp/entry/2019/11/08/145616"
        />
        <AppSubTitle subtitle="Track Making" />
        <AppWorks
          img={require('../../public/static/works/miko-music.jpg')}
          title="Veginning"
          desc="Music Provided 'Veginning' for #VTuberHackPremium"
          subDesc="Award : Special Award of noitomu"
          link="https://youtu.be/J_CrAM6PEwQ"
        />
        <AppWorks
          img={require('../../public/static/works/towaynight.jpg')}
          title="TO WAY NIGHT"
          desc="Remixed My Own Music Published for University Festival"
          link="https://soundcloud.com/user-858183512/to-way-night"
        /> */}
        <AppTitle title="- Skills -" />
        <Skills />
        <AppTitle title="- Social -" />
        <Social />
        <Copywrite person="© 2020 did0es / Hirai Shuta" />
      </Fade>
    </div>
  </div>
)

export default CommonContents
