import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import logowhite from "../images/logo_white.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
const Footer = () => {
  return (
    <div>
      <div className="footer-head">
        <h3>Ready to start?</h3>
        <div className="home-heads">
          <input type="text" placeholder="Enter email address" />
          <input id="home-button" type="button" value="Schedule a demo" />
        </div>
      </div>
      <div className="footer">
        <Link to="./home#home-header" className="logodiv">
          <img id="logo-home" src={logowhite} alt="" />
        </Link>

        <div className="footer-topics">
          <Link to={`./pricing#price`}>
            <h3>Pricing</h3>
          </Link>
          <Link to={`./about#about-header`}>
            <h3>About</h3>
          </Link>
          <Link to={`./contact#contact-header`}>
            <h3>Contact</h3>
          </Link>
        </div>
        <div className="footer-icons">
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
          <a href="#">
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
