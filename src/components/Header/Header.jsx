import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import logoImg from "../../assets/logo/logo.png";
import HamburgerMenu from "../../pages/HamburgerMenu";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/atendimento",
    display: "ATENDIMENTO",
  },
  {
    path: "/abordagem",
    display: "ABORDAGEM",
  },

  {
    path: "/sobre",
    display: "SOBRE MIM",
  },

  {
    path: "/faq",
    display: "FAQ",
  },
];

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 953px)" });

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <img src={logoImg} className="logo" alt="Logo" />
        </Link>
        {isMobile ? (
          <HamburgerMenu />
        ) : (
          <nav className="nav-links">
            {navLinks.map((link, index) => (
              <Link to={link.path} key={index} className="nav-item">
                {link.display}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
