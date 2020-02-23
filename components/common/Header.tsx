import React from 'react'
import { animateScroll } from 'react-scroll'

import './Header.scss'
import Link from 'next/link'

const Header: React.FC<{ isDetails: boolean }> = ({ isDetails }) => (
  <div className="HeaderWrap">
    { isDetails &&
      <a href="/">
        <img
          className="HeaderImage"
          src={require('../../public/static/apostro.svg')}
          onClick={
            () => animateScroll.scrollToTop({
              smooth: 'easeInOutQuint',
              duration: 1200
            })
          }
        />
      </a>
    }
    { !isDetails &&
      <img
        className="HeaderImage"
        src={require('../../public/static/apostro.svg')}
        onClick={
          () => animateScroll.scrollToTop({
            smooth: 'easeInOutQuint',
            duration: 1200
          })
        }
      />
    }
  </div>
)

export default Header;