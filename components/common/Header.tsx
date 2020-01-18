import React from 'react'

import './Header.scss'

const Header: React.FC = () => (
  <div className="HeaderWrap">
    <img className="HeaderImage" src={require('../../public/static/apostro.svg')} />
  </div>
)

export default Header;