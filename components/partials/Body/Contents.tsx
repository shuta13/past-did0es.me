import React from 'react'
const Fade = require('react-reveal/Fade')

import './Contents.scss'

import Profile from './Profile'
import AppTitle from '../../common/AppTitle'
import AppWorks from './AppWorks'
import Skills from '../Foot/Skills'
import Social from '../Foot/Social'
import Copywrite from '../Foot/Copyright'

const WrapContents: React.FC = () => (
  <div className="ContentsWrap">
    <div className="ContentsClip">
      <Fade delay={400} duration={400} effects="fadeInUp">

        <AppTitle title="- Profile -"></AppTitle>
        <Profile></Profile>

        <AppTitle title="- Works -"></AppTitle>
        <AppWorks
          img={require('../../../public/static/works/garelly.jpg')}
          title="GARELLY"
          desc="Site of Generative Art & 2D, 3D Graphics."
          link="https://did0es.netlify.com/garelly"
        />

        <AppWorks
          img={require('../../../public/static/works/experiments.jpg')}
          title="EXPERIMENTS"
          desc="Site of WebGL(Three.js) & Nuxt.js Experiments"
          link="https://experiments.did0es.me"
        />

        <AppWorks
          img={require('../../../public/static/works/blog-candy.jpg')}
          title="Candy Official Blog"
          desc="Candy Official Blog of ElevenBack LLC."
          link="https://blog.candy.ac"
        />

        <AppWorks
          img={require('../../../public/static/works/FC2019-flyer.jpg')}
          title="ElevenBack's Flyer for FC2019"
          desc="Co-created Flyer of ElevenBack"
          link="https://techblog.elevenback.co.jp/entry/2019/11/08/145616"
        />

        <AppWorks
          img={require('../../../public/static/works/vue-tsx-keyframes.jpg')}
          title="vue-tsx-keyframes"
          desc="JavaScript Library for Supporting CSS of Vue-TSX"
          link="https://github.com/shuta13/vue-tsx-keyframes"
        />

        <AppWorks
          img={require('../../../public/static/works/tam-podcast.jpg')}
          title="tambourine.inc podcast site"
          desc="Podcast Site of tambourine.inc for Co-workers"
          link="https://developers.tam-bourine.co.jp/entry/2019/12/19/190000"
        />

        <AppWorks
          img={require('../../../public/static/works/miko-music.jpg')}
          title="Veginning"
          desc="Music Provider 'Veginning' for #VTuberHackPremium"
          link="https://youtu.be/J_CrAM6PEwQ"
        />

        <AppWorks
          img={require('../../../public/static/works/towaynight.jpg')}
          title="TO WAY NIGHT"
          desc="Remixed My Own Music Published for University Festival"
          link="https://soundcloud.com/user-858183512/to-way-night"
        />

        <AppTitle title="- Skills -"></AppTitle>
        <Skills></Skills>

        <AppTitle title="- Social -"></AppTitle>

        <Social></Social>

        <Copywrite person="© 2019 did0es"></Copywrite>

      </Fade>
    </div>
  </div>
)

export default WrapContents;