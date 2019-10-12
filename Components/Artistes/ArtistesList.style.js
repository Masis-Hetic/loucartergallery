import styled from 'styled-components';
import media  from '../../helpers/media';

const liSmallDesktop = 45;
const liMiddleDesktop = 55;
const liLargeDesktop = 65;

const StyledArtistes = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  ${media.mobile`
    margin-top: 100px;
  `}
`;

StyledArtistes.H1 = styled.h1`
  position: relative;
  text-align: center;
  align-self: flex-start;
  top: 10%;
  
  ${ media.mobile`
    top: unset;
  `}
`;

StyledArtistes.BackBtn = styled.a`
  cursor: pointer;
  padding: 15px;
  position: absolute;
  left: 10%;
  opacity: ${ props => Number(props.currentPage) > 1 ? '1' : '0' };
  display: ${ props => Number(props.currentPage) > 1 ? 'block' : 'none' };
  
  ${ media.mobile`
    display: none;
  ` }
`;

StyledArtistes.NextBtn = styled.a`
  cursor: pointer;
  padding: 15px;
  position: absolute;
  right: 10%;
  opacity: ${ props => Number(props.currentPage) < props.maxPage ? '1' : '0' };
  display: ${ props => Number(props.currentPage) < props.maxPage ? 'block' : 'none' };
  
  ${ media.mobile`
    display: none;
  ` }
`;

StyledArtistes.Wrapper = styled.div`
  height: ${ liSmallDesktop * 8 }px;
  width: 54vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  @media(min-width: 1440px) {
    height: ${ liMiddleDesktop * 8 }px;
  }
  
  @media(min-width: 1920px) {
    height: ${ liLargeDesktop * 8 }px;
    width: 50vw;
  }
`;

StyledArtistes.Ul = styled.ul`
  height: inherit;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-start;
  
  ${ media.mobile`
    overflow: initial;
    padding: 0 5%;
    flex-wrap: nowrap;
  ` }
`;

StyledArtistes.Li = styled.li`
  width: 50%;
  height: ${ liSmallDesktop }px;
  font-size: .80rem;
  display: flex;
  align-items: center;
  
  @media(min-width: 1440px) {
    height: ${ liMiddleDesktop }px;
    font-size: 1.2rem;
  }
  
  @media(min-width: 1920px) {
    height: ${ liLargeDesktop }px;
    width: 50%;
  }
  
  ${ media.mobile`
    width: 100%;
    font-size: 1rem;
    line-height: 2.5;
  ` }
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
