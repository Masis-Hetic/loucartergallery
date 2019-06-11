import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import OutsideAlerter from '../../helpers/click-outside';
import COLORS from '../../helpers/colors';
import { validateEmail } from '../../helpers/functions';
import { subscribeToNews } from '../../helpers/mailchimp';

import { useSpring, animated, config } from 'react-spring';

const mapStateToProps = state => ( { nav: state.nav.datas } );

const Nav = ( { nav } ) => {
  const [ newsletter, toggleModal ] = useState( false );
  const isNewsletter = param => {
    if (param.toLowerCase() === 'newsletter') {
      toggleModal && openMenu( false );
      setEmail( '' );
      setSuccess( 'Partagez-nous votre adresse email pour être tenu informé de nos prochains événements' );
      toggleModal( !newsletter );
      stateSubscribe( false );
    }
  };

  const [ email, setEmail ] = useState( '' );
  const handlerEmail = email => setEmail( email );

  const [ success, setSuccess ] = useState( 'Partagez-nous votre adresse email pour être tenu informé de nos prochains événements' );
  const message = msg => setSuccess( msg );

  const [ successState, setSuccessState ] = useState( false );
  const stateSubscribe = state => setSuccessState( state );

  const [ isLoding, setLoding ] = useState( false );
  const stateLoding = state => setLoding( state );

  const onSubmit = async ( event, email ) => {
    event.preventDefault();
    stateLoding( true );
    if (!!email && validateEmail( email )) {
      subscribeToNews( email ).then( ( response ) => {
        // noinspection JSUnresolvedVariable
        if (!!response.data && ( response.data.status === 200 || response.data.status === 'subscribed' )) {
          message( 'Vous êtes bien inscrit à notre newsletter. Merci !' );
        } else {
          message( response.data && response.data.title || 'Une erreur s\'est produite.' );
        }
      } ).catch( ( error ) => {
        message(
          error && error.response && error.response.data && error.response.data.title || 'Une erreur s\'est produite.'
        );
      } );
      stateSubscribe( true );
    } else {
      message( 'Votre adresse e-mail est erronée.' );
    }
    stateLoding( false );
  };

  const [ isOpen, openMenu ] = useState( false );
  const toggleMenu = () => {
    openMenu( !isOpen );
    openOrNot( false );
  };

  const [ isList, openList ] = useState( null );
  const [ isListOpen, openOrNot ] = useState( false );
  const toggleList = ( id ) => {
    openOrNot( true );
    openOrNot( false );
    setTimeout(() => {
      if (id !== isList) openOrNot( true );
      if (id === isList) openOrNot( !isListOpen );
      openList( id );
    }, 50)
  };

  const props = useSpring( {
    reset: true,
    reverse: false,
    immediate: false,
    config: { duration: 300, ...config.default },
    to: {
      height: isListOpen ? 'auto' : 0,
      lineHeight: isListOpen ? 2.5 : 0,
      opacity: isListOpen ? 1 : 0,
      marginBottom: isListOpen ? 15 : 'unset'
    },
    from: { height: 0, lineHeight: 0, opacity: 0, paddingLeft: 40 }
  } );


  const [ size, setSize ] = useState([100, 0]);
  useEffect(() => {
    if (window && window.outerWidth <= 576) setSize([-100, 0]);
  }, [isOpen]);
  const openHeader = useSpring({ transform: isOpen ? `translateX(${size[0]}%)` : `translateX(${size[1]}%)` });

  // noinspection JSUnresolvedVariable
  return (
    <Fragment>
      <OutsideAlerter method={ toggleMenu } isActive={ isOpen }>
        <animated.header style={ openHeader }>
          <nav className="nav-links">

            <ul>
              { nav.map( ( link, i ) =>
                <li key={ i }>
                  { link.data.link_to.uid
                    ? (
                      <Link href={ `/${ link.data.link_to.uid }` }>
                        <a>{ link.data.link_one[ 0 ].text }</a>
                      </Link>
                    )
                    : (
                      <Fragment>
                        <div
                          id={ i }
                          onClick={ () => toggleList( i ) }
                        >
                          <p>{ link.data.link_one[ 0 ].text }</p>

                          { isList === i && isListOpen &&
                            <animated.ul style={ props }>
                              { link.data.body.map( ( sublink, i ) =>
                                sublink.primary.link_to_level_two.uid || sublink.primary.link_to_level_two.url ?
                                  (
                                    sublink.primary.link_to_level_two.uid
                                      ? (
                                        <li key={ i }>
                                          <Link href={ `/${ sublink.primary.link_to_level_two.uid }` }>
                                            <a>
                                              <span>{ sublink.primary.link_two[ 0 ].text !== undefined && sublink.primary.link_two[ 0 ].text }</span></a>
                                          </Link>
                                        </li>
                                      )
                                      : (
                                        <li key={ i }>
                                          <Link href={ `${ sublink.primary.link_to_level_two.url }` }>
                                            <a
                                              target="_blank">
                                              <span>{ sublink.primary.link_two[ 0 ].text !== undefined && sublink.primary.link_two[ 0 ].text }</span></a>
                                          </Link>
                                        </li>
                                      )
                                  )
                                  : (
                                    <Fragment key={ i }>
                                      <p
                                        className={ `except ${ sublink.primary.link_two[ 0 ].text.toLowerCase() === 'newsletter' ? 'underline' : null }` }
                                        onClick={ () => isNewsletter( sublink.primary.link_two[ 0 ].text ) }
                                      >
                                        <span>{ sublink.primary.link_two[ 0 ].text }</span>
                                      </p>
                                      <ul style={{ paddingLeft: 40 }}>
                                        { sublink.items.map( ( thirdLink, i ) =>
                                          <li key={ i } onClick={ toggleMenu }>
                                            { thirdLink.link_three[ 0 ].text === undefined ? null :
                                              thirdLink.link_three_href[ 0 ].text !== ''
                                                ? (
                                                  <Link
                                                    href={ `/${ thirdLink.link_three_href[ 0 ].text }?slug=${ thirdLink.link_to_level_three.uid }` }
                                                    as={ `/${ thirdLink.link_three_href[ 0 ].text }/${ thirdLink.link_to_level_three.uid }` }
                                                  >
                                                    <a>
                                                      <span>{ thirdLink.link_three[ 0 ].text }</span></a>
                                                  </Link>
                                                )
                                                : (
                                                  <Link href={ `/${ thirdLink.link_to_level_three.uid }` }>
                                                    <a>
                                                      <span>{ thirdLink.link_three[ 0 ].text }</span></a>
                                                  </Link>
                                                )
                                            }
                                          </li>
                                        ) }
                                      </ul>
                                    </Fragment>
                                  )
                              ) }
                            </animated.ul>
                          }
                        </div>
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
        </animated.header>
      </OutsideAlerter>

      <div className={ newsletter ? 'open-newsletter' : 'close-newsletter' }>
        <div className="newsletter-wrapper">
          <p>{ success }</p>
          <div className="close-newsletter-btn" onClick={ () => isNewsletter( 'newsletter' ) }>X</div>
          <form onSubmit={ e => onSubmit( e, email ) }>
            <div className="input-wrapper">
              <label htmlFor="mail">Adresse e-mail :</label>
              <input
                id="mail"
                type="email"
                placeholder="e-mail"
                onChange={ ( e ) => handlerEmail( e.target.value ) } value={ email }
              />
            </div>
            { isLoding ? ( <div className="lds-ripple">
              <div/>
              <div/>
            </div> ) : ( !successState ? (
              <input className="btn-submit" type="submit" value="S'inscrire"/>
            ) : (
              <input className="btn-submit" type="button" value="Fermer"
                     onClick={ () => isNewsletter( 'newsletter' ) }/>
            ) ) }
          </form>
        </div>
      </div>

      <style jsx>{ `
      form input[type="email"] {
        border: 1px solid ${ COLORS.lightGrey };
        color: ${ COLORS.lightGrey };
        border-radius: 2px !important;
      }
      form input.btn-submit {
        margin-top: 1rem;
        padding: 0 1rem;
        display: table;
        background: #080808;
        color: ${ COLORS.lightGrey };
        border: 1px solid ${ COLORS.lightGrey };
        cursor: pointer;
        border-radius: 2px !important;
        -webkit-appearance: none !important;
      }
      ` }</style>

      <style jsx global>{ `
      .head-wrapper {
        z-index: ${ newsletter ? '51' : '50' };
      }
      ` }</style>
    </Fragment>
  );
};

export default connect( mapStateToProps )( Nav );
