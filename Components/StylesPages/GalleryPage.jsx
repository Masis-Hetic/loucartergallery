import React   from 'react';
import { get } from "lodash/fp";

import Gallery from './Gallery.style';

/**
 * @param result
 * @returns {*}
 * @constructor
 * @property { string } block_title
 * @property { string } sub_title
 */
const GalleryPage = ({ result }) => (
  <Gallery>
    <Gallery.WrapperOne>
      <Gallery.BlockTitle>
        { get('items[ 0 ].block_title[ 0 ].text', result[ 0 ]) }
      </Gallery.BlockTitle>
      <Gallery.SubTitle>{ get('items[ 0 ].sub_title[ 0 ].text', result[ 0 ]) }</Gallery.SubTitle>
    </Gallery.WrapperOne>
    
    <Gallery.WrapperTwo>
      { result[ 1 ].items.map(item => item.description.map((p, i) =>
                                                             <p key={ i }>{ p.text }</p>
      )) }
    </Gallery.WrapperTwo>
    
    <Gallery.WrapperThree>
      <Gallery.BlockTitle>
        { get('items[ 0 ].block_title[ 0 ].text', result[ 2 ]) }
      </Gallery.BlockTitle>
      <Gallery.SubTitle>{ get('items[ 0 ].sub_title[ 0 ].text', result[ 2 ]) }</Gallery.SubTitle>
    </Gallery.WrapperThree>
  </Gallery>
);

export default GalleryPage;
