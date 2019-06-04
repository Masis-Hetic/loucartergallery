import React from 'react';

// import MenuBurger from '../Nav/MenuBurger';
import Link from "next/link";
import Nav from "../Nav/Nav";

// TODO remplacer le texte "lou carter gallery" par un logo

const MainComponent = props => (
  <main className="clearfix">

    <div className="head-wrapper">
      <div className="logo-wrapper">
        <Link href={'/'}>
          <a className="logo">
            <img src="../../static/icons/loucarter_logo.png" alt="" />
          </a>
        </Link>
      </div>

      <Nav />

      {/*<MenuBurger/>*/}

    </div>

    { props.children }

  </main>
);

export default MainComponent;
