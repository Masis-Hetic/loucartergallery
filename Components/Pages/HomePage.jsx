import React, { Component } from 'react';
import Swipe from 'react-easy-swipe';
import Link from "next/link";

import SanitizedHTML from 'react-sanitized-html';

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
    const firstSlide = setTimeout(() => this.handleMouseMoving(), 5000);
    const interval = setInterval(this.handleMouseMoving, 5000);
    this.setState({interval, firstSlide});
  };

  componentWillUnmount() { clearInterval(this.state.interval); clearInterval(this.state.firstSlide); };

  /**
   * Change slide when user is swiping
   */
  incrementFunction = () => {
    this.setState({ firstSlide: null });

    const { visible } = this.state;
    // noinspection JSUnresolvedVariable
    if (visible >= this.props.result.data.body.length - 1) {
      this.setState( { visible: 0 } );
      return;
    }
    this.setState( { visible: visible + 1 } );
  };

  onSwipeEnd = () => this.incrementFunction();

  handleMouseMoving = () => {
    const { mouseMoving } = this.state;
    this.setState({ mouseMoving: mouseMoving + 1, visible: mouseMoving });
    // noinspection JSUnresolvedVariable
    mouseMoving >= this.props.result.data.body.length - 1 && this.setState({ mouseMoving: 0 });
  };

  clearMouseMoving = () => this.setState( { mouseMoving: this.state.visible } );

  render() {
    const { visible } = this.state;
    const { result, imgs } = this.props;

    // noinspection JSUnresolvedVariable
    return (
      <div className="home-image-wrapper">
        <div className="image-wrapper">

          <Swipe onSwipeEnd={ this.onSwipeEnd }>

            {result.data.body.map((bg, i) =>
              <div
                key={ i }
                className={ `swipe-wrapper ${ visible === i ? 'visible' : '' }` }
                onMouseMove={ this.clearMouseMoving }
              >
                <Link
                  href={ `${bg.primary.page_category.type === 'category' ? `/${bg.primary.page_category.slug}?slug=${bg.primary.link_to.uid}` : bg.primary.link_to.uid}` }
                  as={ `${bg.primary.page_category.type === 'category' ? `/${bg.primary.page_category.slug}/${bg.primary.link_to.uid}` : bg.primary.link_to.uid}` }
                >
                  <a>
                    {imgs[i] !== undefined && <img srcSet={imgs[i]} alt="" /> }
                    <h1>
                      <span>
                        { bg.primary.title_img[ 0 ].text }
                      </span>
                    </h1>
                    <h2>
                      <SanitizedHTML html={bg.primary.text[0] && bg.primary.text[0].text} />
                    </h2>
                  </a>
                </Link>
              </div>
            )}

          </Swipe>

        </div>
      </div>
    );
  }
}

export default HomePage;
