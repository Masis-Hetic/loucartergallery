import React from 'react';

const GalleryPage = ({ result }) => (
  <div className="gallery-container">
    <div className="opacity-text-block"/>
    { result.map((datas, i) => (
      <div key={ i } className="gallery-block">
        <div className={ `${ datas.slice_type }` }>
          { datas.items.map((item, j) => (
            <div key={ j } className="gallery-item-block">
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

export default GalleryPage;
