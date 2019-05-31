import React, { Component } from 'react';
import SanitizedHTML from 'react-sanitized-html';
import { sliceUrl } from "../../helpers/functions";

class Campaign extends Component {
  state = {
    isOpen: false
  };

  openSlider = () => this.setState( { isOpen: !this.state.isOpen } );

  render() {
    const { campaign } = this.props;
    const { isOpen } = this.state;

    // noinspection JSUnresolvedVariable
    return (
      <div className="wrapper">

        <div className={ `slide-mobile ${ isOpen ? 'open' : 'close' }` }>
          <p onClick={ this.openSlider }>
            <svg style={ { width: 28, height: 28 } } viewBox="0 0 24 24">
              <path fill="#fff" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"/>
            </svg>
          </p>
          { console.log( campaign.data.images.length ) }
          <ul>
            { campaign.data.images.map( ( img, i ) =>
              <li key={ i }>
                <img src={ img && sliceUrl( img.image.url ) } alt=""/>
              </li>
            ) }
          </ul>
        </div>

        <div className="slides-wrapper">
          <div className="slides">
            <div className="slider-wrapper">
              <ul>
                { campaign.data.images.map( ( img, i ) =>
                  <li key={ i }>
                    <img src={ img && sliceUrl( img.image.url ) } alt=""/>
                  </li>
                ) }
              </ul>
            </div>
          </div>
        </div>

        <div className="text-wrapper">
          <div className="text-overflow">
            <div className="text">
              <h1><SanitizedHTML html={ campaign.data.title[ 0 ].text } /></h1>

              <p>{ campaign.data.chapeau[ 0 ].text && campaign.data.chapeau[ 0 ].text }</p>
              <div className="description">
                { campaign.data.description.map( ( p, i ) => <SanitizedHTML key={ i } html={ p.text }/> ) }
              </div>

              <p>{ campaign.data.fin_de_description[ 0 ].text && campaign.data.fin_de_description[ 0 ].text }</p>

              <p>Détail des oeuvres</p>
            </div>
          </div>

        </div>

        {/*
          Calcul de la taille du before (en desktop) :
          1- Nombre de slides * 60vw (la taille d'une slide)
          2- On rajoute la marge entre chaque slide : 40vw (sauf la dernière)
          3- On rajoute les 5 vw qui permettent de centrer la dernière image
         */ }
        <style jsx>{ `
        .slides .slider-wrapper ul::before {
          width: ${ ( campaign.data.images.length * 60 ) + ( ( campaign.data.images.length - 1 ) * 40 ) + 5 }vw;
        }
        ` }</style>
      </div>
    );
  }
}

export default Campaign;
