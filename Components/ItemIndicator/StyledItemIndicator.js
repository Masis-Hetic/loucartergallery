import styled, { keyframes } from "styled-components";
import COLORS from "../../helpers/colors";
import media from "../../helpers/media";

const loadIndicator = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const StyledIndicator = styled.div``;

StyledIndicator.Ul = styled.ul`
  width: inherit;
  height: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

StyledIndicator.Li = styled.li`
  display: flex;
  width: ${props => props.width};
  max-width: 80px;
  height: 3px;
  align-items: center;
  margin-right: 10px;
  flex-shrink: 1;

  &:last-child {
    margin-right: 0;
  }
`;

StyledIndicator.Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: ${ COLORS.white };
  background: ${ COLORS.mediumGrey };
  width: inherit;
  height: 1px;
`;

StyledIndicator.InnerDiv = styled.div`
  background: ${ COLORS.white };
  height: 3px;
  width: ${ props => {
      if (!props.withAnimation && props.current === props.index) return '100';
      if (props.current > props.index) return '100';
      if (props.current < props.index) return '0';
  } }%;
  animation-name: ${ props => {
    if (props.withAnimation && props.current === props.index) return loadIndicator;
  } };
  transition: .3s ease-in-out;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-duration: 4000ms;
`;

export default StyledIndicator;
