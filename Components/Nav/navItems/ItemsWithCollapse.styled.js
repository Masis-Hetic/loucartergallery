import styled, { keyframes } from "styled-components";
import COLORS                from "../../../helpers/colors";
import media                 from "../../../helpers/media";

const openLinks = keyframes`
  0% { 
    opacity: 0;
    margin-bottom: 0;
  }
  100% { 
    opacity: 1;
    margin-bottom: 10px;
  }
`;

const closeLinks = keyframes`
  0% { 
    opacity: 1;
    margin-bottom: 10px;
  }
  100% { 
    opacity: 0;
    margin-bottom: 0;
  }
`;

const openLi = keyframes`
  from {
    line-height: 0;
    opacity: 0;
  }
  to {
    line-height: 2;
    opacity: 1;
  }
`;

const closeLi = keyframes`
  from {
    line-height: 2;
    opacity: 1;
  }
  to {
    line-height: 0;
    opacity: 0;
  }
`;

const openDots = keyframes`
  0% { 
    opacity: 0;
    margin-right: 0;
    width: 0;
    height: 0;
  }
  70% { 
    opacity: 1;
    width: 5px;
    height: 5px;
  }
  100% {
    margin-right: 10px;
    opacity: 1;
    width: 5px;
    height: 5px;
  }
`;

const closeDots = keyframes`
  0% { 
    margin-right: 10px;
    opacity: 1;
    width: 5px;
    height: 5px;
  }
  30% {
    opacity: 1;
    width: 5px;
    height: 5px;
  }
  100% { 
    opacity: 0;
    margin-right: 0;
    width: 0;
    height: 0;
  }
`;

const ListWithCollapse = styled.p`
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  margin-bottom: ${ props => props.isChildren ? '5px' : 'initial' };
`;

ListWithCollapse.List = styled.ul`
  padding-left: 20px;
  animation-name: ${props => props.open ? openLinks : closeLinks};
  animation-duration: .2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  margin-bottom: 0;
`;

ListWithCollapse.Item = styled.li`
  font-size: 0.8rem;
  font-family: WorkSans-Medium;
  line-height: 0;
  opacity: 0;
  animation-name: ${ props => props.open ? openLi : closeLi };
  animation-duration: .2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: ${ props => props.index * '.1' }s;
  display: flex;
  align-items: center;

  span {
    display: block;
    opacity: 0;
    width: 0;
    height: 0;
    transform: scale(0.7);
    background: ${COLORS.white};
    border-radius: 50px;
    margin-right: 5px;
    animation-name: ${ props => props.open ? openDots : closeDots };
    animation-duration: .2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: ${ props => (props.index * 0.1) + .1 }s;
    transition: .2s ease-in-out;
  }

  &:hover {
    span {
      transform: scale(1);
      transition: .2s ease-in-out;
    }
  }
  
  ${media.mobile`
    &:hover {
      span {
        transform: none;
        transition: none;
      }
    }
  `}
`;

export default ListWithCollapse;
