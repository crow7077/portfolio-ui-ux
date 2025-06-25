import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/images/about-img.png";

const About = () => {
  return (
    <div className="about-container">
          <img className="about-img" src={aboutImg} alt="minha foto" />
      <div className="about">
        <h1>
          SOBRE
          <br />
          MIM
        </h1>
        <h2>
          Me chamo Renato Nunes Junior e sou Desenhista, Designer Gráfico,
          <br />
          Digital e UI Designer. Conheci a arte do desenho aos 7 anos de idade e
          <br />
          desde então, venho desenvolvendo minhas técnicas artísticas. Busquei
          <br />
          conhecimento na área digital e me tornei Designer Gráfico, com mais de
          <br />4 anos de experiência, apaixonado por criar visuais impactantes
          e
          <br />
          experiências digitais intuitivas. Tenho uma sólida base em softwares
          <br />
          como CorelDRAW, Photoshop, Canva, Figma e Procreate. Ao longo da minha
          <br />
          carreira, desenvolvi diversas habilidades, desde a criação de
          <br />
          logotipos e artes digitais até a prototipação de interfaces para sites
          <br />e aplicativos. Destaco-me pela minha capacidade de adaptação e
          por
          <br />
          estar sempre atualizado com as últimas tendências do mercado.
        </h2>
      </div>
    </div>
  );
};

export default About;
