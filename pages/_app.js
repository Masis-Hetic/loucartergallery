import React                       from 'react';
import Prismic                     from 'prismic-javascript';
import App, { Container }          from 'next/app';
import { Provider }                from 'react-redux';
import withReduxStore              from '../lib/with-redux-store';
import getConfig                   from 'next/config';
import Router                      from 'next/router';
import { parseCookies, setCookie } from 'nookies';

const { publicRuntimeConfig } = getConfig();

import { getNavDatas, navStatus } from '../store/actions/nav.action';
import { logPageView }            from '../helpers/analytics';

let gaActivated = false;
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
    const links = await API.query(Prismic.Predicates.at('document.type', 'link'), { orderings: '[my.link.order]' });
    const myLinks = await ctx.reduxStore.dispatch(getNavDatas(links.results));
    const nav = ctx.reduxStore.dispatch(navStatus(false));
    const cookies = parseCookies(ctx);
    if (Component.getInitialProps) { pageProps = await Component.getInitialProps({ ...ctx }); }
    if (!cookies.lou) { setCookie(ctx, 'lou', 'init', { path: '/' }); }
    return { pageProps: { ...pageProps }, myLinks, nav, cookies };
  }
  
  componentDidMount() {
    // logPageView();
    // Router.router.events.on('routeChangeComplete', logPageView);
  }
  
  render() {
    const { Component, pageProps, myLinks, nav, reduxStore } = this.props;
    
    return (
      <Container>
        <Provider store={ reduxStore }>
          <Component { ...pageProps } { ...myLinks } { ...navStatus } />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(LouCarter);
