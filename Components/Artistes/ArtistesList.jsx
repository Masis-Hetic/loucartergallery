import React          from 'react';
import Link           from 'next/link';
import StyledArtistes from "./ArtistesList.style";

const ArtistesList = props => {
  return (
    <StyledArtistes>

      { props.currentPage > 1 &&
      <Link
        href={ { pathname: `/artistes/page-[page]`, query: { page: props.currentPage - 1 } } }
        as={ `/artistes/page-${ props.currentPage - 1 }` }
      >
        <a
          onClick={ props.prevPage }
          style={ { color: 'white', cursor: 'pointer', padding: 15 } }
        >
          {'<'}
        </a>
      </Link>
      }
      <StyledArtistes.Wrapper>
        <StyledArtistes.Ul>
          {/*{ props.artists.map( ( artiste, i ) => <li key={ i }>{ artiste.data.name[ 0 ].text }</li> ) }*/ }
          { props.artists.map( ( artiste, i ) => <StyledArtistes.Li key={ i }>
            { artiste.data.name[ 0 ].text }
          </StyledArtistes.Li> ) }
        </StyledArtistes.Ul>
      </StyledArtistes.Wrapper>

      { props.currentPage < props.maxPage &&
      <Link
        href={ { pathname: `/artistes/page-[page]`, query: { page: props.currentPage + 1 } } }
        as={ `/artistes/page-${ props.currentPage + 1 }` }
      >
        <a
          onClick={ props.nextPage }
          style={ { color: 'white', cursor: 'pointer', padding: 15 } }
        >
          >
        </a>
      </Link>
      }
    </StyledArtistes>
  );
};

export default ArtistesList;
