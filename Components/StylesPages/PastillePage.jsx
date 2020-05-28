import React from 'react';

import Pastille from './Pastille.style';

/**
 * @param result
 * @returns {*}
 * @constructor
 * @property { string } block_title
 * @property { string } sub_title
 */
const PastillePage = ({ result }) => (
  <Pastille>
    <Pastille.WrapperOne>
      <Pastille.BlockTitle>
        { result[ 0 ].items[ 0 ].block_title[ 0 ].text }
      </Pastille.BlockTitle>
      <Pastille.SubTitle>{ result[ 0 ].items[ 0 ].sub_title[ 0 ].text }</Pastille.SubTitle>
    </Pastille.WrapperOne>
    
    <Pastille.WrapperTwo>
      { result[ 1 ].items.map(item => item.description.map((p, i) =>
                                                             <p key={ i }>{ p.text }</p>
      )) }
    </Pastille.WrapperTwo>
    
    <Pastille.WrapperThree>
      <Pastille.BlockTitle>
        { result[ 2 ].items[ 0 ].block_title[ 0 ].text }
      </Pastille.BlockTitle>
      <Pastille.SubTitle>{ result[ 2 ].items[ 0 ].sub_title[ 0 ].text }</Pastille.SubTitle>
    </Pastille.WrapperThree>
  </Pastille>
);
export default PastillePage;
