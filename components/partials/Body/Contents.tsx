import React from 'react'
const Fade = require('react-reveal/Fade')

import './Contents.scss'

import Profile from './Profile'

const WrapContents: React.FC = () => (
  <div className="ContentsWrap">
    <div className="ClipContents">
      <Fade delay={600} duration={600} effects="fadeInUp">
        <Profile></Profile>
      </Fade>
    </div>
  </div>
)

export default WrapContents;