import React, { Fragment, useState, useEffect } from 'react';

import { initGA }                               from '../../helpers/analytics';

const Cookies = () => {
  const [ isAccept, setChoice ] = useState( false );
  const acceptCookies = () => {
    setChoice( true );
    // JSON.stringify(localStorage.setItem('lou', 'disable'));
    initGA();
  };

  const [ more, showMore ] = useState( false );
  const showChoices = () => showMore( !more );

  const [ btnText, setBtnText ] = useState( 'Ok, tout accepter' );
  const isCookiesAccepted = () => {
    const accepted = document.getElementById( 'accept' );
    const refused = document.getElementById( 'refuse' );

    accepted.checked && setBtnText( 'OK, tout accepter' );
    refused.checked && setBtnText( 'Tout refuser' );
    refused.checked && setChoice( false );
  };

  const [ storage, storageValue ] = useState(null);
  useEffect(() => {
    console.log({localStorage, document, cookie: document.cookie });
    // "_ga=GA1.1.1176769190.1561058104; _gid=GA1.1.691764666.1561058104; _gat=1"
    
    // storageValue(localStorage.getItem('lou'));
    if (document && document.cookie.includes('_gat=')) {
    
    }
  });

  return (
    <Fragment>
      { storage !== 'disable' &&
        <div className={ `cookies ${ isAccept ? 'accepted' : 'not-accepted' } ${ more ? 'show-more' : '' }` }>
          <div className="cookies-wrapper">
            <div className="cookies-info">En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de
              cookies
              qui optimisent votre
              expérience utilisateurs et qui nous permettent d'analyser notre trafic.
              <div className={ `cookies-details ${ more ? 'show-more' : '' }` }>
                <p>Cookies de performance</p>
                <p>Ces cookies nous permettent de déterminer le nombre de visites et les sources du trafic sur notre site
                  web, afin d'en mesurer et d'en améliorer les performances. ils nous aident également à identifier les
                  pages les plus / moins visitées et à évaluer comment les visiteurs naviguent sur le site. Toutes les
                  informations, collectées par ces cookies, sont agrégées et donc anonymisées. Si vous n'acceptez pas cette
                  catégorie de cookies, nous ne pourrons pas savoir quand vous avez réalisé votre visite sur notre site
                  web.</p>
              </div>
            </div>
            <div className={ `big-wrapper ${ more ? 'big-wrapper__open' : '' }` }>
              <div className="choice-wrapper">
                { !more && <button className="underline" onClick={ acceptCookies }>OK, tout accepter</button> }
                { more &&
                <Fragment>
                  <button onClick={ acceptCookies } className="box">{ btnText }</button>
                  <div className="select-choice">
                    <div className="select-choice-wrapper">
                      <label htmlFor="accept">Accepter</label>
                      <input
                        type="radio"
                        id="accept"
                        name="cookie"
                        style={ { width: 16, height: 16, border: '1px solid #fff' } }
                        onClick={ isCookiesAccepted }
                      />
                    </div>
                    <div className="select-choice-wrapper">
                      <label htmlFor="refuse">Refuser</label>
                      <input
                        type="radio"
                        id="refuse"
                        name="cookie"
                        style={ { width: 16, height: 16, border: '1px solid #fff' } }
                        onClick={ isCookiesAccepted }
                      />
                    </div>
                  </div>
                </Fragment>
                }
              </div>
              <div className="choice-wrapper">
                <button onClick={ showChoices }>{ !more ? 'En savoir plus' : 'En voir moins' }{ isAccept }</button>
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

  )
};

export default Cookies;
