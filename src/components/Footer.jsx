import React from "react";
import "../styles/Footer.css";
import footer from "../assets/images/img-footer.svg";
import homeIcon from "../assets/images/home.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import gitHub from "../assets/icons/github.svg";
import email from "../assets/icons/email.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img className="footer-img" src={footer} alt="Footer" />
        <img className="home-icon" src={homeIcon} alt="Home Icon" />
      </div>
      <div>
        <h1>
          Ficaria feliz em discutir novas oportunidades ou responder suas
          perguntas.
        </h1>
        <div redes-sociais>
          <div className="whatsapp">
            <img src={whatsapp} alt="WhatsApp" />
            <h2>WhatsApp</h2>
          </div>
          <div className="github">
            <img src={gitHub} alt="GitHub" />
            <h2>GitHub</h2>
          </div>
          <div className="email">
            <img src={email} alt="E-mail" />
            <h2>E-mail</h2>
          </div>
          <div className="instagram">
            <img src={instagram} alt="Instagram" />
            <h2>Instagram</h2>
          </div>
          <div className="linkedin">
            <img src={linkedin} alt="LinkedIn" />
            <h2>LinkedIn</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
