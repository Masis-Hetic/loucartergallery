import React, { Component, Fragment } from 'react';
import Swipe from 'react-easy-swipe';
import Link from "next/link";

const carousel = [
  {
    src: '../../static/images/bg-ss19.jpg',
    alt: ''
  },
  {
    src: '../../static/images/bg-dark.jpg',
    alt: ''
  },
  {
    src: '../../static/images/homepage-lou.jpg',
    alt: ''
  }
];

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
    const firstSlide = setTimeout(() => this.handleMouseMoving(), 4000);
    const interval = setInterval(this.handleMouseMoving, 4000);
    this.setState({interval, firstSlide});
  };

  componentWillUnmount() { clearInterval(this.state.interval); clearInterval(this.state.firstSlide); };

  /**
   * Change slide when user is swiping
   */
  incrementFunction = () => {
    this.setState({ firstSlide: null });

    const { visible } = this.state;
    if (visible >= carousel.length - 1) {
      this.setState( { visible: 0 } );
      return;
    }
    this.setState( { visible: visible + 1 } );
  };

  onSwipeEnd = () => this.incrementFunction();

  handleMouseMoving = () => {
    const { mouseMoving } = this.state;

    this.setState({ mouseMoving: mouseMoving + 1, visible: mouseMoving });
    mouseMoving >= carousel.length - 1 && this.setState({ mouseMoving: 0 });
  };

  clearMouseMoving = () => this.setState( { mouseMoving: this.state.visible } );

  render() {
    const { visible } = this.state;

    return (
      <Fragment>

        <div className="home-image-wrapper">
          <div className="image-wrapper">

            <Swipe onSwipeEnd={ this.onSwipeEnd }>

              { carousel.map( ( img, i ) => (
                <div
                  className={ `swipe-wrapper ${ visible === i ? 'visible' : '' }` }
                  key={ i }
                >
                  <Link href={ '/about' }>
                    <a>
                      <img src={ img.src } alt="" onMouseMove={this.clearMouseMoving} />
                    </a>
                  </Link>
                </div>
              ) ) }

            </Swipe>

          </div>
        </div>

      </Fragment>
    );
  }
}

export default HomePage;
