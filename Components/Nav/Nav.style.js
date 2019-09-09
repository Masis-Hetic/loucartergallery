import styled, { keyframes } from "styled-components";
import media  from "../../helpers/media";
import COLORS from "../../helpers/colors";

const openLinks = keyframes`
  0% {
    width  : 0;
    height : 0;
  }
  100% {
    width  : 5px;
    height : 5px;
  }
`;

/**
 * @property { boolean } navPos
 * @property { boolean } open
 */

const Header = styled.header`
  position: fixed;
  z-index: 80;
  top: 0;
  left: ${ props => !props.open ? '-30%' : '0%' };
  width: 33.33%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  transition: .3s ease;
  // box-shadow: rgb(40, 44, 55) 0px 0px 3px 1px;
`;

Header.MenuBtn = styled.div`
  position   : absolute;
  top        : 50%;
  left       : calc(30vw + 20px);
  transform  : translateY(-50%) rotate(90deg);
  z-index    : 199999;
  cursor     : pointer;
  padding    : 10px 0;
  transition : .3s ease-in-out;
  
  ${media.mobile`
  left: unset;
  right: calc(85vw + 20px);
  `}
`;

Header.Burger = styled.div`
  position   : relative;
  display    : block;
  width      : 26px;
  height     : 3px;
  margin     : auto;
  background : ${ props => !props.open ? COLORS.white : 'transparent'};
  transition : all .3s ease-in-out;
  opacity: ${ props => !props.open ? '1' : '0' };
  
  &:before, &:after {
   position   : absolute;
   content    : '';
   width      : 26px;
   height     : 3px;
   transition : all .3s ease-in-out;
  }
  
  &:before {
  background : ${ COLORS.white };
  transform  : ${ props => !props.open ? 'rotate(0) translate(0, 0)' : 'rotate(45deg) translate(5px, 6px)' };
  top        : -8px;
  }
  
  &:after {
  background : ${ COLORS.white };
  transform  : ${ props => !props.open ? 'rotate(0) translate(0, 0)' : 'rotate(-45deg) translate(5px, -6px)' };
  top        : 8px;
  }
`;

Header.FirstPanel = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  opacity: ${ props => props.open ? '1' : '0' };
  width: 25px;
  height: 25px;
`;

Header.Nav = styled.nav`
  width: 100%;
  padding-left: 20px;
`;

Header.Li = styled.li`
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 15px;
  position: relative;
  z-index: 70;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

Header.P = styled.p`
  line-height: unset !important;
`;

/**
 * @property { boolean } secondPanel
 */
Header.SecondPanel = styled.div`
  position: fixed;
  top: 0;
  left: ${ props => props.secondPanel ? '33.33%' : '0'};
  opacity: ${ props => props.secondPanel ? '1' : '0' };
  z-index: ${ props => props.secondPanel ? '1' : '-1' };
  width: 33.33%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  transition: .5s ease;
`;

/**
 * @property { boolean } thirdPanel
 */
Header.ThirdPanel = styled.div`
  position: fixed;
  top: 0;
  left: ${ props => props.thirdPanel ? '66.66%' : '33.33%'};
  opacity: ${ props => props.thirdPanel ? '1' : '0' };
  z-index: ${ props => props.thirdPanel ? '1' : '-1' };
  width: 33.33%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  transition: .5s ease;
`;







