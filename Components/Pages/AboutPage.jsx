import React, { Fragment } from 'react';
import Link                from 'next/link';

const AboutPage = ({ result }) => (
  <div className="about-container">
    { result.map((datas, i) => (
      <div key={ i } className="about-block">
        { console.log({ datas }) }
        <div className={ `${ datas.slice_type }` }>
          { datas.items.map((item, j) => (
            <div key={ j } className="about-item-block">
              { item.block_title && item.block_title[ 0 ] &&
                <h2>{ item.block_title[ 0 ].text }</h2>
              }
              { item.sub_title && item.sub_title[ 0 ] &&
                <h3>{ item.sub_title[ 0 ].text }</h3>
              }
              { item.description && item.description[ 0 ] &&
                <p>{ item.description[ 0 ].text }</p>
              }
            </div>
          )) }
        </div>
      </div>
    )) }
  </div>
);

export default AboutPage;
