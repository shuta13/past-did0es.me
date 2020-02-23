import React from 'react'
import Link from 'next/link'
import { animateScroll } from 'react-scroll'

import './Header.scss'

const Header: React.FC<{ isDetails: boolean }> = ({ isDetails }) => (
  <div className="HeaderWrap">
    { isDetails &&
      <Link href="/">
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
      </Link>
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