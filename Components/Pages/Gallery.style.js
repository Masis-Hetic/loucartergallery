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
`;

Gallery.WrapperOne = styled.div`
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
  padding: 0 20%;
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
  &::-webkit-scrollbar { width : 0 !important }
  
  ${media.smallDesktop`
    
  `}
  
  @media (min-width: 2560px) {
    font-size: 1.2rem;
    padding: 0 10% 5%;
  }
  
  @media (min-width: 4000px) {
    font-size: 2rem;
  }
`;

Gallery.WrapperThree = styled.div`
  height: 100%;
  grid-column-start: 3;
  padding: 0 20%;
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
`;

Gallery.SubTitle = styled.p`
  text-align: center;
  
  @media (min-width: 2560px) {
    font-size: 1.2rem;
  }
  
  @media (min-width: 4000px) {
    font-size: 2rem;
  }
`;

export default Gallery;
