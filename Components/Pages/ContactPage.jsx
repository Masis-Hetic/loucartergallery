import React from 'react';

const ContactPage = ({ result }) => (
  <div className="contact-container text-gradiant">
    { result.body.map((datas, i) => (
      <div key={ i } className="contact-block">
        { result.title && result.title[ i ] && <h1>{ result.title[ i ].text }</h1> }
        <div className={ `${ datas.slice_type }` }>
          { datas.items.map((item, j) => (
            <div key={ j } className="contact-item-block">
              { item.name && item.name[ 0 ] && <h3>{ item.name[ 0 ].text }</h3> }
              { item.role && item.role[ 0 ] && <p>{ item.role[ 0 ].text }</p> }
              { item.phone && item.phone[ 0 ] && <p>{ item.phone[ 0 ].text }</p> }
              { item.email && item.email[ 0 ] && <p>{ item.email[ 0 ].text }</p> }
              { item.address && item.address[ 0 ] && <p>{ item.address[ 0 ].text }</p> }
            </div>
          )) }
        </div>
      </div>
    )) }
  </div>
);

export default ContactPage;
