import styled from "styled-components";
import media from "../../helpers/media";

const StyledArtistes = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

StyledArtistes.BackBtn = styled.a`
  cursor: pointer;
  padding: 15px;
  opacity: ${ props => props.currentPage > 1 ? 1 : 0 };
`;

StyledArtistes.NextBtn = styled.a`
  cursor: pointer;
  padding: 15px;
  opacity: ${ props => props.currentPage < props.maxPage ? 1 : 0 };
`;

StyledArtistes.Wrapper = styled.div`
  width: 60%;
  height: 60vh;
  
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
`;

StyledArtistes.Li = styled.li`
  width: 50%;
  line-height: 2.5;
  text-align: center;
  font-size: 20px;
  
  ${media.mobile`
    width: 100%;
    font-size: 16px;
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
  text-align: left; 
`;

StyledArtistes.ArtistLastName = styled.span`
  text-transform: uppercase;
  width: 50%;
`;

StyledArtistes.ArtistFirstName = styled.span`
  width: 50%;
`;

export default StyledArtistes;
