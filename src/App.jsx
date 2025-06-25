import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer"
import About from "./components/About"

function App() {
  return (
    <div className="portfolio-container">
      <Header />
      <About />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
