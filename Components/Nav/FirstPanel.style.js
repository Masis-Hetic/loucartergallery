import styled from "styled-components";
import COLORS from "../../helpers/colors";

const StyledFirstPanel = styled.div`
  z-index: 99;
  position: absolute;
  top: 0;
  width: 33.33%;
  height: 100vh;
  background: ${COLORS.almostBlack};
  left: 0;
  border-right: 1px solid ${COLORS.whiteThin};
  padding: 20px;
  display: flex;
  align-items: center;
`;

StyledFirstPanel.CloseBtn = styled.p`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

StyledFirstPanel.Ul = styled.ul`
  
`;

StyledFirstPanel.Li = styled.li`
  line-height: 3.5;
  cursor: pointer;
`;

export default StyledFirstPanel;
