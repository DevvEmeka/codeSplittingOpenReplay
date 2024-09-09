import React from "react";
import "./Amazon_clone.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiCartDownload } from "react-icons/bi";

function Navbar() {
  return (
    <section className="nav_con">
      <header>
        <div className="navbar__logoImage">
          <img src="/unnamed.png" alt="logo" />
        </div>
        <div className="header_txt">
          amazon e-commerce
        </div>
        <div className="header_cart">
          <BiCartDownload className="amazon_cart" />
          <div></div>
        </div>
      </header>
      <nav className="navbar">
        <div className="navbar_div_one">
          <GiHamburgerMenu className="icon" />
          <div className="">All</div>
        </div>
        <div className="navbar_div_two">
          <div className="">Today's Deal</div>
          <div className="">Customer Service</div>
          <div className="">Registry</div>
          <div className="">Gift Cards</div>
          <div className="">Sell</div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
