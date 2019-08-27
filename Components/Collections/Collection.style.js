import styled from "styled-components";
import COLORS from "../../helpers/colors";

const SingleCollection = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  // position: fixed;
`;

SingleCollection.Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 45%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`;

SingleCollection.Li = styled.li`
  height: auto;
  border: 1px solid ${ COLORS.white };
  flex: 1 0 45%;
  cursor: pointer;
  margin: ${ props => props.margin };
`;

SingleCollection.Img = styled.img`

`;

export default SingleCollection;
