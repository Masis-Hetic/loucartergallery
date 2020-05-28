import React, { Component } from 'react';
import Link                 from 'next/link';
import SanitizedHTML        from 'react-sanitized-html';
import { get } from "lodash/fp";

class HomePage extends Component {
  state = {
    visible: 0,
    interval: null,
    firstSlide: null,
    mouseMoving: 0
  };

  /**
   * When component did mount, play first slide after 3500ms
   * and then, play slider every 3500ms
   */
  componentDidMount() {
    const firstSlide = setTimeout( () => this.handleMouseMoving(), 3700 );
    const interval = setInterval( this.handleMouseMoving, 3700 );
    this.setState( { interval, firstSlide } );
  };

  componentWillUnmount() {
    clearInterval( this.state.interval );
    clearInterval( this.state.firstSlide );
  };

  handleMouseMoving = () => {
    const { mouseMoving } = this.state;
    this.setState( { mouseMoving: mouseMoving + 1, visible: mouseMoving } );
    // noinspection JSUnresolvedVariable
    mouseMoving >= this.props.result.data.body.length - 1 && this.setState( { mouseMoving: 0 } );
  };

  clearMouseMoving = () => this.setState( { mouseMoving: this.state.visible } );

  render() {
    const { visible } = this.state;
    const { result, imgs } = this.props;

    // noinspection JSUnresolvedVariable
    return (
      <div className="home-image-wrapper">
        <div className="image-wrapper">

          { result.data.body.map( ( bg, i ) =>
            <div
              key={ i }
              className={ `swipe-wrapper ${ visible === i ? 'visible' : '' }` }
              onMouseMove={ this.clearMouseMoving }
            >
              {bg.primary.link_to.link_type === 'Document'
                ? (
                  <Link
                    href={ `${ bg.primary.page_category.type === 'category' ? `/${ bg.primary.page_category.slug }?slug=${ bg.primary.link_to.uid }` : bg.primary.link_to.uid }` }
                    as={ `${ bg.primary.page_category.type === 'category' ? `/${ bg.primary.page_category.slug }/${ bg.primary.link_to.uid }` : bg.primary.link_to.uid }` }
                  >
                    <a>
                      { imgs[ i ].length > 0 && <img srcSet={ imgs[ i ] } alt=""/> }
                      <h1>
                          <span>
                            { get('primary.title_img[0].text', bg) }
                          </span>
                      </h1>
                      <h2>
                        <SanitizedHTML html={ bg.primary.text[ 0 ] && bg.primary.text[ 0 ].text }/>
                      </h2>
                    </a>
                  </Link>
                )
                : (
                  <a href={ bg.primary.link_to.url } target="_blank">
                    { imgs[ i ].length > 0 && <img srcSet={ imgs[ i ] } alt=""/> }
                    <h1>
                      <span>
                        { bg.primary.title_img[ 0 ].text }
                      </span>
                    </h1>
                    <h2>
                      <SanitizedHTML html={ bg.primary.text[ 0 ] && bg.primary.text[ 0 ].text }/>
                    </h2>
                  </a>
                )
              }
            </div>
          ) }

        </div>
      </div>
    );
  }
}

export default HomePage;
