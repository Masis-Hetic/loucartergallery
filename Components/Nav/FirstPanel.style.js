import styled from "styled-components";
import COLORS from "../../helpers/colors";

const StyledFirstPanel = styled.div`
  z-index: 99;
  position: absolute;
  top: 0;
  width: 33.33%;
  height: 100vh;
  background: ${COLORS.almostBlack};
  left: ${props => props.open ? '0' : '-100%'};
  border-right: 1px solid ${COLORS.whiteThin};
  padding: 20px;
  display: flex;
  align-items: center;
  transition: .3s ease-in-out;
`;

StyledFirstPanel.CloseBtn = styled.p`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

StyledFirstPanel.Ul = styled.ul`
  width: 100%;
`;

StyledFirstPanel.Li = styled.li`
  line-height: 3.5;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: flex-start;
  width: 100%;
  
  &:hover {
    
    span:nth-of-type(1) {
      width: 5px;
      height: 5px;
      margin-right: 13px;
    }
  }
  
  span:nth-of-type(1) {
    display: block;
    width: 3px;
    height: 3px;
    background: ${COLORS.white};
    border-radius: 50px;
    transition: .3s ease-in-out;
    margin-right: 15px;
  }
`;

export default StyledFirstPanel;
