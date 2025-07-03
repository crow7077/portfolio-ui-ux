import React from "react";
import "../styles/Container.css";
import fundoDesign from "../assets/images/fundo_design.png";
import group1 from "../assets/images/group-1.png";
import cv from "../assets/images/cv.pdf";
import arrow from "../assets/images/arrow.svg";
import foldercv from "../assets/images/folder.svg";
import letraT from "../assets/images/letra-t-vetorizada.png";
import notebook from "../assets/images/notebook.png";
import project from "../assets/images/project-img.png";
import phone from "../assets/images/phone.svg";
import paintBucket from "../assets/images/paint-bucket.svg";
import vetor from "../assets/images/vetor.svg";

const Container = () => {
  return (
    <div className="container">
      <img className="fundoDesign" src={fundoDesign} alt="img.fundo.design" />
      {/*para importar imagens tem
      que colocar o nome dentro de { }*/}
      <img className="group1" src={group1} alt="img.group1" />
      <img
        className="foldercv"
        src={foldercv}
        alt="img.folder"
        onClick={() => window.open(cv, "_blank")}
      />
      <img className="arrow" src={arrow} alt="Seta Clicando" />
      <img className="letra-t" src={letraT} alt="Letra T" />
      <div className="line-horizon"></div>
      <div className="yellowbox">
        <h1 className="h02">Identidade Visual</h1>
        <h1 className="h01">Identidade Visual</h1>
        <h1 className="h03">Identidade Visual</h1>
        <div className="line-vert1"></div>
        <div className="line-vert2"></div>
      </div>
      <div className="yellowbox2">
        <div>
          <h1>
            WEB SITES
            <br />
            RESPONSIVOS
          </h1>
          <img className="phone1" src={phone} alt="Phone" />
          <img className="phone2" src={phone} alt="Phone" />
          <img className="phone3" src={phone} alt="Phone" />
        </div>
      </div>
      <div className="typewrite">Design UI/UX</div>
      <h1 className="welcome">
        BEM VINDO
        <br />
        AO MEU
        <br />
        <span className="portfolio-h1">PORTFÓLIO</span>
        <br />
        DE
      </h1>
      <div>
        <img className="notebook1" src={notebook} alt="Notebook" />
        <img className="notebook2" src={notebook} alt="Notebook" />
        <div className="box-white1"></div>
        <div className="box-white2"></div>
      </div>
      <div className="projects1">
        <img className="project1" src={project} alt="cards" />
        <img className="project1" src={project} alt="cards" />
        <img className="project1" src={project} alt="cards" />
        <img className="project1" src={project} alt="cards" />
      </div>
      <div className="projects2">
        <img className="project1" src={project} alt="cards" />
        <img className="project1" src={project} alt="cards" />
        <img className="project1" src={project} alt="cards" />
        <img className="project1" src={project} alt="cards" />
        <img className="project1" src={project} alt="cards" />
      </div>
      <div className="info-final">
        <img className="paint" src={paintBucket} alt="paint" />
        <div className="box-yellow"></div>
        <h1>
          MEU ESTILO DE
          <br />
          <span className="design-h1">DESIGN</span> É UM
          <br />
          REFLEXO DA MINHA
          <br />
          PERSONALIDADE.
        </h1>
      </div>
      <div className="contact">
        <img className="vetor" src={vetor} alt="vetor" />
        <h1>
          ENTRE EM
          <br />
          CONTATO
        </h1>
      </div>
    </div>
  );
};

export default Container;
