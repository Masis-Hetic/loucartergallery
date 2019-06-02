import React from "react";
import MainComponent from "../Components/Main/Main";
import Prismic from "prismic-javascript";
import { PRISMIC_API } from "../config";

const Eshop = () => {
  return (
    <MainComponent>
      <img
        src="../static/images/coming_soon/e_1080X1920.jpg"
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


Eshop.getInitialProps = async () => {
  const API = await Prismic.api( PRISMIC_API );

  const artistes = await API.query(
    Prismic.Predicates.at( 'document.type', 'eshop' ), { lang: 'fr-FR' }
  );

  return { artistes: artistes.results[ 0 ] }
};

export default Eshop;
