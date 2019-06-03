import React, { Fragment, useState } from 'react';
import Link from "next/link";

import { connect }         from "react-redux";
import COLORS              from "../../helpers/colors";
import { validateEmail }   from '../../helpers/functions';
import { subscribeToNews } from '../../helpers/mailchimp';

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
      setEmail('');
      setSuccess('Partagez-nous votre adresse email pour être tenu informé de nos prochains événements');
      toggleModal( !newsletter );
    }
  };

  const [ email, setEmail ] = useState( '' );
  const handlerEmail = email => setEmail( email );

  const [ success, setSuccess ] = useState('Partagez-nous votre adresse email pour être tenu informé de nos prochains événements');
  const message = msg => setSuccess(msg);

  const onSubmit = async (e, email) => {
    e.preventDefault();
    if (!!email && validateEmail(email)) {
      subscribeToNews(email);
      message('Vous êtes bien inscrit à notre newsletter. Merci !');
    } else {
      message('Une erreur c\'est produite.');
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
                                <p
                                  className={`except ${sublink.primary.link_two[0].text.toLowerCase() === 'newsletter' ? 'underline' : null}`}
                                  onClick={ () => isNewsletter(sublink.primary.link_two[0].text)}
                                >
                                  <span>{ sublink.primary.link_two[ 0 ].text }</span>
                                </p>
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
          <p>{success}</p>
          <div className="close-newsletter-btn" onClick={() => isNewsletter('newsletter')}>X</div>
          <form onSubmit={ e => onSubmit(e, email) }>
            <div className="input-wrapper">
              <label htmlFor="mail">Adresse e-mail :</label>
              <input
                id="mail"
                type="email"
                placeholder="e-mail"
                onChange={ ( e ) => handlerEmail( e.target.value ) } value={ email }
              />
            </div>
            <input type="button" value="S'inscrire"/>
          </form>
        </div>
      </div>

      <style jsx>{`
      form input[type="email"] {
        border: 1px solid ${COLORS.lightGrey};
        color: ${COLORS.lightGrey};
        border-radius: 0 !important;
      }
      form input[type="button"] {
        margin-top: 1rem;
        padding: 0 1rem;
        display: table;
        background: #080808;
        color: ${COLORS.lightGrey};
        border: 1px solid ${COLORS.lightGrey};
        cursor: pointer;
        border-radius: 0 !important;
        -webkit-appearance: none !important;
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

      <style jsx global>{`
      .head-wrapper {
        z-index: ${newsletter ? '51' : '50'};
      }
      `}</style>

    </Fragment>
  )
};

export default connect( mapStateToProps )( Nav );
