import React, { Component, Fragment } from 'react';
import COLORS from '../../helpers/colors';

const carousel = [
  {
    src: '../../static/images/homepage-white.jpg',
    alt: ''
  },
  {
    src: 'http://placehold.jp/1000x1000.png',
    alt: ''
  }
];

class HomePage extends Component {
  state = {
    visible: 0
  };

  componentDidMount() { setInterval(() => this.incrementFunction(), 7000); }

  componentWillMount() { clearInterval(this.incrementFunction); }

  incrementFunction = () => {
    const { visible } = this.state;
    if (visible >= carousel.length - 1) {
      this.setState( { visible: 0 } );
      return;
    }
    this.setState( { visible: visible + 1 } );
  };

  decrementFunction = () => {
    const { visible } = this.state;
    if (visible <= 0) {
      this.setState( { visible: carousel.length - 1 } );
      return;
    }
    this.setState({ visible: visible - 1});
  };

  render() {
    const { visible } = this.state;

    return (
      <Fragment>

        <div className="home-image-wrapper">
          <div className="button left-btn" onClick={ this.decrementFunction  }>
            <svg style={{width:35, height: 35}} viewBox="0 0 24 24">
              <path fill={`${COLORS.lightGrey}`} d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
            </svg>
          </div>

          <div className="image-wrapper">
            { carousel.map( ( img, i ) => (
              <div key={ i }>
                <img
                  key={ i }
                  className={ i === visible ? 'isActive' : '' }
                  src={ img.src }
                  alt=""
                />
              </div>
            ) ) }
          </div>

          <div className="button right-btn" onClick={ this.incrementFunction }>
            <svg style={{width: 35, height: 35}} viewBox="0 0 24 24">
              <path fill={COLORS.lightGrey} d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </div>
        </div>

      </Fragment>
    );
  }
}

export default HomePage;
