import React           from 'react';
import PropTypes       from 'prop-types';
import StyledIndicator from "./StyledItemIndicator";

const ItemIndicator = props => {

  return (
    <StyledIndicator>
      <StyledIndicator.Ul>

        {props.imgs.map((indicator, i) =>
          <StyledIndicator.Li key={i}>
            <StyledIndicator.Div>
              <StyledIndicator.InnerDiv current={props.current} index={i} />
            </StyledIndicator.Div>
          </StyledIndicator.Li>
        )}

      </StyledIndicator.Ul>
    </StyledIndicator>
  );
};

ItemIndicator.propTypes = {
  imgs: PropTypes.array,
  current: PropTypes.number,
};

ItemIndicator.defaultProps = {
  imgs: [],
};

export default ItemIndicator;
