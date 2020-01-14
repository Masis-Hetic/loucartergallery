import styled from "styled-components";
import COLORS from "../../helpers/colors";

const StyledThirdPanel = styled.div`
  width: 33.33%;
  position: absolute;
  height: 100vh;
  left: ${props => props.open ? '66.66%' : '-100%'};
  transition: .3s ease-in-out;
  top: 0;
  background: ${COLORS.almostBlack};
  z-index: 97;
  padding: 20px;
`;

export default StyledThirdPanel
