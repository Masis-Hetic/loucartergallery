import React   from 'react';
import Prismic from 'prismic-javascript';
import App, { Container }    from 'next/app';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux-store';

// import { PRISMIC_API }       from '../config';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
import { getNavDatas } from "../store/actions/nav.action";

import Router from 'next/router';
import { initGA, logPageView } from '../helpers/analytics';

class LouCarter extends App {
  /**
   *
   * @param Component
   * @param ctx
   * @returns {Promise<{pageProps: {}, myLinks: *}>}
   *
   * Ici on appelle les éléments qu'on va afficher sur toutes les pages, pour faire l'appelle qu'une seule fois
   *
   * Il faut connecter le reduxStore pour passer l'objet links dans le store, et ensuite c'est bon
   */
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    const API = await Prismic.api(publicRuntimeConfig.prismic);

    const links = await API.query(Prismic.Predicates.at('document.type', 'link'),
      { orderings : '[my.link.order]' });
    const myLinks = await ctx.reduxStore.dispatch(getNavDatas(links.results));
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ...ctx });
    }

    return { pageProps: { ...pageProps }, myLinks };
  }

  componentDidMount () {
    initGA();
    logPageView();
    Router.router.events.on('routeChangeComplete', logPageView);
  }

  render() {
    const { Component, pageProps, myLinks, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={ reduxStore }>
          <Component { ...pageProps } { ...myLinks } />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(LouCarter);
