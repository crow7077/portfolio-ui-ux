import React from "react";
import "../styles/Container.css";
import fundoDesign from "../assets/images/fundo_design.png";
import group1 from "../assets/images/group-1.png";
import cv from "../assets/images/cv.pdf";
import arrow from "../assets/images/arrow.svg";
import foldercv from "../assets/images/folder.svg";
import letraT from "../assets/images/letra-t-vetorizada.png";

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
      <div className="yellowbox"></div>
      <div className="yellowbox2"></div>
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
    </div>
  );
};

export default Container;
