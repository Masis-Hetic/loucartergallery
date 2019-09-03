import styled from "styled-components";
import media from "../../helpers/media";

const liSmallDesktop = 45;
const liMiddleDesktop = 55;
const liLargeDesktop = 65;

const StyledArtistes = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

StyledArtistes.BackBtn = styled.a`
  cursor: pointer;
  padding: 15px;
  opacity: ${ props => props.currentPage > 1 ? '1' : '0' };
  
  ${media.mobile`
    display: none;
  `}
`;

StyledArtistes.NextBtn = styled.a`
  cursor: pointer;
  padding: 15px;
  opacity: ${ props => props.currentPage < props.maxPage ? '1' : '0' };
  
  ${media.mobile`
    display: none;
  `}
`;

StyledArtistes.Wrapper = styled.div`
  height: ${liSmallDesktop * 8}px;
  width: 54vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  @media(min-width: 1440px) {
    height: ${liMiddleDesktop * 8}px;
  }
  
  @media(min-width: 1920px) {
    height: ${liLargeDesktop * 8 }px;
    width: 50vw;
  }
  
  ${media.mobile`
    width: 100%;
  `}
`;

StyledArtistes.Ul = styled.ul`
  height: inherit;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-start;
  
  ${media.mobile`
    overflow: initial;
    padding: 0 5%;
    flex-wrap: nowrap;
  `}
`;

StyledArtistes.Li = styled.li`
  width: 50%;
  height: ${liSmallDesktop}px;
  font-size: 18px;
  display: flex;
  align-items: center;
  
  @media(min-width: 1440px) {
    height: ${liMiddleDesktop}px;
    font-size: 20px;
  }
  
  @media(min-width: 1920px) {
    height: ${liLargeDesktop}px;
    width: 50%;
  }
  
  ${media.mobile`
    width: 100%;
    font-size: 16px;
    line-height: 2.5;
  `}
`;

StyledArtistes.ArtistLink = styled.a`
  display: block;
  width: 100%;
  margin: 0 auto;
  cursor: pointer;
`;

StyledArtistes.NameWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: justify;
`;

StyledArtistes.ArtistLastName = styled.span`
  text-transform: uppercase;
  width: 55%;
  display: table;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 1%;
`;

StyledArtistes.ArtistFirstName = styled.span`
  width: 44%;
  display: table;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default StyledArtistes;
