import styled from "styled-components";

const StyledArtistes = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

StyledArtistes.Wrapper = styled.div`
  width: 60%;
  height: 60vh;
`;

StyledArtistes.Ul = styled.ul`
  height: inherit;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow: hidden;
`;

StyledArtistes.Li = styled.li`
  width: 50%;
  line-height: 2.5;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
`;

export default StyledArtistes;
