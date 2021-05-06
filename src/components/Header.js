import logo from "../images/logo.png";
import hamburger from "../images/hamburg.png";
import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";
import disableScroll from "disable-scroll";
const menuItems = [
  {
    title: "Pricing",
    url: "/pricing",
    cName: "nav-links",
  },
  {
    title: "About",
    url: "/about",
    cName: "nav-links",
  },
  { title: "Contact", url: "/contact", cName: "nav-links" },
];

const Header = () => {
  const [state, setState] = useState({ clicked: false });

  const handleClick = () => {
    if (state.clicked === false) {
      setState({ clicked: true });
      disableScroll.on();
    } else {
      setState({ clicked: false });
      disableScroll.off();
    }
  };
  useEffect(() => {
    if (state.clicked === false) {
      disableScroll.off();
    } else {
      disableScroll.on();
    }
  }, [state]);

  return (
    <>
      <nav className="NavBarItems">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="" />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i
            className={
              state.clicked ? "fas fa-window-close fa-lg" : "fa fa-bars fa-lg"
            }
          ></i>
        </div>
        <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <Button>Sign Up </Button> */}
      </nav>

      {/* <nav className="navbar navbar-expand-lg  navbar-light bg-transparent">
        <div className="navbar-logo">
          <Link to="/">
            <img src={Oval} alt="" />

            <h1 className="navbar-logo-text">DESIGNO</h1>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item ">
              <Link to="/about" className="nav-link">
                OUR COMPANY <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/location" className="nav-link">
                LOCATIONS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}
    </>
  );
};

export default Header;
