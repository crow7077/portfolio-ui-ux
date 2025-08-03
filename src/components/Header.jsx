import '../styles/Header.css';
import nsDesign from "../assets/images/minha-logo.svg";

const Header = () => {
       return (
         <>
           {/* Barra de Navegação Superior */}
           <nav className="navbar">
             <div className="navbarBrand">
               <div className="brandCircle">
                 <img className="ns-design" src={nsDesign} alt="Logo" />
               </div>
               <span className="brandName">NSDesign</span>
             </div>
             <ul className="navbarNav">
               <li>
                 <a href="#home">Home</a>
               </li>
               <li>
                 <a href="#about">Sobre mim</a>
               </li>
               <li>
                 <a href="#projects">Meus Projetos</a>
               </li>
               <li>
                 <a href="#contact">Contato</a>
               </li>
             </ul>
           </nav>
         </>
       );
};

export default Header;