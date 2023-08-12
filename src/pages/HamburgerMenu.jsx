import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/hamburgerMenu.css";

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

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const handleFaqClick = () => {
    localStorage.setItem("scrollToFaq", "true");
    navigate("/");
    closeMenu();
  };

  return (
    <>
      <button className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      {isOpen && (
        <div className="hamburger-menu">
          <h1 className="menu-logo">HELLEN SANTOS</h1>
          {navLinks.map((link, index) =>
            link.path === "/faq" ? (
              <a
                href="#"
                key={index}
                className="menu-item"
                onClick={handleFaqClick}
              >
                {link.display}
              </a>
            ) : (
              <NavLink
                key={index}
                to={link.path}
                className="menu-item"
                onClick={closeMenu}
              >
                {link.display}
              </NavLink>
            )
          )}
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
