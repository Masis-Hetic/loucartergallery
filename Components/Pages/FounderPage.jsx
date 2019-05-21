import React from 'react';

const FounderPage = ({ result }) => (
  <div className="founder-container">
    { result.map((datas, i) => (
      <div key={ i } className="founder-block">
        <div className={ `${ datas.slice_type }` }>
          { datas.items.map((item, j) => (
            <div key={ j } className="founder-item-block">
              { item.block_title && item.block_title[ 0 ] && <h2>{ item.block_title[ 0 ].text }</h2> }
              { item.sub_title && item.sub_title[ 0 ] && <h3>{ item.sub_title[ 0 ].text }</h3> }
              { item.description && item.description[ 0 ] && <p>{ item.description[ 0 ].text }</p> }
            </div>
          )) }
        </div>
      </div>
    )) }
  </div>
);

export default FounderPage;
