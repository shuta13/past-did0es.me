import React from 'react'

import './Header.scss'

const Header: React.FC = () => (
  <div className="HeaderWrap">
    <img className="HeaderImage" src={require('../../public/static/apostro.svg')} onClick={() => {setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)}}/>
  </div>
)

export default Header;