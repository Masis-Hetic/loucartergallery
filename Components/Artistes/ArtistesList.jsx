import React from 'react';
import Link from 'next/link';
import StyledArtistes from "./ArtistesList.style";

const ArtistesList = props => {
  return (
    <StyledArtistes>

      {/*{ props.currentPage > 1 &&*/ }
      <Link
        href={ { pathname: `/artistes/page-[page]`, query: { page: props.currentPage - 1 } } }
        as={ `/artistes/page-${ props.currentPage - 1 }` }
      >
        <a
          onClick={ props.prevPage }
          style={ { color: 'white', cursor: 'pointer', padding: 15, opacity: props.currentPage > 1 ? 1 : 0 } }
        >
          { '<' }
        </a>
      </Link>
      {/*// }*/ }
      <StyledArtistes.Wrapper>
        <StyledArtistes.Ul>
          { props.artists.map( ( artiste, i ) =>
            <StyledArtistes.Li key={ i }>
              <Link
                href={ { pathname: `/artistes/[name]`, query: { name: artiste.uid } } }
                as={ `/artistes/${ artiste.uid }` }
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

      {/*{ props.currentPage < props.maxPage &&*/ }
      <Link
        href={ { pathname: `/artistes/page-[page]`, query: { page: props.currentPage + 1 } } }
        as={ `/artistes/page-${ props.currentPage + 1 }` }
      >
        <a
          onClick={ props.nextPage }
          style={ {
            color: 'white',
            cursor: 'pointer',
            padding: 15,
            opacity: props.currentPage < props.maxPage ? 1 : 0
          } }
        >
          >
        </a>
      </Link>
      {/*// }*/ }
    </StyledArtistes>
  );
};

export default ArtistesList;
