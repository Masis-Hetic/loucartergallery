import React from "react";
import Nav from "../Nav/Nav";
import MenuBurger from "../Nav/MenuBurger";

const MainComponent = props => (
  <main className="clearfix">
    <MenuBurger />
    <Nav />
    {props.children}
  </main>
);

export default MainComponent;
