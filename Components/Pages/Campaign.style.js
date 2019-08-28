import styled from "styled-components";
import media  from "../../helpers/media";

const CampaignStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar { width: 0 !important; }
  
  @media (max-width: 768px) {
    overflow-y: scroll;
  }
  
  ${media.mobile`
    margin-top: 7rem;
    overflow: hidden;
  `}
`;

CampaignStyled.SlidesWrapper = styled.div`
  position: relative;
  z-index: 29;
  height: 100%;
  
  ${media.mobile`
    height: ${ props => props.isOpen ? '100vh' : 'unset' };
    z-index: ${ props => props.isOpen ? '130' : '110' };
    position: ${ props => props.isOpen ? 'fixed' : 'relative' };
  `}
`;

CampaignStyled.Slides = styled.div`
  overflow       : hidden;
  display        : flex;
  flex-direction : row;
  width          : auto;
  position       : relative;
  z-index        : 19;
  top            : 50%;
  transform      : translateY(-50%);
  height         : 100vh;
  
  @media (max-width: 768px) {
    overflow       : unset;
    display        : unset;
    flex-direction : unset;
    width          : unset;
    position       : unset;
    z-index        : unset;
    top            : unset;
    transform      : unset;
    height         : unset;
  }
  
  ${media.mobile`
    display: block;
    height: ${ props => props.isOpen ? '100vh' : 'unset' };
    width: 100vw;
    position: ${ props => props.isOpen ? 'fixed' : 'relative' };
    top: 0;
    z-index: 130;
    transition: .3s ease;
    top: ${ props => props.isOpen ? '0' : '55vh' };
  `}
`;

CampaignStyled.SliderWrapper = styled.div`
  overflow: scroll;
  position: relative;
  
  @media (max-width: 768px) {
    top: 80vh;
    overflow: ${ props => props.isOpen ? 'scroll' : 'hidden' };
  }
  
  ${media.mobile`
    background: #080808;
    transition: .3s ease;
    z-index: 999;
    height: 100vh;
    padding-bottom: 10vh;
    top: 0;
  `}
`;

CampaignStyled.UpBtn = styled.div`
  display: none;
  
  ${media.mobile`
    display: table;
    padding: 15px;
    margin-top: 15px;
    width: 30px;
    height: 30px;
    transition: .3s ease;
    margin: 0 auto;
    transform: rotate(${ props => props.isOpen ? '180deg' : '0deg'});
  `}
`;

CampaignStyled.UlDesktop = styled.ul`
  display    : flex;
  background : #080808; 
  height: 100vh;
  width: ${ props => props.ulWidth }vw;
  position: relative;
  left: 80vw;
  
  &::-webkit-scrollbar {
    display : none;
  }
  
  @media (max-width: 768px) {
    display    : flex;
    flex-direction: column; 
    height: unset;
    width: 100vw;
    position: unset;
    left: unset;
  }
  
  ${media.mobile`
    top: 0;
  `}
`;

CampaignStyled.LiDesktop = styled.li`
  width: 100vw;
  
  @media (max-width: 768px) {
    width: unset;
    margin-bottom: 15vh;
  }
`;

CampaignStyled.ImageLink = styled.a`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  position: relative;
  
  @media (max-width: 768px) {
    display: block;
    justify-content: unset;
    width: unset;
    height: unset;
    position: unset;
  }
`;

CampaignStyled.ImgDesktop = styled.img`
  display: table;
  object-fit: contain;
  max-width: 60vw;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  max-height: 100vh;
  
  @media (max-width: 768px) {
    display: block;
    max-width: unset;
    width: 85%;
    margin: 0 auto;
    position: unset;
    top: unset;
    left: unset;
    transform: unset;
    max-height: unset;
  }
`;

CampaignStyled.TextWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width 100vw;
  height: 100vh;
  display: flex;
  
  ${media.mobile`
    overflow-y: scroll;
    height: 60%;
    top: 7rem;
    z-index: ${ props => !props.isOpen ? '110' : '120'};
  `}
`;

CampaignStyled.Text = styled.div`
  display: table;
  height: calc(100vh - 5rem);
  align-self: center;
  max-width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  
  @media (max-width: 768px) {
    max-width: 85vw;
    width: 80vw;
    justify-content: flex-start;
    height: calc(100vh - 25rem);
  }
  
  @media (max-width: 1024px) {
    max-width: 30vw;
  }
  
  @media (min-width : 1680px) {
    width: 20vw;
  }
  
  @media (min-width : 1920px) {
    width: 17vw;
  }
  
  ${media.mobile`
    max-width: 85vw;
    // height: calc(100vh - 15rem);
    height: 100%;
  `}
`;

CampaignStyled.CampaignTitle = styled.h1`
  margin-bottom: 15px;
  font-size: 1.2rem;
  
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
  
  ${media.mobile`
    line-height: 2 !important;
  `}
`;

CampaignStyled.CampaignDescription = styled.p`
  margin: 1rem 0;
  font-size: .8rem;
  line-height: 2.4 !important;
  
  @media (max-width: 1024px) {
    line-height: 2 !important;
    font-size: .7rem;
  }
`;

CampaignStyled.SliderMobile = styled.div`
  
`;

export default CampaignStyled;
