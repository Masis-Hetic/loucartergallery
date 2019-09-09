import React, { Fragment } from 'react';

const ContactPage = ( { result } ) => (
  <Fragment>
    <div className="contact-container">
      { result.body.map( ( datas, i ) => (
        <div key={ i } className="contact-block">
          { result.title && result.title[ i ] && <h1>{ result.title[ i ].text }</h1> }
          <div className={ `${ datas.slice_type }` }>
            { datas.items.map( ( item, j ) => (
              <div key={ j } className="contact-item-block">
                { item.name && item.name[ 0 ] && <h3>{ item.name[ 0 ].text }</h3> }
                { item.role && item.role[ 0 ] && <p>{ item.role[ 0 ].text }</p> }
                { item.phone && item.phone[ 0 ] && <p>{ item.phone[ 0 ].text }</p> }
                { item.email && item.email[ 0 ] && <p>{ item.email[ 0 ].text }</p> }
                { item.address && item.address[ 0 ] && <p>{ item.address[ 0 ].text }</p> }
              </div>
            ) ) }
          </div>
        </div>
      ) ) }
    </div>

    {/*<div style={{ width: '90vw', margin: '0 auto', position: 'absolute', bottom: 5, left: '5vw', fontSize: '.65rem', textAlign: 'center' }}>*/}
    {/*  <p style={{fontSize: '.7rem'}}>Crédits : </p>*/}
    {/*  <p style={{fontSize: '.7rem'}}>Photographique et Techniques : Amélie Glab et Gaëlle Salaün</p>*/}
    {/*  <p style={{marginBottom: 20, fontSize: '.7rem'}}>Développement du site : Masis Gulmez et Cédric Salaün</p>*/}
    {/*  <p>SAS Lou Carter Gallery, 22 rue du Cherche-Midi 75006 Paris au capital de 7 500 euros, SIREN 852 869 825 – RCS Paris</p>*/}
    {/*</div>*/}
  </Fragment>
);

export default ContactPage;
