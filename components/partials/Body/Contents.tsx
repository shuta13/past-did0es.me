import React from 'react'
const Fade = require('react-reveal/Fade')

import './Contents.scss'

import Profile from '../Body/Profile'

const WrapContents: React.FC = () => (
  <div className="ContentsWrap">
    <Fade delay={600} duration={2000} effects="fadeInUp">
      <Profile></Profile>
    </Fade>
  </div>
)

export default WrapContents;