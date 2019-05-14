import React from "react";
import Nav from "../Nav/Nav";
import MenuBurger from "../Nav/MenuBurger";
import Footer from "../Footer/Footer";

// TODO remplacer le texte "lou carter gallery" par un logo

const MainComponent = props => (
  <main className="clearfix">

    <div className="head-wrapper clearfix">
      <div className="logo">
        <span>
          lou <br/>
          carter <br/>
        </span>
        <span>
          gallery
        </span>
      </div>

      <MenuBurger />

      <Nav />
    </div>

    {props.children}

    <Footer />
  </main>
);

export default MainComponent;
