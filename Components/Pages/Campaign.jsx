import React, { Component } from 'react';
import SanitizedHTML from 'react-sanitized-html';

class Campaign extends Component {
  state = {
    isOpen: false
  };

  openSlider = () => this.setState( { isOpen: !this.state.isOpen } );

  render() {
    const { campaign, imgs } = this.props;
    const { isOpen } = this.state;

    // noinspection JSUnresolvedVariable
    return (
      <div className="wrapper">
        {console.log({imgs})}
        <div className={ `slide-mobile ${ isOpen ? 'open' : 'close' }` }>
          <p onClick={ this.openSlider }>
            <svg style={ { width: 28, height: 28 } } viewBox="0 0 24 24">
              <path fill="#fff" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"/>
            </svg>
          </p>
          <ul>
            {imgs.map((img, i) =>
              <li key={i}>
                <img srcSet={img} alt="" />
              </li>
            )}
          </ul>
        </div>

        <div className="slides-wrapper">
          <div className="slides">
            <div className="slider-wrapper">
              <ul>
                {imgs.map((img, i) =>
                  <li key={i}>
                    <img srcSet={ img } alt="" />
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-wrapper" style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0
        }}>

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

        {/*
          Calcul de la taille du before (en desktop) :
          1- Nombre de slides * 60vw (la taille d'une slide)
          2- On rajoute la marge entre chaque slide : 40vw (sauf la dernière)
          3- On enlève les 20 vw qui permettent de centrer la dernière image
         */ }
        <style jsx>{ `
        .slides .slider-wrapper ul::before {
          width: ${ ( imgs.length * 60 ) + ( ( imgs.length ) * 40 ) - 20 }vw;
        }
        ` }</style>
      </div>
    );
  }
}

export default Campaign;
