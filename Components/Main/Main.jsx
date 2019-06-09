import React from 'react';

import Link from "next/link";
import Nav from "../Nav/Nav";

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

    </div>
    <Nav />

    { props.children }

  </main>
);

export default MainComponent;
