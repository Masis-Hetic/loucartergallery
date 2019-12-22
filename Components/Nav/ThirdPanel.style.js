import styled from "styled-components";
import COLORS from "../../helpers/colors";

const StyledThirdPanel = styled.div`
  width: 33.33%;
  position: absolute;
  height: 100vh;
  left: 66.66%;
  top: 0;
  background: ${COLORS.almostBlack};
  z-index: 100;
  padding: 20px;
`;

export default StyledThirdPanel
