import React, { Fragment, useEffect, useState } from 'react';
import Header                                   from './Nav.style';
// import Link                                     from 'next/link';
import { connect, useDispatch }                 from 'react-redux';

import Newsletter          from './Newsletter.style';
// import Credits             from './Credits.style';
import { navStatus }       from '../../store/actions/nav.action';
// import OutsideAlerter      from '../../helpers/click-outside';
import COLORS              from '../../helpers/colors';
import { validateEmail }   from '../../helpers/functions';
import { subscribeToNews } from '../../helpers/mailchimp';

// import { useSpring, animated, config } from 'react-spring';
import SecondPanel                     from "./SecondPanel";
import ThirdPanel                      from "./ThirdPanel";
import FirstPanel                      from "./FirstPanel";

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

  // const [ isList, openList ] = useState( null );
  const [ isListOpen, openOrNot ] = useState( false );
  // const toggleList = ( id ) => {
  //   openOrNot( true );
  //   openOrNot( false );
  //   setTimeout( () => {
  //     if (id !== isList) openOrNot( true );
  //     if (id === isList) openOrNot( !isListOpen );
  //     openList( id );
  //   }, 50 );
  // };

  // const props = useSpring( {
  //   reset: true,
  //   reverse: false,
  //   immediate: false,
  //   config: { duration: 300, ...config.default },
  //   to: {
  //     height: isListOpen ? 'auto' : 0,
  //     lineHeight: isListOpen ? 2.5 : 0,
  //     opacity: isListOpen ? 1 : 0,
  //     marginBottom: isListOpen ? 15 : 'unset'
  //   },
  //   from: { height: 0, lineHeight: 0, opacity: 0, paddingLeft: 40 }
  // } );

  const [ isOpen, openMenu ] = useState( false );
  const toggleMenu = () => {
    openMenu( !isOpen );
    toggleSecondPanel( false );
    toggleThirdPanel( false );
    openOrNot( false );
    dispatch( navStatus( !isOpen ) );
  };

  const [ index, setIndex ] = useState(0);

  const [ type, setType ] = useState(null);
  const handleType = e => setType(e.target.getAttribute('id'));

  const [ secondPanel, toggleSecondPanel ] = useState( false );
  const handleSecondPanel = i => {
    toggleSecondPanel( true );
    setIndex(i);
  };

  const [ thirdPanel, toggleThirdPanel ] = useState( false );
  const handleThirdPanel = () => toggleThirdPanel( true );

  useEffect( () => {
    !secondPanel && toggleThirdPanel( false );
  }, [ secondPanel, thirdPanel, index, type ] );

  // noinspection JSUnresolvedVariable
  return (
    <Fragment>

      <Header open={ isOpen }>

        <Header.MenuBtn onClick={ toggleMenu }>
          <Header.Burger open={ isOpen }/>
        </Header.MenuBtn>

        <FirstPanel
          index={ index }
          nav={ nav }
          handleSecondPanel={ handleSecondPanel }
          secondPanel={ secondPanel }
          handleThirdPanel={ handleThirdPanel }
          isNewsletter={isNewsletter}
          open={ isOpen }
          closePanel={ toggleMenu }
        />
        <SecondPanel
          index={ index }
          nav={ nav }
          secondPanel={ secondPanel }
          handleThirdPanel={ handleThirdPanel }
          handleType={ handleType }
        />
        <ThirdPanel
          index={ index }
          nav={ nav }
          secondPanel={ secondPanel }
          thirdPanel={ thirdPanel }
          type={type}
        />

      </Header>

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

    </Fragment>
  );
};

export default connect( mapStateToProps, navStatus )( Nav );
