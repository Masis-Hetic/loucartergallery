import React from 'react';
import Link from "next/link";

const Nav = () => (
  <header>
    <p>Collections</p>
    <nav className="nav-links">
      <ul>
        <li>SS19</li>
        <li>FW19/20</li>
        <li>Artistes</li>
        <li>Archives</li>
        <li>
          <Link href={'/about'}>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;
