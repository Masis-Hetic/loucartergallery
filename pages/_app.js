import React from 'react';
import Prismic from 'prismic-javascript';
import App from 'next/app';
import {Provider} from 'react-redux';
import getConfig from 'next/config';
import {parseCookies, setCookie} from 'nookies';

import '../styles/empty.scss';

import withReduxStore from '../lib/with-redux-store';
import {storeCookiesDatas} from '../store/actions/cookies.action';
import {getNavDatas, navStatus} from '../store/actions/nav.action';
import {initGA} from '../helpers/analytics';

const {publicRuntimeConfig} = getConfig();

class LouCarter extends App {

  constructor(props) {
    const cookies = parseCookies({});
    if (!cookies.lou) {
      setCookie({}, 'lou', 'init', {path: '/'});
    }
    super(props);
  }

  /**
   *
   * @param Component
   * @param ctx
   * @param req
   * @returns {Promise<{pageProps: {}, myLinks: *}>}
   *
   * Ici on appelle les éléments qu'on va afficher sur toutes les pages, pour faire l'appel qu'une seule fois
   *
   * Il faut connecter le reduxStore pour passer l'objet links dans le store, et ensuite c'est bon
   */
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};
    const API = await Prismic.api(publicRuntimeConfig.prismic);
    const lang = ctx.query.lang === 'en' ? 'en-US' : 'fr-FR';
    let links;
    // links = await API.query( Prismic.Predicates.at( 'document.type', 'link' ), { orderings: '[my.link.order]', lang } );
    links = await API.query(Prismic.Predicates.at('document.type', 'link_group'), {lang});
    // { orderings: '[my.link_group.order]', lang }
    // );

    const secondLvl = links.results.filter((link) => !link.data.is_first_level);
    const firstLvl = links.results.filter((link) => link.data.is_first_level);
    if (!!secondLvl) {
      secondLvl.forEach((second) => {
        const lvlFound = firstLvl.find((first) => first.uid === second.data.intrication.uid);
        lvlFound && lvlFound.data.group_link.push(second);
      })
      // console.log({ fl: firstLvl[1].data.group_link[3].data })
    }
    // if (!links.length) {
    //   links = await API.query( Prismic.Predicates.at( 'document.type', 'link' ), { orderings: '[my.link.order]', lang: 'fr-FR' } );
    // }
    // const myLinks = await ctx.reduxStore.dispatch(getNavDatas(links.results));
    const myLinks = await ctx.reduxStore.dispatch(getNavDatas(firstLvl));
    const nav = ctx.reduxStore.dispatch(navStatus(false));
    const cookies = parseCookies(ctx);
    if (!cookies.lou) {
      setCookie({}, 'lou', 'init', {path: '/'});
    }
    ctx.reduxStore.dispatch(storeCookiesDatas(cookies));
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({...ctx});
    }
    return {pageProps: {...pageProps}, myLinks, nav, cookies};
  }

  componentDidMount() {
    initGA();
  }

  render() {
    const {Component, pageProps, myLinks, nav, reduxStore, cookies} = this.props;

    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} {...myLinks} {...navStatus} {...cookies} />
      </Provider>
    );
  }
}

export default withReduxStore(LouCarter);
