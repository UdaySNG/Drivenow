import React, { useState, useEffect } from "react";
import "../scss/components/header.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(false); // Verberg het menu als het scherm groter is dan 768px
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="main-header">
      <div className="main-header__content">
        <h1 className="main-header__title">DriveNow</h1>
        <button className="main-header__toggle" onClick={toggleMenu}>
          <span className="main-header__toggle-icon">&#9776;</span>
        </button>
        <nav className={`main-header__nav ${showMenu ? "main-header__nav--open" : ""}`}>
          <button
            onClick={() => {
              scrollToSection("about-section");
              setShowMenu(false); // Sluit het menu bij klik op een item
            }}
            className="main-header__button"
          >
            Over Ons
          </button>
          <button
            onClick={() => {
              scrollToSection("contact-section");
              setShowMenu(false); // Sluit het menu bij klik op een item
            }}
            className="main-header__button main-header__button--company"
          >
            Bedrijf
          </button>
          <button
            onClick={() => {
              scrollToSection("services-section");
              setShowMenu(false); // Sluit het menu bij klik op een item
            }}
            className="main-header__button main-header__button--services"
          >
            Diensten
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
