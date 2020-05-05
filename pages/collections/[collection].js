import React, { Fragment, useState, useRef, useEffect } from 'react';
import SingleCollection                                 from "../../Components/Collections/Collection.style";
import Prismic                                          from "prismic-javascript";
import getConfig                                        from "next/config";
import MainComponent                                    from "../../Components/Main/Main";
import Head                     from "next/head";
import CloseBtn                 from "../../public/static/icons/close-btn";
import { connect, useDispatch } from "react-redux";
import { setNavPosition }                               from "../../store/actions/navPosition.action";

const { publicRuntimeConfig } = getConfig();

const mapStateToProps = state => ({ navPosition: state.navPosition });

/**
 * @property { string } dimensions
 * @property { string } artist_name
 * @property { string } meta_title
 * @param query
 * @param collection
 * @returns {*}
 * @constructor
 */
const Collection = ( { collection, res } ) => {
  const dispatch = useDispatch();

  const ul = useRef(null);
  const li = useRef(null);
  const [ lastLi, setLastLiWidth ] = useState(null);

  useEffect(() => {
    dispatch(setNavPosition(true));
    setLastLiWidth(li.current.getBoundingClientRect());

    return () => {
      dispatch(setNavPosition(false));
      setLastLiWidth(null);
    }
  }, []);

  const [ index, setIndex ] = useState(0);
  const [ height, setHeight ] = useState(0);
  const [ width, setWidth ] = useState(0);
  const [ left, setLeft] = useState(0);
  const [ display, setDisplay ] = useState(false);
  const handleClick = (e, i) => {
    setIndex(i);
    setHeight(e.target.offsetHeight);
    setLeft(ul.current.getBoundingClientRect().left);
    setWidth(ul.current.getBoundingClientRect().width);
    setDisplay(!display);
  };

  return (
    <Fragment>
      <Head>
        <title>{res.data.meta_title[0].text}</title>
      </Head>
      <MainComponent>
        <SingleCollection>
          <SingleCollection.Ul ref={ ul }>
            {collection.map((art, i)=>
              <SingleCollection.Li
                ref={ i === 0 ? li : null }
                onClick={ e => handleClick(e, i) }
                margin={ i % 2 === 0 ? '0 40px 40px 0' : '0 0 40px 0' } key={i}
                lastChild={lastLi}
              >
                <SingleCollection.Img src={ art.data.image.url } alt=""/>
              </SingleCollection.Li>
            )}
          </SingleCollection.Ul>

          <SingleCollection.SelectedImage
            left={ left }
            height={ height }
            display={ !display ? 'none' : 'flex' }
            onClick={() => setDisplay(false)}
          >
            <SingleCollection.MobileLogo
              src="../../static/icons/loucarter_logo_copie.png" alt=""
            />
            <SingleCollection.BigImage src={ collection[index].data.image.url } alt="" width={ width } />
            <SingleCollection.DescriptionWrapper>
              <SingleCollection.ArtistName>{collection[index].data.artist_name[0].text}</SingleCollection.ArtistName>
              <SingleCollection.CollectionName dangerouslySetInnerHTML={{ __html: collection[index].data.collection_name[0].text }}/>
              <SingleCollection.ArtName dangerouslySetInnerHTML={{ __html: collection[index].data.name[0].text }}/>
              <p dangerouslySetInnerHTML={{ __html: collection[index].data.dimensions[0].text }}/>
            </SingleCollection.DescriptionWrapper>
            <SingleCollection.CloseBtn>
              <CloseBtn/>
            </SingleCollection.CloseBtn>
          </SingleCollection.SelectedImage>
        </SingleCollection>

      </MainComponent>
    </Fragment>
  )
};

Collection.getInitialProps = async ( { query } ) => {
  const API = await Prismic.api( publicRuntimeConfig.prismic );

  const collection = await API.query( Prismic.Predicates.at( 'my.collection.uid', query.collection ), { lang: 'fr-FR' } )
    .then( async res => {
        const oeuvre = await API.query( Prismic.Predicates.at( 'my.oeuvre.tag', res.results[ 0 ].data.tag ), { lang: 'fr-FR', pageSize: 100 } );

        return { res, oeuvre };
      }
    );

  return {
    query,
    res: collection.res.results[0],
    collection: collection.oeuvre.results,
  }
};

export default connect(mapStateToProps, null) (Collection);
