import React from 'react'

import './Profile.scss'

import AppTitle from '../../common/AppTitle'

const Profile: React.FC = () => (
  <div className="ProfileWrap">
    <div className="ProfileContentsWrap">
      <AppTitle title="- Profile -"></AppTitle>
      <div className="ProfileImageWrap">
        <img className="ProfileImage" src={require('../../../public/static/icon.jpg')} alt="logo" />
      </div>
      <div className="ProfileDescriptionWrap">
        <div className="ProfileDescription">
          <p>Web Developer & Engineer & Composer</p>
          <p>Student of Computer Science @ Ritsumeikan Univ.</p>
          <p>Web Front-end Engineer, Designer @ ElevenBack LLC.</p>
          <p>Web Engineer @ tambourine.inc</p>
        </div>
      </div>
    </div>
  </div>
)

export default Profile;