import React from 'react'
const Fade = require('react-reveal/Fade')

import './Contents.scss'

import VFXText from './VFXText'
import Profile from './Profile'

const WrapContents: React.FC = () => (
  <div className="ContentsWrap">
    <div className="ClipContents">
      <VFXText></VFXText>
      <Fade delay={600} duration={2000} effects="fadeInUp">
        <Profile></Profile>
      </Fade>
    </div>
  </div>
)

export default WrapContents;