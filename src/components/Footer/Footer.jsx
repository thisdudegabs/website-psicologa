import React from "react";
import "../../styles/footer.css";
import logoImg from "../../assets/logo/logo.png";

const Footer = () => {
  const data = new Date();
  const ano = data.getFullYear();

  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="column logo">
          <img src={logoImg} alt="Logo" />
          <span className="slogan">Para uma vida melhor!</span>{" "}
        </div>
        <div className="column links">
          <h4>Links Rápidos</h4>
          <a href="/atendimento">Atendimento</a>
          <a href="/abordagem">Abordagem</a>
          <a href="/sobre">Sobre Mim</a>
        </div>
        <div className="column contact">
          <h4>Contato</h4>
          <p> Consultas 100% Online via Google Meet ou Psicologia Viva.</p>
          <p>Telefone: +55 31 8312-6969</p>
        </div>
      </footer>
      <div className="copyright">
        <i className="ri-copyright-line"></i>Copyright {ano} - Desenvolvido por
        Gabriel Franco.
      </div>
    </div>
  );
};

export default Footer;
