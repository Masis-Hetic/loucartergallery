import Router                                   from 'next/router';
import React, { Fragment, useState, useEffect } from 'react';
import { parseCookies, setCookie }              from 'nookies';
import { useDispatch }                          from 'react-redux';
import { initGA, logPageView }                  from '../../helpers/analytics';

import CookiesBanner from './Cookies.style';

import { storeCookiesDatas } from '../../store/actions/cookies.action';
import { clearCookies }      from '../../helpers/cookies';
import COLORS                from '../../helpers/colors';

const Cookies = () => {
  const dispatch = useDispatch();
  const maxAge = 365 * 24 * 60 * 60;
  const path = '/';
  
  const [ choice, setChoice ] = useState(true);
  
  const [ isSelected, setSelection ] = useState(true);
  
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
  
  const setSelectionState = () => {
    if (!isSelected) {
      setSelection(true);
      if (!more) { setChoice(true); }
      setCookie({}, 'lou', `${ choice ? 'enable' : 'disable' }`, { maxAge, path });
    }
  };
  
  useEffect(() => {
    const cookies = parseCookies();
    dispatch(storeCookiesDatas(cookies));
    if (cookies.lou === 'enable') {
      // initGA();
      logPageView();
      Router.router.events.on('routeChangeComplete', logPageView);
    } else {
      clearCookies(cookies);
      if (cookies.lou === 'init') { setSelection(false); }
    }
  }, [ isSelected, choice ]);
  
  // <script>
  //   (function (i, s, o, g, r, a, m) {
  //   i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
  //   (i[r].q = i[r].q || []).push(arguments)
  // }, i[r].l = 1 * new Date(); a = s.createElement(o),
  //   m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
  // })(window, document, 'script', '<%=htmlWebpackPlugin.options.analyticsURL%>', 'ga');
  //   ga('create', 'UA-XXX-X', 'auto');
  //   ga('send', 'pageview');
  // </script>
  
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
                onClick={ showChoices }>{ !more ? 'En savoir plus' : 'En voir moins' }</CookiesBanner.Button>
            </CookiesBanner.ChoiceWrapper>
          </CookiesBanner.BigWrapper>
        </CookiesBanner.Wrapper>
      </CookiesBanner>
      {/*}*/ }
    </Fragment>
  );
};

export default Cookies;
