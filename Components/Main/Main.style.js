import styled from "styled-components";
import media from "../../helpers/media";

const Main = styled.main``;

Main.LogoWrapper = styled.div`
  position: static;
  
  @media (min-width: 800px) {
    position: relative;
  }
`;

Main.Logo = styled.a`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;
  cursor: pointer;
  max-width: 14rem;
  width: ${props => props.navStatus === true ? '10rem' : '14rem'};
  transition: .3s ease;
  
  ${media.smallDesktop`
    width: ${props => props.navStatus === true ? '6.7rem' : '14rem'};
  `}
  
  ${media.mobile`
    width: 6.7rem;
  `}
`;

Main.Img = styled.img`
  display: block;
  width: 100%;
`;

export default Main;
