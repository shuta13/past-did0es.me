import React from 'react'

import './Profile.scss'

import AppTitle from '../../common/AppTitle'

const Profile: React.FC = () => (
  <div className="ProfileWrap">
    <AppTitle title="- Profile -"></AppTitle>
    <img className="ProfileImage" src={require('../../../public/static/icon.jpg')} alt="logo" />
  </div>
)

export default Profile;