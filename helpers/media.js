import { css } from 'styled-components'

const sizes = {
  mobile: 576,
  smallDesktop: 1280,
  mediumDesktop: 1440,
  largeDesktop: 1920,
};
export default Object.keys( sizes ).reduce( ( acc, label ) => {
  acc[ label ] = ( ...args ) => css`
      @media (max-width: ${ sizes[ label ] }px) {
         ${ css( ...args ) };
      }
   `;
  return acc
}, {} )
