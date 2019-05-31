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

  const [ newsletter, toggleModal ] = useState(false);
  const isNewsletter = param => {
    if (param.toLowerCase() === 'newsletter') {
      toggleModal && openMenu(false);
      toggleModal( !newsletter );
    }
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
                          sublink.primary.link_to_level_two.uid || sublink.primary.link_to_level_two.url ?
                            (
                              sublink.primary.link_to_level_two.uid
                                ? (
                                  <li key={ i }>
                                    <Link href={ `/${ sublink.primary.link_to_level_two.uid }` }>
                                      <a>{ sublink.primary.link_two[ 0 ].text !== undefined && sublink.primary.link_two[ 0 ].text  }</a>
                                    </Link>
                                  </li>
                                )
                                : (
                                  <li key={ i }>
                                    <Link href={ `${ sublink.primary.link_to_level_two.url }` }>
                                      <a target="_blank">{ sublink.primary.link_two[ 0 ].text !== undefined && sublink.primary.link_two[ 0 ].text  }</a>
                                    </Link>
                                  </li>
                                )
                            )
                            : (
                              <Fragment key={ i }>
                                <p className="except" onClick={ () => isNewsletter(sublink.primary.link_two[0].text)}>{ sublink.primary.link_two[ 0 ].text }</p>
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

      <div className={newsletter ? 'open-newsletter' : 'close-newsletter'}>
        <div className="newsletter-wrapper">
          <p>Inscrivez-vous à notre newsletter</p>
          <div className="close-newsletter-btn" onClick={() => isNewsletter('newsletter')}>X</div>
          <form>
            <div className="input-wrapper">
              <label htmlFor="mail">Adresse e-mail :</label>
              <input id="mail" type="email" placeholder="monemail@gmail.com" />
            </div>
            <input type="submit" value="S'inscrire" />
          </form>
        </div>
      </div>

      <style jsx>{`
      .close-newsletter {
        position: fixed;
        width: 100%;
        height: 100vh;
        bottom: -100%;
        opacity: 0;
        transition: .3s ease-in-out;
      }
      .open-newsletter {
        opacity: 1;
        position: fixed;
        width: 100%;
        height: 100vh;
        background: rgba(84, 110, 122, .6);
        transition: .3s ease-in-out;
      }
      .newsletter-wrapper {
        padding: 4rem;
        background: #080808;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40%;
        height: 50%;
      }
      .newsletter-wrapper p {
        text-align: center;
        font-size: 1.5rem;
      }
      .newsletter-wrapper form {
        width: 100%;
        height: calc(100% - 4rem);
        margin-top: 3rem;
      }
      .input-wrapper {
        margin-bottom: 3rem;
      }
      form label {
        text-align: center;
        margin-bottom: 2rem;
      }
      form input {
        line-height: 4;
        padding-left: 1rem;
        border-radius: 4px;
        border: none;
        margin: 0 auto;
      }
      .newsletter-wrapper form label, form input {
        display: block; 
      }
      input[type="email"] {
        width: 50%;
      }
      input[type="submit"] {
        margin-top: 1rem;
        padding: 0 1rem;
        display: table;
      }
      .close-newsletter-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
      }
      
      
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
