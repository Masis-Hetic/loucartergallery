import React, { Fragment } from "react";
import Link                from "next/link";

const ArtistesList = props => {
  return (
    <div
      style={ {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      } }
    >

      { props.currentPage > 1 &&
      <Link
        href={ { pathname: `/artistes/page-[page]`, query: { page: props.currentPage - 1 } } }
        as={ `/artistes/page-${ props.currentPage - 1 }` }
      >
        <a
          onClick={ props.prevPage }
          style={ { color: 'white', background: 'purple' } }
        >
          PREV
        </a>
      </Link>
      }
      <div
        style={ {
          background: 'grey',
          width: '60%',
          height: '60vh',
        } }
      >
        <ul
          className="ok"
          style={ {
            height: 'inherit',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            overflow: 'hidden'
          } }
        >
          { props.artists.map( ( artiste, i ) => <li key={ i }>{ artiste.data.name[ 0 ].text }</li> ) }
        </ul>
      </div>

      { props.currentPage < props.maxPage &&
      <Link
        href={ { pathname: `/artistes/page-[page]`, query: { page: props.currentPage + 1 } } }
        as={ `/artistes/page-${ props.currentPage + 1 }` }
      >
        <a
          onClick={ props.nextPage }
          style={ { color: 'white', background: 'purple' } }
        >
          NEXT
        </a>
      </Link>
      }
      <style jsx>{ `
        .ok li {
          width: 50%;
          background: hotpink;
          line-height: 2.5;
          text-align: center;
        }
      ` }</style>
    </div>
  )
};

export default ArtistesList;