// const Header = styled.header`
//   position   : ${ props => props.navPos ? 'fixed' : 'absolute' };
//   height     : 100vh;
//   width      : 30vw;
//   top        : 0;
//   left       : ${ props => !props.open ? '-30vw' : '0' };
//   z-index    : 51;
//   background : ${ props => !props.open ? 'transparent' : 'rgba(0, 0, 0, .9)'};
//   transition : .3s ease-in-out;
//   box-shadow : ${ props => !props.open ? 'none' : '0 0 3px 1px #282c37' };
//
//   ${media.mobile`
//     z-index: 150;
//     width: 85vw;
//     left: unset;
//     right: ${ props => !props.open ? '-85vw' : '0' };
//   `}
// `;
//
// Header.Nav = styled.nav`
//   position   : absolute;
//   top        : 50%;
//   width      : 100%;
//   transform  : translateY(-50%);
//   left       : 20px;
//   text-align : left;
//
//   ${media.mobile`
//     font-size  : 13px;
//   `}
// `;
//
// Header.UlWrapper = styled.ul`
//   display         : flex;
//   flex-direction  : column;
//   justify-content : space-between;
//   text-transform  : uppercase;
//   font-size       : 1rem;
// `;
//
// Header.FirstStepLi = styled.li`
//   color       : ${COLORS.lightGrey};
//   cursor      : default;
//   line-height : 2.5;
//   position    : relative;
//   z-index     : 30;
// `;
//
// Header.MenuBtn = styled.div`
//    position   : absolute;
//    top        : 50%;
//    left       : calc(30vw + 20px);
//    transform  : translateY(-50%) rotate(90deg);
//    z-index    : 1;
//    cursor     : pointer;
//    padding    : 10px 0;
//    transition : .3s ease-in-out;
//
//    ${media.mobile`
//     left: unset;
//     right: calc(85vw + 20px);
//    `}
// `;
//
// Header.Burger = styled.span`
//   position   : relative;
//   display    : block;
//   width      : 26px;
//   height     : 3px;
//   margin     : auto;
//   background : ${ props => !props.open ? COLORS.white : 'transparent'};
//   transition : all .3s ease-in-out;
//
//   &:before, &:after {
//    position   : absolute;
//    content    : '';
//    width      : 26px;
//    height     : 3px;
//    transition : all .3s ease-in-out;
//   }
//
//   &:before {
//   background : ${ COLORS.white };
//   transform  : ${ props => !props.open ? 'rotate(0) translate(0, 0)' : 'rotate(45deg) translate(5px, 6px)' };
//   top        : -8px;
//   }
//
//   &:after {
//   background : ${ COLORS.white };
//   transform  : ${ props => !props.open ? 'rotate(0) translate(0, 0)' : 'rotate(-45deg) translate(5px, -6px)' };
//   top        : 8px;
//   }
// `;
//
// Header.NavItem = styled.p`
//   display         : ${ props => props.underline === 'underline' && 'flex' };
//   justify-content : flex-start;
//   flex-direction  : row;
//   align-items     : center;
//   cursor          : ${ props => props.underline === 'underline' ? 'pointer' : 'default' };
//
//   &::before {
//    content                   : "";
//    display                   : ${ props => props.underline === 'underline' ? 'block' : 'none'};
//    width                     : 0;
//    height                    : 0;
//    border-radius             : 50%;
//    background                : ${ COLORS.lightGrey };
//    animation-name            : ${ openLinks };
//    animation-fill-mode       : forwards;
//    animation-duration        : 300ms;
//    animation-timing-function : ease;
//    animation-delay           : 400ms;
//    margin-right              : 10px;
//   }
//
//   @media (min-width : 576px) {
//    span {
//      display        : flex;
//      flex-direction : row;
//      align-items    : center;
//
//      // &::before {
//      //   content     : "";
//      //   display     : block;
//      //   height      : 1px;
//      //   background  : ${ COLORS.lightGrey };
//      //   margin-left : -1px;
//      // }
//    }
//    &:hover {
//      &::before {
//        transition : .3s;
//        transform  : scale(1.5);
//        border-radius: 50%;
//      }
//
//      span {
//        display        : flex;
//        flex-direction : row;
//        align-items    : center;
//      }
//    }
//   }
// `;
//
// Header.Link = styled.a`
//   display         : flex;
//   justify-content : flex-start;
//   flex-direction  : row;
//   align-items     : center;
//   cursor          : pointer;
//
//   &::before {
//    content                   : "";
//    display                   : block;
//    width                     : 0;
//    height                    : 0;
//    border-radius             : 50%;
//    background                : ${ COLORS.lightGrey };
//    animation-name            : ${ openLinks };
//    animation-fill-mode       : forwards;
//    animation-duration        : 300ms;
//    animation-timing-function : ease;
//    animation-delay           : 400ms;
//    margin-right              : 10px;
//   }
//
//   @media (min-width : 576px) {
//    span {
//      display        : flex;
//      flex-direction : row;
//      align-items    : center;
//
//      // &::before {
//      //   content     : "";
//      //   display     : block;
//      //   height      : 1px;
//      //   background  : ${ COLORS.lightGrey };
//      //   margin-left : -1px;
//      // }
//    }
//    &:hover {
//      &::before {
//        transition : .3s;
//        transform  : scale(1.5);
//        border-radius: 50%;
//      }
//
//      span {
//        display        : flex;
//        flex-direction : row;
//        align-items    : center;
//      }
//    }
//   }
// `;

export default Header;
