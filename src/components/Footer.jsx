import React from 'react'
import "../styles/Footer.css"
import footer from "../assets/images/img-footer.svg";
import homeIcon from "../assets/images/home.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-img" src={footer} alt="Footer" />
      <img className="home-icon" src={homeIcon} alt="Home Icon" />
    </div>
  );
};

export default Footer;
