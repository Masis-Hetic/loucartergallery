import React from 'react';
import App, { Container } from 'next/app';

import Prismic from "prismic-javascript";
import { PRISMIC_API } from "../config";

class MyApp extends App {
  /**
   *
   * @param Component
   * @param ctx
   * @returns {Promise<{links: ApiSearchResponse, pageProps: {}}>}
   *
   * Ici on appelle les éléments qu'on va afficher sur toutes les pages, pour faire l'appelle qu'une seule fois
   *
   * Il faut connecter le reduxStore pour passer l'objet links dans le store, et ensuite c'est bon
   */
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    const API = await Prismic.api(PRISMIC_API);

    const links = await API.query( Prismic.Predicates.at("document.type", "links"), {} );

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({...ctx});
    }

    return { pageProps: {...pageProps}, links };
  }

  render() {
    const { Component, pageProps, links } = this.props;

    return (
      <Container>
        <Component {...pageProps} {...links} />
      </Container>
    );
  }
}

export default MyApp;
