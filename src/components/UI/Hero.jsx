import React from "react";
import heroImage from "../../assets/hero/image-hero.png";
import "../../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text text-center">
        <h2 className="custom-h2 custom-h2-1">
          A liberdade para ser a pessoa que você sempre quis ser
        </h2>
        <h2 className="custom-h2 custom-h2-2">A um clique de distância</h2>
        <img
          src={heroImage}
          alt="Imagem de homem com braços abertos em frente a uma montanha e nuvens"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
