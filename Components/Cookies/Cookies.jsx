import React, { Fragment, useState, useEffect } from 'react';
import { useCookies }                           from 'react-cookie';

import { initGA, disableGA }                      from '../../helpers/analytics';
import { clearCookie, getCookie, getCookieValue } from '../../helpers/cookies';

const Cookies = () => {
  const [ choice, setChoice ] = useState([]);
  
  const [ more, showMore ] = useState(false);
  const showChoices = () => showMore(!more);
  
  const [ btnText, setBtnText ] = useState('Ok, tout accepter');
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
  
  const [ cookies, setCookie, removeCookie ] = useCookies([ 'lou' ]);
  //
  const setSelectionState = () => {
    if (!isSelected) {
      if (!more || !choice.length) { setChoice(true); }
      setSelection(true);
      setCookie('lou', `${ choice ? 'enable' : 'disable' }`, { path: '/', expires: new Date });
      // document.cookie = `lou=${ choice ? 'enable' : 'disable' };expires=${ new Date };`;
      console.log({ cookies });
    }
  };
  
  useEffect(() => {
    // const cookies = getCookie();
    console.log(Object.keys(cookies) );
    if (Object.keys(cookies).includes('lou')) {
    //   if (getCookieValue(cookies.find((cookie) => cookie.includes('lou'))) === 'enable') {
    //     setChoice(true);
    //     initGA();
    //   } else {
    //     setChoice(false);
    //     disableGA();
    //     cookies.forEach((cookie) => { if (cookie.includes('_g')) { clearCookie(cookie); } });
    //   }
    //   setSelection(true);
    } else {
    //   if (!!localStorage.getItem('lou')) {
    //     if (localStorage.getItem('lou') === 'enable') {
    //       setChoice(true);
    //       initGA();
    //     } else {
    //       setChoice(false);
    //       disableGA();
    //       cookies.forEach((cookie) => { if (cookie.includes('_g')) { clearCookie(cookie); } });
    //     }
    //   } else {
        setSelection(false);
    //   }
    }
  });
  
  return (
    <Fragment>
      { !isSelected &&
        <div className={ `cookies ${ isSelected ? 'accepted' : 'not-accepted' } ${ more ? 'show-more' : '' }` }>
          <div className="cookies-wrapper">
            <div className="cookies-info">En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de
              cookies
              qui optimisent votre
              expérience utilisateurs et qui nous permettent d'analyser notre trafic.
              <div className={ `cookies-details ${ more ? 'show-more' : '' }` }>
                <p>Cookies de performance</p>
                <p>Ces cookies nous permettent de déterminer le nombre de visites et les sources du trafic sur notre
                  site
                  web, afin d'en mesurer et d'en améliorer les performances. ils nous aident également à identifier les
                  pages les plus / moins visitées et à évaluer comment les visiteurs naviguent sur le site. Toutes les
                  informations, collectées par ces cookies, sont agrégées et donc anonymisées. Si vous n'acceptez pas
                  cette
                  catégorie de cookies, nous ne pourrons pas savoir quand vous avez réalisé votre visite sur notre site
                  web.</p>
              </div>
            </div>
            <div className={ `big-wrapper ${ more ? 'big-wrapper__open' : '' }` }>
              <div className="choice-wrapper">
                { !more && <button className="underline" onClick={ setSelectionState }>OK, tout accepter</button> }
                { more &&
                  <Fragment>
                    <button onClick={ setSelectionState } className="box">{ btnText }</button>
                    <div className="select-choice">
                      <div className="select-choice-wrapper">
                        <label htmlFor="accept">Accepter</label>
                        <input
                          type="radio"
                          id="accept"
                          name="cookie"
                          style={ { width: 16, height: 16, border: '1px solid #fff' } }
                          onClick={ acceptCookies }
                        />
                      </div>
                      <div className="select-choice-wrapper">
                        <label htmlFor="refuse">Refuser</label>
                        <input
                          type="radio"
                          id="refuse"
                          name="cookie"
                          style={ { width: 16, height: 16, border: '1px solid #fff' } }
                          onClick={ refuseCokies }
                        />
                      </div>
                    </div>
                  </Fragment>
                }
              </div>
              <div className="choice-wrapper">
                <button onClick={ showChoices }>{ !more ? 'En savoir plus' : 'En voir moins' }{ choice }</button>
              </div>
            </div>
          </div>
          <style jsx>{ `
          div.select-choice-wrapper input[type="radio"] { -webkit-appearance: none !important; }
          
          div.select-choice-wrapper input[type="radio"]:checked {
            background: #fff;
            outline: none;
          }
          ` }</style>
        </div>
      }
    </Fragment>
  );
};

export default Cookies;
