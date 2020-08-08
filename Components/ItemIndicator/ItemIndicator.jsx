import React           from 'react';
import PropTypes       from 'prop-types';
import StyledIndicator from "./StyledItemIndicator";

const ItemIndicator = props => {

  return (
    <StyledIndicator>
      <StyledIndicator.Ul>

        {props.imgs.map((indicator, i) =>
          <StyledIndicator.Li key={i} width={props.width}>
            <StyledIndicator.Div>
              <StyledIndicator.InnerDiv current={props.current} index={i} withAnimation={props.withAnimation} />
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
  withAnimation: PropTypes.bool,
  width: PropTypes.string,
};

ItemIndicator.defaultProps = {
  imgs: [],
  withAnimation: true,
  width: '80px',
};

export default ItemIndicator;
