import Router                                   from 'next/router';
import React, { Fragment, useState, useEffect } from 'react';
import { parseCookies, setCookie }              from 'nookies';

import CookiesBanner from './Cookies.style';

import { initGA, logPageView } from '../../helpers/analytics';
import { clearCookies }        from '../../helpers/cookies';
import COLORS                  from '../../helpers/colors';

const Cookies = () => {
  
  const maxAge = 365 * 24 * 60 * 60 * 1000;
  const path = '/';
  const [ choice, setChoice ] = useState(true);
  
  const [ more, showMore ] = useState(false);
  const showChoices = () => showMore(!more);
  
  const [ btnText, setBtnText ] = useState('OK, tout accepter');
  const acceptCookies = () => {
    const accepted = document.getElementById('accept');
    accepted.checked && setBtnText('OK, tout accepter');
    setChoice(true);
  };
  const refuseCokies = () => {
    const refused = document.getElementById('refuse');
    refused.checked && setBtnText('Tout refuser');
    setChoice(false);
  };
  
  const [ isSelected, setSelection ] = useState(true);
  
  const setSelectionState = () => {
    if (!isSelected) {
      if (!more || !choice.length) {
        setChoice(true);
      }
      setSelection(true);
      document.cookie = `lou=${ choice ? 'enable' : 'disable' };expires=${ new Date };`;
      setSelection(true);
      if (!more || !choice.length) {
        setCookie({}, 'lou', 'enable', { maxAge, path });
      } else {
        setCookie({}, 'lou', `${ choice ? 'enable' : 'disable' }`, { maxAge, path });
      }
    }
  };
  
  useEffect(() => {
    const cookies = parseCookies();
    if (cookies.lou === 'enable') {
      console.log('enable');
      setChoice(true);
      initGA();
      // logPageView();
      // Router.router.events.on('routeChangeComplete', logPageView);
    } else {
      setChoice(false);
      clearCookies(cookies);
      if (cookies.lou === 'init') { setSelection(false); }
    }
  }, isSelected);
  
  return (
    <Fragment>
      {/*{ !isSelected &&*/ }
      <CookiesBanner accepted={ isSelected } showMore={ more }>
        <CookiesBanner.Wrapper>
          <CookiesBanner.Infos>
            En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de
            cookies
            qui optimisent votre
            expérience utilisateurs et qui nous permettent d'analyser notre trafic.
            <CookiesBanner.Details showMore={ more }>
              <p>Cookies de performance</p>
              <p>Ces cookies nous permettent de déterminer le nombre de visites et les sources du trafic sur notre
                site
                web, afin d'en mesurer et d'en améliorer les performances. ils nous aident également à identifier les
                pages les plus / moins visitées et à évaluer comment les visiteurs naviguent sur le site. Toutes les
                informations, collectées par ces cookies, sont agrégées et donc anonymisées. Si vous n'acceptez pas
                cette
                catégorie de cookies, nous ne pourrons pas savoir quand vous avez réalisé votre visite sur notre site
                web.</p>
            </CookiesBanner.Details>
          </CookiesBanner.Infos>
          <CookiesBanner.BigWrapper showMore={ more }>
            <CookiesBanner.ChoiceWrapper>
              { !more &&
                <CookiesBanner.Button borderBottom={ `1px solid ${ COLORS.white }` } onClick={ setSelectionState }>
                  OK, tout accepter
                </CookiesBanner.Button>
              }
              { more &&
                <Fragment>
                  <CookiesBanner.Button
                    border={ `1px solid ${ COLORS.lightGrey }` }
                    padding={ '5px 10px' }
                    onClick={ setSelectionState }>
                    { btnText }
                  </CookiesBanner.Button>
                  <CookiesBanner.SelectChoice>
                    <CookiesBanner.SelectChoiceWrapper marginRight={ '1rem' }>
                      <CookiesBanner.Label htmlFor="accept">Accepter</CookiesBanner.Label>
                      <CookiesBanner.AcceptedInput
                        type="radio"
                        id="accept"
                        name="cookie"
                        choice={ choice }
                        onClick={ acceptCookies }
                      />
                    </CookiesBanner.SelectChoiceWrapper>
                    <CookiesBanner.SelectChoiceWrapper>
                      <CookiesBanner.Label htmlFor="refuse">Refuser</CookiesBanner.Label>
                      <CookiesBanner.RefusedInput
                        type="radio"
                        id="refuse"
                        name="cookie"
                        choice={ choice }
                        onClick={ refuseCokies }
                      />
                    </CookiesBanner.SelectChoiceWrapper>
                  </CookiesBanner.SelectChoice>
                </Fragment>
              }
            </CookiesBanner.ChoiceWrapper>
            <CookiesBanner.ChoiceWrapper>
              <CookiesBanner.Button
                onClick={ showChoices }>{ !more ? 'En savoir plus' : 'En voir moins' }{ choice }</CookiesBanner.Button>
            </CookiesBanner.ChoiceWrapper>
          </CookiesBanner.BigWrapper>
        </CookiesBanner.Wrapper>
      </CookiesBanner>
      {/*}*/ }
    </Fragment>
  );
};

export default Cookies;
