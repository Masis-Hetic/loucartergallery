import styled from "styled-components";
import COLORS from "../../helpers/colors";

const StyledSecondPanel = styled.div`
  height: 100vh;
  width: 33.33%;
  background: ${COLORS.almostBlack};
  left: ${props => props.open ? '33.33%' : '-100%'};
  position: absolute;
  z-index: 98;
  border-right: 1px solid ${COLORS.whiteThin};
  padding: 20px;
  transition: .3s ease-in-out;
`;

StyledSecondPanel.CloseBtn = styled.p`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

StyledSecondPanel.Ul = styled.ul``;

StyledSecondPanel.Li = styled.li``;

export default StyledSecondPanel;
