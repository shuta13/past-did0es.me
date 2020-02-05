import React from 'react'
import './AppSubTitle.scss'

const AppSubTitle: React.FC<{ subtitle: string }> = ({ subtitle }) => (
  <div className="AppSubTitleWrap">
    <div className="AppSubTitle">{subtitle}</div>
  </div>
)

export default AppSubTitle;