import React, { Fragment, useEffect, useState } from 'react';
import Header                                   from './Nav.style';
import Link                          from 'next/link';
import { connect, useDispatch }      from 'react-redux';

import Newsletter          from './Newsletter.style';
import Credits             from './Credits.style';
import { navStatus }       from '../../store/actions/nav.action';
import OutsideAlerter      from '../../helpers/click-outside';
import COLORS              from '../../helpers/colors';
import { validateEmail }   from '../../helpers/functions';
import { subscribeToNews } from '../../helpers/mailchimp';

import FirstPanel                      from "./FirstPanel";
import SecondPanel                     from "./SecondPanel";
import ThirdPanel                      from "./ThirdPanel";

const mapStateToProps = state => ( { nav: state.nav.datas, navPosition: state.navPosition } );

const Nav = ( { nav, navPosition } ) => {
  const dispatch = useDispatch();

  const [ newsletter, toggleModal ] = useState( false );
  const isNewsletter = param => {
    if (param) {
      toggleModal && openMenu( false );
      setEmail( '' );
      setSuccess( 'Partagez-nous votre adresse email pour être tenu informé de nos prochains événements' );
      toggleModal( !newsletter );
      stateSubscribe( false );
      if (!newsletter) {
        dispatch( navStatus( !isOpen ) );
      }
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
  // const toggleMenu = () => {
  //   openMenu( !isOpen );
  //   openOrNot( false );
  //   dispatch( navStatus( !isOpen ) );
  // };

  // const [ isList, openList ] = useState( null );
  // const [ isListOpen, openOrNot ] = useState( false );
  // const toggleList = ( id ) => {
  //   openOrNot( true );
  //   openOrNot( false );
  //   setTimeout( () => {
  //     if (id !== isList) openOrNot( true );
  //     if (id === isList) openOrNot( !isListOpen );
  //     openList( id );
  //   }, 50 );
  // };

  const [firstPanel, toggleFirstPanel] = useState(false);

  const openFirstPanel = () => {
    toggleFirstPanel(true);
    dispatch( navStatus( true ) );
  };

  const [secondPanel, toggleSecondPanel] = useState(false);
  const [secondIndex, getSecondIndex] = useState(0);
  const openSecondPanel = (AsecondState, index) => {
    console.log('¨¨¨', thirdPanel);
    toggleSecondPanel(AsecondState);
    getSecondIndex(index);
  };

  const [thirdPanel, toggleThirdPanel] = useState(false);
  const [thirdIndex, getThirdIndex] = useState(0);
  const openThirdPanel = (thirdState, index) => {
    console.log('££', thirdPanel);
    toggleThirdPanel(thirdState);
    getThirdIndex(index);
  };

  const closeAllPan = () => {
    console.log('**', thirdPanel);
    debugger;
    // getSecondIndex(index);
    // getThirdIndex(index);
    toggleSecondPanel(false);
    toggleThirdPanel( false);
  };

  const closeFirstPanel = () => {
    console.log('_____', thirdPanel);
    toggleFirstPanel(false);
    toggleSecondPanel(false);
    toggleThirdPanel(false);
    dispatch( navStatus( false ) );
  };

  console.log('firstPanel', firstPanel);
  console.log('secondPanel', secondPanel);
  console.log('thirdPanel', thirdPanel);

  // noinspection JSUnresolvedVariable
  return (
    <Fragment>
      {/*<OutsideAlerter*/}
      {/*  method={ toggleMenu }*/}
      {/*  isActive={ isOpen }*/}
      {/*>*/}

        <FirstPanel
          nav={nav}
          open={firstPanel}
          openSecondPanel={openSecondPanel}
          secondIndex={secondIndex}
          openThirdPanel={openThirdPanel}
          thirdIndex={thirdIndex}
          closePan={closeFirstPanel}
        />
        <SecondPanel
          nav={nav}
          open={secondPanel}
          index={secondIndex}
          openThirdPanel={openThirdPanel}
          closeAllPan={closeAllPan}
          isNewsletter={isNewsletter}
        />
        <ThirdPanel
          nav={nav}
          open={thirdPanel}
          thirdIndex={thirdIndex}
          // openThirdPanel={openThirdPanel}
        />

        <Header.MenuBtn open={ firstPanel } onClick={ () => openFirstPanel() }>
          <Header.Burger open={ firstPanel }/>
        </Header.MenuBtn>

      {/*</OutsideAlerter>*/}

      <Newsletter newsletter={ newsletter }>
        <Newsletter.Wrapper>
          <Newsletter.SuccessMessage>{ success }</Newsletter.SuccessMessage>
          <Newsletter.CloseBtn onClick={ () => isNewsletter( true ) }>
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
              <path fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 0H9L5 4L1 0H0V1L4 5L0 9V10H1L5 6L9 10H10V9L6 5L10 1V0Z"
                    fill={ COLORS.lightGrey }/>
            </svg>
          </Newsletter.CloseBtn>

          <Newsletter.Form onSubmit={ e => onSubmit( e, email ) }>
            <Newsletter.InputWrapper>
              <Newsletter.Label htmlFor="mail">Adresse e-mail :</Newsletter.Label>
              <Newsletter.InputEmail
                id="mail"
                type="email"
                placeholder="e-mail"
                onChange={ ( e ) => handlerEmail( e.target.value ) } value={ email }
                color={ COLORS.lightGrey }
              />
            </Newsletter.InputWrapper>

            { isLoding ? ( <Newsletter.LdsRipple>
              <div/>
              <div/>
            </Newsletter.LdsRipple> ) : ( !successState ? (
              <Newsletter.SubmitBtn color={ COLORS.lightGrey } type="submit" value="S'inscrire"/>
            ) : (
              <Newsletter.SubmitBtn
                color={ COLORS.lightGrey }
                type="button"
                value="Fermer"
                onClick={ () => isNewsletter( true ) }
              />
            ) ) }
          </Newsletter.Form>
        </Newsletter.Wrapper>
      </Newsletter>

      {/*<Credits credits={ credits }>*/}
      {/*  <Credits.Wrapper>*/}
      {/*    <Credits.CloseBtn onClick={ () => isCredits( true ) }>*/}
      {/*      <svg width="12" height="12" viewBox="0 0 10 10" fill="none">*/}
      {/*        <path fillRule="evenodd"*/}
      {/*              clipRule="evenodd"*/}
      {/*              d="M10 0H9L5 4L1 0H0V1L4 5L0 9V10H1L5 6L9 10H10V9L6 5L10 1V0Z"*/}
      {/*              fill={ COLORS.almostBlack }/>*/}
      {/*      </svg>*/}
      {/*    </Credits.CloseBtn>*/}
      {/*    <Credits.Title>CREDIT</Credits.Title>*/}
      {/*    <Credits.Subtitle>Development</Credits.Subtitle>*/}
      {/*    <Credits.Div>*/}
      {/*      Masis Gulmez*/}
      {/*      <Credits.Span>masis.profesionnel@gmail.com</Credits.Span>*/}
      {/*    </Credits.Div>*/}
      {/*    <Credits.Div>*/}
      {/*      Cédric Salaün*/}
      {/*      <Credits.Span>salaun.cedric@gmail.Com</Credits.Span>*/}
      {/*    </Credits.Div>*/}
      {/*  </Credits.Wrapper>*/}
      {/*</Credits>*/}

      {/* TODO NE PAS EFFACER POUR LE MOMENT */ }
      {/*<div className={ newsletter ? 'open-newsletter' : 'close-newsletter' }>*/ }
      {/*  <div className="newsletter-wrapper">*/ }
      {/*    <p>{ success }</p>*/ }
      {/*    <div className="close-newsletter-btn" onClick={ () => isNewsletter( 'newsletter' ) }>X</div>*/ }
      {/*    <form onSubmit={ e => onSubmit( e, email ) }>*/ }
      {/*      <div className="input-wrapper">*/ }
      {/*        <label htmlFor="mail">Adresse e-mail :</label>*/ }
      {/*        <input*/ }
      {/*          id="mail"*/ }
      {/*          type="email"*/ }
      {/*          placeholder="e-mail"*/ }
      {/*          onChange={ ( e ) => handlerEmail( e.target.value ) } value={ email }*/ }
      {/*        />*/ }
      {/*      </div>*/ }
      {/*      { isLoding ? ( <div className="lds-ripple">*/ }
      {/*        <div/>*/ }
      {/*        <div/>*/ }
      {/*      </div> ) : ( !successState ? (*/ }
      {/*        <input className="btn-submit" type="submit" value="S'inscrire"/>*/ }
      {/*      ) : (*/ }
      {/*        <input className="btn-submit" type="button" value="Fermer"*/ }
      {/*               onClick={ () => isNewsletter( 'newsletter' ) }/>*/ }
      {/*      ) ) }*/ }
      {/*    </form>*/ }
      {/*  </div>*/ }
      {/*</div>*/ }

      {/* <style jsx>{ `
       form input[type="email"] {
       border: 1px solid ${ COLORS.lightGrey };
       color: ${ COLORS.lightGrey };
       border-radius: 2px !important;
       letter-spacing: 2px;
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
       ` }</style> */ }

      <style jsx global>{ `
      .head-wrapper {
        z-index: ${ newsletter ? '51' : '50' };
      }
      ` }</style>
    </Fragment>
  );
};

export default connect( mapStateToProps, navStatus )( Nav );
