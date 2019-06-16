import React from 'react';

import Link from "next/link";
import Nav from "../Nav/Nav";
import Cookies from "../Cookies/Cookies";

const MainComponent = props => (
  <main className="clearfix">

    <div className="logo-wrapper">
      <Link href={ '/' }>
        <a className="logo">
          <img src="../../static/icons/loucarter_logo.png" alt=""/>
        </a>
      </Link>
    </div>
    <div className="head-wrapper">

    </div>
    <Nav/>

    { props.children }

    <Cookies/>
  </main>
);

export default MainComponent;
