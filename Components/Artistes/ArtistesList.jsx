import React, { Fragment } from "react";
import Link                from "next/link";
const ArtistesList = props => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          background: 'grey',
          width: '60%',
          height: '60vh',
        }}
      >
        <ul
          className="ok"
          style={{
            height: 'inherit',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {props.artists.map((artiste, i) => <li key={i}>{artiste.data.name[0].text}</li>)}
        </ul>
      </div>
      {props.currentPage < props.maxPage &&
        <Fragment>
          <Link
            href={`/artistes/page-[page]`}
            as={`/artistes/page-${props.currentPage+1}`}
            // as={`/artistes}`}
          >
            <a
              onClick={props.page}
              style={{color: 'white', background: 'purple'}}
            >NEXT</a>
          </Link>
        </Fragment>
      }
      <h1>{props.currentPage}-{props.maxPage}</h1>
      <style jsx>{`
        .ok li {
          width: 50%;
          background: hotpink;
          line-height: 2.5;
          text-align: center;
        }
      `}</style>
    </div>
  )
};

export default ArtistesList;
