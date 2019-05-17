import React, { Component } from 'react';
import Link from "next/link";
import COLORS from '../../helpers/colors';

class MenuBurger extends Component {
  state = {
    isOpen: false
  };

  openMenu = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;

    return (
      <div className="burger-menu">
        <div className="open-icon" onClick={ this.openMenu }>
          <svg style={ { width: 24, height: 24 } } viewBox="0 0 24 24">
            <path fill={COLORS.lightGrey} d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
          </svg>
        </div>

        <nav className={ `${ isOpen ? 'open' : 'close' } clearfix` }>
          <div className="close-icon" onClick={ this.openMenu }>
            <svg style={ { width: 24, height: 24 } } viewBox="0 0 24 24">
              <path fill={COLORS.lightGrey} d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
            </svg>
          </div>

          <div className="logo">
            <span>
              lou <br/>
              carter <br/>
            </span>
            <span>
              gallery
            </span>
          </div>

          <ul>
            <li>SS19</li>
            <li>FW 19/20</li>
            <li>Artistes</li>
            <li>Collections</li>
            <li>
              <Link href={ '/gallery' }>
                <a>Gallery</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MenuBurger;
