import React from "react";
import MainComponent from "../Components/Main/Main";
import Prismic from "prismic-javascript";
import { PRISMIC_API } from "../config";

const Artistes = () => {
  return (
    <MainComponent>
      <img
        src="../static/images/coming_soon/a_1920X1080.jpg"
        srcSet="../static/images/coming_soon/a_1920X1080.jpg 1920w,
        ../static/images/coming_soon/a_1080X1920_1.jpg 1080w,
        ../static/images/coming_soon/a_1366X768.jpg 1366w,
        ../static/images/coming_soon/a_2560X1440.jpg 2560w,
        ../static/images/coming_soon/a_5120X2880.jpg 5120w"
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
