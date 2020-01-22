import React from 'react'
// import { animateScroll } from 'react-scroll'

import './Header.scss'

const Header: React.FC = () => (
  <div className="HeaderWrap">
    <img
      className="HeaderImage"
      src={require('../../public/static/apostro.svg')}
      // onClick={
      //   () => animateScroll.scrollToTop({
      //     smooth: 'easeInOutQuint',
      //     duration: 1200
      //   })
      // }
    />
  </div>
)

export default Header;