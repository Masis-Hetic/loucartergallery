import React from "react";
import MainComponent from "../Components/Main/Main";
import Prismic from "prismic-javascript";
import { PRISMIC_API } from "../config";

const Artistes = () => {
  return (
    <MainComponent>
      <img
        src="../static/images/coming_soon/a_1920X1080.jpg"
        alt=""
      />
      <style jsx>{`
      img {
        display: block;
        width: 100vw;
        height: 100vh;
      }
      `}</style>
    </MainComponent>
  )
};


Artistes.getInitialProps = async () => {
  const API = await Prismic.api( PRISMIC_API );

  const artistes = await API.query(
    Prismic.Predicates.at( 'document.type', 'artistes' ), { lang: 'fr-FR' }
  );

  return { artistes: artistes.results[ 0 ] }
};

export default Artistes;


// import React, { Component } from 'react';
//
// class Artistes extends Component {
//
//
//   render() {
//     return (
//       <div>
//         <img
//           srcSet={
//             "../static/images/a_1920X1080.jpg," +
//             "../static/images/a_1280X1024.jpg"
//           }
//           alt=""
//         />
//       </div>
//     );
//   }
// }
//
// export default Artistes;
