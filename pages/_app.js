import React                       from 'react';
import Prismic                     from 'prismic-javascript';
import App, { Container }          from 'next/app';
import { Provider }                from 'react-redux';
import withReduxStore              from '../lib/with-redux-store';
import getConfig                   from 'next/config';
import { parseCookies, setCookie } from 'nookies';

const { publicRuntimeConfig } = getConfig();

import { storeCookiesDatas }      from '../store/actions/cookies.action';
import { getNavDatas, navStatus } from '../store/actions/nav.action';
import { initGA, logPageView }    from '../helpers/analytics';

class LouCarter extends App {
  
  constructor(props) {
    const cookies = parseCookies({});
    if (!cookies.lou) { setCookie({}, 'lou', 'init', { path: '/' }); }
    super(props);
  }
  
  /**
   *
   * @param Component
   * @param ctx
   * @param req
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
    if (!cookies.lou) { setCookie({}, 'lou', 'init', { path: '/' }); }
    ctx.reduxStore.dispatch(storeCookiesDatas(cookies));
    if (Component.getInitialProps) { pageProps = await Component.getInitialProps({ ...ctx }); }
    return { pageProps: { ...pageProps }, myLinks, nav, cookies };
  }
  
  componentDidMount() { initGA(); }
  
  render() {
    const { Component, pageProps, myLinks, nav, reduxStore, cookies } = this.props;
    
    return (
      <Container>
        <Provider store={ reduxStore }>
          <Component { ...pageProps } { ...myLinks } { ...navStatus } { ...cookies } />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(LouCarter);
