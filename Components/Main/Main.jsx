import React       from 'react';
import Main        from "./Main.style";
import { connect } from "react-redux";
import Link        from "next/link";
import Nav         from "../Nav/Nav";
import Cookies     from "../Cookies/Cookies";

const mapStateToProps = state => ( { nav: state.nav.status } );

const MainComponent = props => (
  <Main>
    <Main.LogoWrapper>
      <Link href={ '/' }>
        <Main.Logo navStatus={ props.nav } style={ { position: 'absolute', top: 20, left: 20, zIndex: 100 } }>
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
