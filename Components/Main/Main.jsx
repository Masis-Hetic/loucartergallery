import React from 'react';

import MenuBurger from '../Nav/MenuBurger';
import Link from "next/link";
import Nav from "../Nav/Nav";

// TODO remplacer le texte "lou carter gallery" par un logo

const MainComponent = props => (
  <main className="clearfix">

    <div className="head-wrapper">
      <Link href={'/'}>
        <a className="logo">
          <span>
            lou <br/>
            carter <br/>
          </span>
          <span>
            gallery
          </span>
        </a>
      </Link>

      <Nav />

      <MenuBurger/>

    </div>

    { props.children }

  </main>
);

export default MainComponent;
