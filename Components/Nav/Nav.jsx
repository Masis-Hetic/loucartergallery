import React, { Fragment, useState } from 'react';
import Link from "next/link";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    nav: state.nav.datas
  }
};

const Nav = ( { nav } ) => {
  const [ isOpen, openMenu ] = useState( false );
  const toggleMenu = () => {
    openMenu( !isOpen );
    openOrNot(false);
  };

  const [ isList, openList ] = useState( null );
  const [ isListOpen, openOrNot ] = useState( false );
  const toggleList = ( id ) => {
    openOrNot( true );
    if (id !== isList) openOrNot( true );
    if (id === isList) openOrNot( !isListOpen );
    openList( id );
  };

  // noinspection JSUnresolvedVariable
  return (
    <Fragment>
      <header className={ isOpen ? 'open' : 'close' }>
        <nav className="nav-links">

          <ul>
            { nav.map( ( link, i ) =>
              <li key={ i } className={ isListOpen ? 'open' : 'close' }>
                { link.data.link_to.uid
                  ? (
                    <Link href={ `/${ link.data.link_to.uid }` }>
                      <a>{ link.data.link_one[ 0 ].text }</a>
                    </Link>
                  )
                  : (
                    <Fragment>
                      <p id={ i } className="except" onClick={ () => toggleList( i ) }>{ link.data.link_one[ 0 ].text }</p>
                      <ul className={ isListOpen ? `${ isList } test` : '' }>
                        { link.data.body.map( ( sublink, i ) =>
                          sublink.primary.link_to_level_two && sublink.primary.link_to_level_two.uid
                            ? (
                              <li key={ i }>
                                <Link href={ `/${ sublink.primary.link_to_level_two.uid }` }>
                                  <a>{ sublink.primary.link_two[ 0 ].text !== undefined && sublink.primary.link_two[ 0 ].text  }</a>
                                </Link>
                              </li>
                            )
                            : (
                              <Fragment key={ i }>
                                <p className="except">{ sublink.primary.link_two[ 0 ].text }</p>
                                <ul className={ `third-step ${ isListOpen ? 'open' : 'close' }` }>
                                  { sublink.items.map( ( thirdLink, i ) =>
                                    <li key={ i } onClick={ toggleMenu }>
                                      {thirdLink.link_three[0].text === undefined ? null :
                                        thirdLink.link_three_href[0].text !== ''
                                        ? (
                                          <Link
                                            href={ `/${ thirdLink.link_three_href[ 0 ].text }?slug=${ thirdLink.link_to_level_three.uid }` }
                                            as={ `/${ thirdLink.link_three_href[ 0 ].text }/${ thirdLink.link_to_level_three.uid }` }
                                          >
                                            <a>{ thirdLink.link_three[ 0 ].text }</a>
                                          </Link>
                                          )
                                        : (
                                          <Link href={ `/${ thirdLink.link_to_level_three.uid }` }>
                                            <a>{ thirdLink.link_three[ 0 ].text }</a>
                                          </Link>
                                        )
                                      }
                                    </li>
                                  ) }
                                </ul>
                              </Fragment>
                            )
                        ) }
                      </ul>
                    </Fragment>
                  )
                }
              </li>
            ) }
          </ul>

        </nav>

        <div className={ `menu-desktop ${ isOpen ? 'active' : '' }` } onClick={ toggleMenu }>
          <span className="burger"/>
        </div>
      </header>

      <style jsx>{`
        .nav-links ul > li ul {
          height: 0;
          opacity: 0;
          transition: .1s ease-in-out;
        }
        
        .nav-links ul > li:nth-of-type(${ isListOpen && isList !== null && isList + 1 }) ul {
          height: unset;
          opacity: 1;
          transition: .4s ease-in-out;
        }
      `}</style>

    </Fragment>
  )
};

export default connect( mapStateToProps )( Nav );
