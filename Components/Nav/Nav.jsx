import React, { Fragment, useState } from 'react';
import Link from "next/link";

const Nav = () => {
  const [isOpen, openMenu] = useState(false);
  const toggleMenu = () => openMenu(!isOpen);

  const [isList, openList] = useState(false);
  const toggleList = () => openList(!isList);

  return (
    <Fragment>

      <header className={isOpen ? 'open' : 'close'}>
        <nav className="nav-links">
          <ul className={isList ? 'open' : 'close'}>
            <li>
              <p onClick={toggleList}>Découvrir</p>
              <ul className={isList ? 'open' : 'close'}>
                <li>Collections</li>
                <li>Artistes</li>
                <li>Archives</li>
                <li>
                  <Link href={'/gallery'}>
                    <a>Gallery</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <p>Acquérir</p>
            </li>
            <li>
              <p>Partager</p>
            </li>
          </ul>
        </nav>

        <div className="menu-desktop" onClick={toggleMenu}>
          <svg style={ { width: 34, height: 34 } } viewBox="0 0 24 24">
            <path fill="#d9e1e8" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
          </svg>
        </div>
      </header>

    </Fragment>
  )
};

export default Nav;
