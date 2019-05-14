import React from "react";
import Nav from "../Nav/Nav";

const MainComponent = props => (
  <main className="clearfix">
    <Nav />
    {props.children}
  </main>
);

export default MainComponent;
