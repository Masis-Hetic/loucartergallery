import React     from "react";
import PropTypes from "prop-types";

const ArrowRight = ( { width, height } ) => (
  <svg style={ { width, height } } viewBox={ `0 0 ${ width } ${ height }` }>
    <path fill="#ffffff" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
  </svg>
);

ArrowRight.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

ArrowRight.defaultProps = {
  width: '24',
  height: '24',
};

export default ArrowRight;
