import React from "react";
import MainComponent from "../Components/Main/Main";
import Prismic from "prismic-javascript";
import { PRISMIC_API } from "../config";

const Eshop = () => {
  return (
    <MainComponent>
      {/*<div className="div1">*/}
      {/*  <p>En attendant la mise en ligne de e-shop,</p>*/}
      {/*  <p>Venez nous rendre visite à la galerie située au : </p>*/}
      {/*  <br/>*/}
      {/*  <p>8 rue pasteur, 75011 Paris</p>*/}
      {/*</div>*/}

      {/*<div className="div2">*/}
      {/*  <div>*/}
      {/*    <p>26-06-19</p>*/}
      {/*    <p>11-07-19</p>*/}
      {/*  </div>*/}
      {/*  <div style={{ margin: '20px 0' }}>*/}
      {/*    <p>Ouverture sur RDV</p>*/}
      {/*    <p>du mardi au samedi</p>*/}
      {/*    <p>11h - 17h</p>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <p>accès métro ligne 9</p>*/}
      {/*    <p>arrêt Saint-Ambroise</p>*/}
      {/*    <p>Accès bus, lignes : 46, 56, 69</p>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <img
        srcSet="../static/images/coming_soon/e_1080X1920_2.jpg"
        alt=""
      />
      <style jsx>{`
      img {
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        height: 70%;
        object-fit: cover;
        object-position: right;
      }
      .div1 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.2rem;
      }
      .div2 {
        position: absolute;
        bottom: 10%;
        right: 5%;
        font-size: 1rem;
      }
      `}</style>
    </MainComponent>
  )
};


Eshop.getInitialProps = async () => {
  const API = await Prismic.api( PRISMIC_API );

  const eshop = await API.query(
    Prismic.Predicates.at( 'document.type', 'eshop' ), { lang: 'fr-FR' }
  );

  return { eshop: eshop.results[ 0 ] }
};

export default Eshop;
