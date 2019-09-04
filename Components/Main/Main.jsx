import React       from 'react';
import Main        from "./Main.style";
import { connect } from "react-redux";
import Link        from "next/link";
import Nav         from "../Nav/Nav";
import Cookies     from "../Cookies/Cookies";

const mapStateToProps = state => ( {
  nav: state.nav.status,
  overflow: state.overflow,
  navPosition: state.navPosition
} );

const MainComponent = props => (
  <Main overflowStatus={ props.overflow }>
    <Main.LogoWrapper>
      <Link href="/" as="/" passHref={true}>
        <Main.Logo navStatus={ props.nav } style={ { position: `${ props.navPosition.data ? 'fixed' : 'absolute'}`, top: 20, left: 20, zIndex: 500 } }>
          <Main.Img src="../../static/icons/loucarter_logo_copie.png" alt="" style={ { maxWidth: '14rem' } }/>
        </Main.Logo>
      </Link>
    </Main.LogoWrapper>

    <Nav/>

    { props.children }

    <Cookies/>
  </Main>
);

export default connect( mapStateToProps )( MainComponent );
