import React from 'react'
import "../styles/Footer.css"
import footer from "../assets/images/img-footer.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-img" src={footer} alt="Footer" />
    </div>
  );
};

export default Footer;
