import styled from "styled-components";
import media from "../../helpers/media";

const Artist = styled.div`
  display: flex;
  width: calc(100% - 14rem - 20px);
  height: calc(100% - 11rem);
  position: absolute;
  bottom: 0;
  right: 0;
  
  ${media.mobile`
    display: block;
    margin-top: 7rem;
    width: initial;
    height: initial;
    position: initial;
    bottom: initial;
    right: initial;
  `}
`;

Artist.Carousel = styled.ul`
  width: 120px;
  height: 100%;
  overflow-y: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar { width: 0 !important; }
  
  ${media.mobile`
    display: none;
  `}
`;

Artist.CarouselPicture = styled.li`
  width: 120px;
  height: 120px;
  display: block;
  border: 1px solid #fff;
  margin-bottom: 30px;
  
  &:last-of-type {
    margin-bottom: 0;
  }
  
  ${media.mobile`
    flex-basis: 120px;
  `}
`;

Artist.MiniPicture = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

Artist.ImageWrapper = styled.div`
  width: calc(55% - 60px);
  height: 100%;
  
  ${media.mobile`
    display: none;
  `}
`;

Artist.ImageInnerWrapper = styled.div`
  width: 90%;
  height: 70%;
  margin: 0 auto;
  text-align: center;
  
  ${media.mobile`
    width: 100%;
  `}
`;

Artist.Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: 20px;
`;

Artist.Collection = styled.p`
  border-bottom: 1px solid #fff;
  display: table;
  margin: 0 auto 15px;
`;

Artist.DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(45% - 60px);
  height: 100%;
  padding-right: 30px;
  overflow-y: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar { width: 0 !important; }
  
  ${media.mobile`
    width: 100%;
    padding: 0 5%;
  `}
`;

Artist.Name = styled.h2`
  line-height: initial !important;
  margin-bottom: 30px;
  
  ${media.mobile`
    text-align: center;
  `}
`;

Artist.Description = styled.p`
  width: 95%;
  
  ${media.mobile`
    width: 100%;
  `}
`;

Artist.BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  
  ${media.mobile`
    justify-content: center;
  `}
`;

Artist.BackBtn = styled.a`
  display: table;
  border: 1px solid #fff;
  margin: 30px 0;
  padding: 10px;
  cursor: pointer;
`;


// Artiste responsive
Artist.MobileCarouselWrapper = styled.div`
  display: none;
  
  ${media.mobile`
    width: 100vw;
    display: block;
  `}
`;

Artist.MobileCarousel = styled.ul`
  display: flex;
  position: relative;
  transform: translateX(${props => props.position}%);
  transition: .3s ease-in;
`;

Artist.MobileImageWrapper = styled.li`
  flex: 1 0 90vw;
  margin: 0 auto;
  
  &:nth-of-type(1) {
    margin-left: 5%;
  }
`;

Artist.MobileImage = styled.img`
  display: block;
  width: 95%;
  object-fit: cover;
  margin: 0 auto;
`;

Artist.DetailsWrapper = styled.div`
  width: 95%;
  margin: 20px auto;
  text-align: center;
`;

export default Artist;
