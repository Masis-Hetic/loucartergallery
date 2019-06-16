import React from "react";
import MainComponent from "../Components/Main/Main";
import Prismic from "prismic-javascript";
import { PRISMIC_API } from "../config";

const Artistes = () => {
  return (
    <MainComponent>
      <img
        srcSet="../static/images/coming_soon/artiste.jpg"
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
