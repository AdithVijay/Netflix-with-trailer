import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <ul className="footer-links">
            <div className="footer-logos">
              <li>
                <i className="bx bxl-facebook-circle"></i>
              </li>
              <li>
                <i className="bx bxl-instagram"></i>
              </li>
              <li>
                <i className="bx bxl-twitter"></i>
              </li>
              <li>
                <i className="bx bxl-youtube"></i>
              </li>
            </div>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
            <li>Service Code</li>
          </ul>
          <ul className="footer-links">
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookies Preferences</li>
            <li>&copy; 1997-2023 Netflix, Inc.</li>
          </ul>
          <ul className="footer-links">
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
          <ul className="footer-links">
            <li>Media Centre</li>
            <li>Contact Us</li>
            <li>Privacy</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
