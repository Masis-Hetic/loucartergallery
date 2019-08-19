import React     from "react";
import PropTypes from "prop-types";

const ArrowLeft = ( { width, height } ) => (
  <svg style={ { width: `${width}px`, height: `${height}px` } } viewBox={ `0 0 ${ width } ${ height }` }>
    <path fill="#ffffff" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
  </svg>
);

ArrowLeft.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

ArrowLeft.defaultProps = {
  width: '24',
  height: '24',
};

export default ArrowLeft;
