import styled, { keyframes } from "styled-components";

const openLinks = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1:
  }
`;

const closeLinks = keyframes`
  0% {
    opacity: 1:
  }
  100% {
    opacity: 0;
  }
`;

const ListWithCollapse = styled.p`
  font-size: 1rem;
  cursor: pointer;
  position: relative;
`;

ListWithCollapse.List = styled.ul`
  padding-left: 20px;
  animation-name: ${props => props.open ? openLinks : closeLinks};
  animation-duration: .2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
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

ListWithCollapse.Item = styled.li`
  font-size: 0.8rem;
  text-transform: lowercase;
  font-family: WorkSans-SemiBold;
  line-height: 0;
  opacity: 0;
  animation-name: ${props => props.open ? openLi : closeLi};
  animation-duration: .3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: ${ props => props.index * '.1' }s;
`;

export default ListWithCollapse;
