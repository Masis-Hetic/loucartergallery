import React, { Fragment, useState } from 'react';
import Link from "next/link";

const Nav = () => {
  const [isOpen, openMenu] = useState(false);

  const toggleMenu = () => openMenu(!isOpen);

  return (
    <Fragment>

      <header className={isOpen ? 'open' : 'close'}>
        <nav className="nav-links">
          <ul>
            <li>SS 19</li>
            <li>FW 19/20</li>
            <li>Artistes</li>
            <li>Archives</li>
            <li>Collections</li>
            <li>
              <Link href={ '/about' }>
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="menu-desktop" onClick={toggleMenu}>
          <svg style={ { width: 24, height: 24 } } viewBox="0 0 24 24">
            <path fill="#d9e1e8" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
          </svg>
        </div>
      </header>

    </Fragment>
  )
};

export default Nav;
