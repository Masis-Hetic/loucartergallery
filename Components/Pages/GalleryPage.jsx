import React   from 'react';
import Gallery from "./Gallery.style";

/**
 * @param result
 * @returns {*}
 * @constructor
 * @property { string } block_title
 * @property { string } sub_title
 */
const GalleryPage = ( { result } ) => (
  <Gallery>
    {console.log({result})}
    <Gallery.WrapperOne>
      <Gallery.BlockTitle>
        {result[0].items[0].block_title[0].text}
      </Gallery.BlockTitle>
      <Gallery.SubTitle>{result[0].items[0].sub_title[0].text}</Gallery.SubTitle>
    </Gallery.WrapperOne>

    <Gallery.WrapperTwo>
      {result[1].items.map(item => item.description.map((p, i) =>
        <p key={i}>{p.text}</p>
      ))}
    </Gallery.WrapperTwo>

    <Gallery.WrapperThree>
      <Gallery.BlockTitle>
        {result[2].items[0].block_title[0].text}
      </Gallery.BlockTitle>
      <Gallery.SubTitle>{result[2].items[0].sub_title[0].text}</Gallery.SubTitle>
    </Gallery.WrapperThree>
  </Gallery>
);

{/*<div className="gallery-container">*/}
{/*  <div className="gallery-wrapper">*/}
{/*    { result.map((datas, i) => (*/}
{/*      <div key={ i } className="gallery-block">*/}
{/*        <div className={ `${ datas.items.length < 2 ? 'major' : 'minor' } ${ datas.slice_type } gallery-item-parent` }>*/}
{/*          { datas.items.map((item, j) => (*/}
{/*            <div key={ j } className="gallery-item-block">*/}
{/*              { item.block_title && item.block_title[ 0 ] && <h2>{ item.block_title[ 0 ].text }</h2> }*/}
{/*              { item.sub_title && item.sub_title[ 0 ] && <h3>{ item.sub_title[ 0 ].text }</h3> }*/}
{/*              { item.description && item.description[ 0 ] && <p>{ item.description[ 0 ].text }</p> }*/}
{/*            </div>*/}
{/*          )) }*/}
{/*        </div>*/}
{/*      </div>*/}
{/*    )) }*/}
{/*  </div>*/}
{/*</div>*/}

export default GalleryPage;
