import React       from 'react';
import { connect } from 'react-redux';
import Link        from 'next/link';

import Main    from './Main.style';
import Nav     from '../Nav/Nav';
import Cookies from '../Cookies/Cookies';

const mapStateToProps = state => ({
  nav        : state.nav.status,
  overflow   : state.overflow,
  navPosition: state.navPosition
});

const MainComponent = props => (
  <Main overflowStatus={ props.overflow }>
    <Main.LogoWrapper>
      <Link href={ { pathname: '/' } } as={ '/' }>
        <Main.Logo navStatus={ props.nav }
          style={{
            position: 'fixed',
            top     : 20,
            left    : 20,
          }}
        >
          <Main.Img
            src="/static/icons/loucarter_logo_copie.png" alt=""
            style={ { maxWidth: '14rem' } }
          />
        </Main.Logo>
      </Link>
    </Main.LogoWrapper>

    <Nav/>

    { props.children }

    <Cookies/>
  </Main>
);

export default connect(mapStateToProps)(MainComponent);
