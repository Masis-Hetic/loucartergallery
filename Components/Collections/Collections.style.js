import styled from "styled-components";

const cardSmallHeight = 210;
const cardMiddleHeight = 230;
const cardLargeDesktop = 250;

const Collections = styled.div`
  height: 100vh;
  width: 100vw;
`;

Collections.Wrapper = styled.div`
  width: ${ cardSmallHeight * 3 }px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  @media(min-width: 1440px) {
    width: ${ cardMiddleHeight * 4 }px;
  }
  
  @media(min-width: 1920px) {
    width: ${ cardLargeDesktop * 4 }px;
  }
`;

Collections.Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
  justify-content: ${props => props.collectionsList > 1 ? 'flex-start' : 'center' };
`;

Collections.Li = styled.li`
  flex-basis: ${cardSmallHeight}px;
  height: ${cardSmallHeight}px;

  &:nth-child(4n + 3) {
    margin-bottom: 15px;
  }
  
  @media(min-width: 1440px) {
    flex-basis: ${ cardMiddleHeight }px;
    height: ${ cardMiddleHeight }px;
    
    &:nth-child(4n + 3) {
      margin-bottom: 25px;
    }  
  }
  
  @media(min-width: 1920px) {
    flex-basis: ${ cardLargeDesktop }px;
    height: ${ cardLargeDesktop }px;
    
    &:nth-child(4n + 3) {
      margin-bottom: 35px;
    }  
  }
`;

Collections.A = styled.a`
  display: block;
  cursor: pointer;
`;

Collections.P = styled.p`
  font-size: 12px;
  margin-left: 15px;
  line-height: unset !important;
  margin-top: 8px;
  text-align: center;
`;

Collections.Img = styled.img`
  display: block;
  margin: 0 auto;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
`;

export default Collections;
