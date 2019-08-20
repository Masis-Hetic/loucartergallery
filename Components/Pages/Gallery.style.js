import styled from "styled-components";
import media  from "../../helpers/media";

const Gallery = styled.div` 
  height: calc(100% - 30%);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: absolute;
  bottom: 0;
  overflow-y: hidden;
  
  ${media.mobile`
    height: calc(100% - 20%);
    grid-template-columns: unset;
    display: block;
    overflow-y: unset;
  `}
`;

Gallery.WrapperOne = styled.div`
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
  padding: 0 20%;
  
  ${media.mobile`
    height: unset;
    grid-column-start: unset;
    grid-column-end: unset;
    padding: 0 7% 0 5%;
    margin-bottom: 50px;
  `}
`;

Gallery.WrapperTwo = styled.div`
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 3;
  padding: 0 0 5%;
  
  overflow-y: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style : none;
  scrollbar-width    : none;
  &::-webkit-scrollbar { width : 0 !important; }
  
  @media (min-width: 4000px) {
    font-size: 2rem;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.2rem;
    padding: 0 10% 5%;
  }
  
  ${media.smallDesktop`
    
  `}
  
  ${media.mobile`
    height: unset;
    grid-column-start: unset;
    grid-column-end: unset;
    overflow-y: unset;
    overflow: unset;
    
    -ms-overflow-style : unset;
    scrollbar-width    : unset;
    &::-webkit-scrollbar { width : unset !important; }
    
    padding: 0 5%;
    margin-bottom: 50px;
  `}
  
`;

Gallery.WrapperThree = styled.div`
  height: 100%;
  grid-column-start: 3;
  padding: 0 20%;
  
  ${media.mobile`
    grid-column-start: unset;
    height: unset;
    padding: 0 5%;
    margin-bottom: 80px;
  `}
`;

Gallery.BlockTitle = styled.h2`
  line-height: initial !important;
  text-align: center;
  margin-bottom: 30px;
  
  @media (min-width: 2560px) {
    font-size: 1.6rem;
  }
  
  @media (min-width: 4000px) {
    font-size: 3rem;
  }
  
  ${media.mobile`
    font-size: 1.2rem;
  `}
`;

Gallery.SubTitle = styled.p`
  text-align: center;
  
  @media (min-width: 4000px) {
    font-size: 2rem;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.2rem;
  }
  
  ${media.mobile`
    line-height: 2.7 !important;
    font-size: 1rem;
  `}
`;

export default Gallery;
