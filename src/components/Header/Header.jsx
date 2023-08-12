import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  const handleFaqClick = () => {
    localStorage.setItem("scrollToFaq", "true");
    navigate("/");
  };

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
            {navLinks.map((link, index) =>
              link.path === "/faq" ? (
                <a
                  href="#"
                  onClick={handleFaqClick}
                  key={index}
                  className="nav-item"
                >
                  {link.display}
                </a>
              ) : (
                <Link to={link.path} key={index} className="nav-item">
                  {link.display}
                </Link>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
