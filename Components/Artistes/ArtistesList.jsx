import React          from "react";
import Link           from "next/link";
import { get }        from "lodash/fp"

import StyledArtistes from "./ArtistesList.style";
import ArrowRight     from "../../static/icons/arrow-right";
import ArrowLeft      from "../../static/icons/arrow-left";

/**
 * @property { number } currentPage
 * @property { number } prevPage
 * @property { number } nextPage
 * @property { string } artists
 * @param props
 * @returns {*}
 * @constructor
 */
const ArtistesList = props => {
  return (
    <StyledArtistes>

      <StyledArtistes.H1>Artistes exposés</StyledArtistes.H1>

      <Link
        href={ { pathname: `/artistes/page-[page]`, query: { page: props.currentPage - 1 } } }
        as={ `/artistes/page-${ props.currentPage - 1 }` }
      >
        <StyledArtistes.BackBtn
          onClick={ props.prevPage }
          opacity={ Number( props.currentPage ) }
        >
          <ArrowLeft width={ 44 } height={ 44 }/>
        </StyledArtistes.BackBtn>
      </Link>

      <StyledArtistes.Wrapper>
        <StyledArtistes.Ul length={ props.artists.length }>
          { props.artists.map( ( artiste, i ) =>
            <StyledArtistes.Li key={ i }>
              <Link
                href={ { pathname: `/artiste/[name]`, query: { name: artiste.uid } } }
                as={ `/artiste/${ artiste.uid }` }
              >
                <StyledArtistes.ArtistLink>
                  <StyledArtistes.NameWrapper>
                    <StyledArtistes.ArtistLastName><span style={ {
                      display: 'block',
                      width: '99%',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden'
                    } }>{ get('data.name[ 0 ].text', artiste) }</span></StyledArtistes.ArtistLastName>
                    <StyledArtistes.ArtistFirstName> { get('data.prenom[ 0 ].text', artiste) }</StyledArtistes.ArtistFirstName>
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
          opacity={ Number( props.currentPage ) }
        >
          <ArrowRight width={ 44 } height={ 44 }/>
        </StyledArtistes.NextBtn>
      </Link>

    </StyledArtistes>
  );
};

export default ArtistesList;
