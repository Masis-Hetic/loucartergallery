import styled, { keyframes } from "styled-components";
import media  from "../../helpers/media";
import COLORS from "../../helpers/colors";

const animatedOpeningImage = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const animatedClosingImage = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const animatedArrow = keyframes`
  from { transform: rotate(180deg) translateY(0); }
  to { transform: rotate(180deg) translateY(-8px); }
`;

const CampaignStyled = styled.div`
  width: 100vw;
  text-align: center;
  height: calc(100vh - 15rem);
  position: absolute;
  bottom: 0;
  overflow-y: scroll;

  ${media.mobile`
    height: initial;
    position: relative;
    top: 10rem;
    bottom: initial;
  `}
`;

CampaignStyled.P = styled.p`
  margin: 0 auto;
  min-width: 400px;
  max-width: 450px;
  line-height: 2;
  height: calc(100% - 50px);
  overflow-y: scroll;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 3px;
  };

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.white};
    outline: 1px solid ${COLORS.white};
  }

  ${media.mobile`
    min-width: initial;
    max-width: initial;
    width: 90%;
  `}
`;

CampaignStyled.ItemIndicatorStyled = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  width: 50vw;
  
  ${media.mobile`
    display: none;
  `}
`;

CampaignStyled.Slider = styled.div`
  position: absolute;
  top: 0;
  right: -75%;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    display: block;
    object-fit: contain;
    height: 100vh;
    cursor: pointer;
  } 
  
  ${media.mobile`
    display: none;
  `}
`;

CampaignStyled.Slide = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${COLORS.almostBlack};
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${props => props.slide >= 0 ? 90 : -1};
  opacity: ${props => props.slide >= 0 ? 1 : 0};
  
  ${media.mobile`
    display: none;
  `}
`;

CampaignStyled.SlideLink = styled.a`
  width: 100vw;
  height: 100vh;
  display: block;
`;

CampaignStyled.SlideImg = styled.img`
  height: 90%;
  width: 90%;
  display: block;
  object-fit: contain;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation-name: ${props => props.index === props.slide ? animatedOpeningImage : animatedClosingImage};
  animation-duration: .3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

CampaignStyled.CloseSlider = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

CampaignStyled.MobileGalery = styled.div`
  display: none;
  
  ${media.mobile`
    display: block;
    margin-top: 30px;
  `}
  
  > div {
    margin-bottom: 30px;
    position: relative;
    transform: rotate(180deg) translateY(0);
    animation-name: ${animatedArrow};
    animation-duration: 1.5s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
  }
`;

CampaignStyled.MobileImg = styled.img`
  display: block;
  width: 100vw;
  height: auto;
  object-fit: content;
  margin-bottom: 20px;
`;

export default CampaignStyled;
