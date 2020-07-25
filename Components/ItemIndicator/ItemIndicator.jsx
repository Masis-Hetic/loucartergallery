import React           from 'react';
import PropTypes       from 'prop-types';
import StyledIndicator from "./StyledItemIndicator";

const ItemIndicator = props => {
  return (
    <StyledIndicator>
      <ul style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <li style={{ width: 50, height: 3, background: 'white', marginRight: 10 }} />
        <li style={{ width: 50, height: 3, background: 'white' }} />
      </ul>
    </StyledIndicator>
  );
};

ItemIndicator.propTypes = {
  
};

export default ItemIndicator;
