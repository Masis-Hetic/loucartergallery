import React from 'react';

const PartagerPage = ({ result }) => (
  <div className="partager-container text-gradiant">
    { result.map((datas, i) => (
      <div key={ i } className="partager-block">
        <div className={ `${ datas.slice_type }` }>
          { datas.items.map((item, j) => (
            <div key={ j } className="partager-item-block">
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

export default PartagerPage;
