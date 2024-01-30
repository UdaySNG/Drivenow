import React, { useState } from "react";
import "../scss/components/header.scss";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsNavOpen(false); // Close the menu after clicking on a section
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="main-header">
      <div className="main-header__content">
        <h1 className="main-header__title">DriveNow</h1>
        <nav className="main-header__nav">
          <button onClick={() => scrollToSection("about-section")} className="main-header__button">
            Over Ons
          </button>
          <button onClick={() => scrollToSection("contact-section")} className="main-header__button main-header__button--company">
            Bedrijf
          </button>
          <button onClick={() => scrollToSection("services-section")} className="main-header__button main-header__button--services">
            Diensten
          </button>
          <button onClick={toggleNav} className="main-header__button main-header__button--hamburger">
            ☰
          </button>
        </nav>
      </div>
      {isNavOpen && (
        <div className="main-header__nav--open">
          <div className="main-header__nav-item">
            <button onClick={() => scrollToSection("about-section")} className="main-header__nav-button">
              Over Ons
            </button>
          </div>
          <div className="main-header__nav-item">
            <button onClick={() => scrollToSection("contact-section")} className="main-header__nav-button main-header__nav-button--company">
              Bedrijf
            </button>
          </div>
          <div className="main-header__nav-item">
            <button onClick={() => scrollToSection("services-section")} className="main-header__nav-button main-header__nav-button--services">
              Diensten
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
