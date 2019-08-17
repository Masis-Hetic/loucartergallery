import styled from "styled-components";
import media from "../../helpers/media";

export const NEXT = "NEXT";

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
    display: flex;
    width: 480px;
    position: relative;
    
    
    transition: ${props => (props.sliding ? "none" : "transform .3s ease")};
    transform: ${props => {
      if (!props.sliding) return "translateX(0%)";
      return "translateX(120px)";
    }};
    
    justify-content: center;
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
    flex: 1 0 100%;
    flex-basis: 120px;
    order: ${ props => props.order };
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
`;

// Artist.MobileImageWrapper = styled(Artist.ImageWrapper)`
//   display: none;
//
//   ${media.mobile`
//     display: block;
//   `}
// `;

Artist.ImageInnerWrapper = styled.div`
  width: 90%;
  height: 70%;
  margin: 0 auto;
  text-align: center;
`;

// Artist.MobileImageInnerWrapper = styled(Artist.ImageWrapper)`
//   display: none;
//
//   ${media.mobile`
//     display: block;
//   `}
// `;

Artist.Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: 20px;
`;

// Artist.MobileImage = styled(Artist.Image)`
//   display: none;
//
//   ${media.mobile`
//     display: block;
//   `}
// `;

Artist.Collection = styled.p`
  border-bottom: 1px solid #fff;
  display: table;
  margin: 0 auto 15px;
`;

// Artist.MobileCollection = styled(Artist.Collection)`
//   display: none;
//
//   ${media.mobile`
//     display: block;
//   `}
// `;

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
`;

Artist.Name = styled.h2`
  line-height: initial !important;
  margin-bottom: 30px;
`;

Artist.Description = styled.p`
  width: 95%;
`;

Artist.BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

Artist.BackBtn = styled.a`
  display: table;
  border: 1px solid #fff;
  margin: 30px 0;
  padding: 10px;
  cursor: pointer;
`;

export default Artist;
