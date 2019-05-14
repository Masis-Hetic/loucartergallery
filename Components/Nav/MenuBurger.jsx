import React from 'react';

const MenuBurger = () => {
  return (
    <div className="burger-menu">
      <svg style={{width:24, height:24}} viewBox="0 0 24 24">
        <path fill="#d9e1e8" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
    </div>
  );
};

export default MenuBurger;
