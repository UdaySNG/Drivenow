// Footer.js

import React from "react";
import "../scss/components/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Ontdek</h3>
          <ul>
            <li>Onze Auto's</li>
            <li>Tarieven</li>
            <li>Over Ons</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Diensten</h3>
          <ul>
            <li>Autoverhuur</li>
            <li>Langdurige Verhuur</li>
            <li>Chauffeursdiensten</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Neem Contact Op</li>
            <li>Locaties</li>
            <li>Veelgestelde Vragen</li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        &copy; 2024 DRIVENOW. Alle Rechten Voorbehouden.
      </div>
    </div>
  );
};

export default Footer;
