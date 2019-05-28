import React, { Component } from 'react';
import SanitizedHTML from 'react-sanitized-html';
import { sliceUrl } from "../../helpers/functions";

class Campaign extends Component {

  render() {
    const { campaign } = this.props;

    // noinspection JSUnresolvedVariable
    return (
      <div className="wrapper">
        { console.log( campaign ) }
        <div className="slides-wrapper">
          <div className="slides">

            <ul>
              { campaign.data.images.map( ( img, i ) =>
                <li key={ i }>
                  <img src={ img && sliceUrl( img.image.url ) } alt=""/>
                </li>
              ) }
            </ul>

          </div>
        </div>

        <div className="text">
          <h1>{ campaign.data.title[ 0 ].text }</h1>

          <p>{ campaign.data.chapeau[ 0 ].text && campaign.data.chapeau[ 0 ].text }</p>
          <div className="description">
            { campaign.data.description.map( ( p, i ) => <SanitizedHTML key={ i } html={ p.text }/> ) }
          </div>

          <p>{ campaign.data.fin_de_description[0].text && campaign.data.fin_de_description[0].text }</p>

          <p>Détail des oeuvres</p>
        </div>
      </div>
    );
  }
}

export default Campaign;
