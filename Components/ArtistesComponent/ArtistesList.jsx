import React          from 'react';
import Link           from 'next/link';
import StyledArtistes from "./ArtistesList.style";
import ArrowRight     from "../../static/icons/arrow-right";
import ArrowLeft      from "../../static/icons/arrow-left";

const ArtistesList = props => {
  return (
    <StyledArtistes>

      <Link
        href={ { pathname: `/artistes/page-[page]`, query: { page: props.currentPage - 1 } } }
        as={ `/artistes/page-${ props.currentPage - 1 }` }
      >
        <StyledArtistes.BackBtn
          onClick={ props.prevPage }
          opacity={ Number(props.currentPage) }
        >
          <ArrowLeft width={44} height={44}/>
        </StyledArtistes.BackBtn>
      </Link>

      <StyledArtistes.Wrapper>
        <StyledArtistes.Ul>
          { props.artists.map( ( artiste, i ) =>
            <StyledArtistes.Li key={ i }>
              <Link
                href={ { pathname: `/artiste/[name]`, query: { name: artiste.uid } } }
                as={ `/artiste/${ artiste.uid }` }
              >
                <StyledArtistes.ArtistLink>
                  <StyledArtistes.NameWrapper>
                    <StyledArtistes.ArtistLastName>{ artiste.data.name[ 0 ].text }</StyledArtistes.ArtistLastName>
                    <StyledArtistes.ArtistFirstName> { artiste.data.prenom[ 0 ].text }</StyledArtistes.ArtistFirstName>
                  </StyledArtistes.NameWrapper>
                </StyledArtistes.ArtistLink>
              </Link>
            </StyledArtistes.Li> ) }
        </StyledArtistes.Ul>
      </StyledArtistes.Wrapper>

      <Link
        href={ { pathname: `/artistes/page-[page]`, query: { page: props.currentPage + 1 } } }
        as={ `/artistes/page-${ props.currentPage + 1 }` }
      >
        <StyledArtistes.NextBtn
          onClick={ props.nextPage }
          opacity={ props.currentPage }
        >
          <ArrowRight width={44} height={44}/>
        </StyledArtistes.NextBtn>
      </Link>

    </StyledArtistes>
  );
};

export default ArtistesList;
