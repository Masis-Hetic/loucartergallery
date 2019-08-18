import React       from 'react';
import { connect } from "react-redux";
import Main        from "./Main.style";

import Link    from "next/link";
import Nav     from "../Nav/Nav";
import Cookies from "../Cookies/Cookies";

const mapStateToProps = state => ( { nav: state.nav.status } );

const MainComponent = props => (
  <main>
    <Main.LogoWrapper>
      <Link href={ '/' }>
        <Main.Logo navStatus={ props.nav }>
          <Main.Img src="../../static/icons/loucarter_logo.png" alt=""/>
        </Main.Logo>
      </Link>
    </Main.LogoWrapper>

      <Nav/>

      { props.children }

      <Cookies/>
  </main>
);

export default connect( mapStateToProps )( MainComponent );
