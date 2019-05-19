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
  const toggleMenu = () => openMenu( !isOpen );

  const [ isList, openList ] = useState( null );
  const [ isListOpen, openOrNot ] = useState( false );
  const toggleList = (id) => {
    openOrNot(true);
    if (id !== isList) openOrNot(true);
    if (id === isList) openOrNot(!isListOpen);
    openList( id );
  };

  // noinspection JSUnresolvedVariable
  return (
    <Fragment>
      <header className={ isOpen ? 'open' : 'close' }>
        <nav className="nav-links">

          <ul>
            { nav.map( ( link, i ) =>
              <li key={ i }>
                { link.data.link_one_href[ 0 ].text
                  ? (
                    <Link href={ link.data.link_one_href[ 0 ].text }>
                      <a>{ link.data.link_one[ 0 ].text }</a>
                    </Link> )
                  : (
                    <Fragment>
                      <p id={ i } onClick={() => toggleList(i)}>{ link.data.link_one[ 0 ].text }</p>
                      <ul className={ isListOpen ? isList : '' }>
                        { link.data.body.map( ( sublink, i ) =>
                          sublink.primary.link_two_href[ 0 ].text
                            ? (
                              <li key={ i }>
                                <Link href={ sublink.primary.link_two_href[ 0 ].text }>
                                  <a>{ sublink.primary.link_two[ 0 ].text }</a>
                                </Link>
                              </li>
                            )
                            : (
                              <Fragment key={ i }>
                                <p>{ sublink.primary.link_two[ 0 ].text }</p>
                                <ul>
                                  { sublink.items.map( ( thirdLink, i ) =>
                                    <li style={ { paddingLeft: 40 } } key={ i }>
                                      <Link href={ thirdLink.link_three_href[ 0 ].text }>
                                        <a>{ thirdLink.link_three[ 0 ].text }</a>
                                      </Link>
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

        <div className="menu-desktop" onClick={ toggleMenu }>
          <svg style={ { width: 34, height: 34 } } viewBox="0 0 24 24">
            <path fill="#d9e1e8" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
          </svg>
        </div>
      </header>

      <style jsx>{`
        .nav-links ul > li ul {
          height: 0;
          opacity: 0;
          transition: .5s ease;
        }
        
        .nav-links ul > li:nth-of-type(${isListOpen && isList !== null && isList + 1}) ul {
          height: unset;
          opacity: 1;
          transition: .5s ease;
        }
        
        .nav-links ul > li ul a {
          pointer-events: none;
        }
      `}</style>

    </Fragment>
  )
};

export default connect( mapStateToProps )( Nav );
