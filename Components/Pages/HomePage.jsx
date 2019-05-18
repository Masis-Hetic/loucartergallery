import React, { Component, Fragment } from 'react';

import SwipeableViews from 'react-swipeable-views';
// import SwipeableViews from '../../lib/Swipeable';
import { autoPlay } from 'react-swipeable-views-utils';
import Animated from 'animated/lib/targets/react-dom';
import Link from "next/link";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const carousel = [
  {
    src: '../../static/images/homepage-white.jpg',
    alt: ''
  },
  {
    src: '../../static/images/homepage-lou.jpg',
    alt: ''
  }
];

const albums = [
  {
    name: 'Abbey Road',
    src: '../../static/images/homepage-white.jpg',
  },
  {
    name: 'Bat Out of Hell',
    src: '../../static/images/homepage-lou.jpg',
  },
  {
    name: 'Abbey Road',
    src: '../../static/images/homepage-white.jpg',
  },
  {
    name: 'Bat Out of Hell',
    src: '../../static/images/homepage-lou.jpg',
  }
];


// TODO https://github.com/xiaody/react-touch-carousel


class HomePage extends Component {
  state = {
    visible: 0,
    index: 0,
    position: new Animated.Value(0),
  };

  handleChangeIndex = index => {
    this.setState({ index });
    this.state.position.setValue(index);
  };

  handleSwitch = (index, type) => {
    if (type === 'end') {
      Animated.spring(this.state.position, { toValue: index }).start();
      return;
    }
    this.state.position.setValue(index);
  };
  render() {
    const styles = {
      root: {
      },
      slide: {
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',
        transition: '.3s'
      },
      img: {
        width: '100%',
        height: 'auto',
        display: 'block',
        marginBottom: 16,
        transition: '.3s'
      },
    };

    const { index, position } = this.state;

    return (
      <Fragment>

        <div className="home-image-wrapper">

          <div>
            <AutoPlaySwipeableViews
              interval={5000}
              hysteresis={.2}
              index={index}
              style={styles.root}
              onChangeIndex={this.handleChangeIndex}
              onSwitching={this.handleSwitch}
            >
              {albums.map((album, currentIndex) => {
                const inputRange = albums.map((_, i) => i);
                const opacity = position.interpolate({
                  inputRange,
                  outputRange: inputRange.map(i => {
                    return currentIndex === i ? 1 : 0;
                  }),
                });
                const scale = position.interpolate({
                  inputRange,
                  outputRange: inputRange.map(i => {
                    return currentIndex === i ? 1 : 0.8;
                  }),
                });

                return (
                  <Link href={ '/about' } key={currentIndex}>
                    <a>
                      <Animated.div
                        key={ String( currentIndex ) }
                        style={ Object.assign(
                          {
                            opacity,
                            transform: [{ scale }],
                          },
                          styles.slide,
                        ) }
                      >
                        <img style={ styles.img } src={ album.src } alt="cover"/>
                        { album.name }
                      </Animated.div>
                    </a>
                  </Link>
                );
              })}
            </AutoPlaySwipeableViews>
          </div>

        </div>

      </Fragment>
    );
  }
}

export default HomePage;
