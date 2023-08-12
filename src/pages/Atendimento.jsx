import React from "react";
import Helmet from "../components/Helmet/Helmet";

import "../styles/atendimento.css";
import imagemAtendimento from "../assets/all-images/inserts/atendimentoImg.png";
import logoPlano1 from "../assets/all-images/inserts/logo1.png";
import logoPlano2 from "../assets/all-images/inserts/logo2.png";
import logoPlano3 from "../assets/all-images/inserts/logo3.png";
import logoPlano4 from "../assets/all-images/inserts/logo4.png";
import Icone1 from "../assets/all-images/inserts/icone1.png";
import Icone2 from "../assets/all-images/inserts/icone2.png";
import Icone3 from "../assets/all-images/inserts/icone3.png";

const Atendimento = () => (
  <Helmet title=" - Atendimento">
    <div className="atendimento-container">
      <img
        src={imagemAtendimento}
        alt="Imagem de Atendimento"
        className="atendimento-imagem"
      />
      <h1 className="atendimento-titulo">ATENDIMENTO</h1>
      <p className="descricao">
        O atendimento é feito 100% Online via{" "}
        <span className="atendimento-highlight">Google Meet</span> ou{" "}
        <span className="atendimento-highlight">Psicologia Viva</span>!
      </p>
      <h2 className="titulo">Planos Aceitos</h2>
      <div className="planos-logos">
        <img src={logoPlano1} alt="Logo do Plano 1" className="plano-unimed" />
        <img
          src={logoPlano2}
          alt="Logo do Plano 2"
          className="plano-bradesco"
        />
        <img src={logoPlano3} alt="Logo do Plano 3" className="plano-porto" />
        <img src={logoPlano4} alt="Logo do Plano 4" className="plano-prevent" />
      </div>

      <h2 className="titulo">Agenda Particular</h2>
      <p className="descricao-agenda">
        Combine comigo via Whatsapp o melhor dia pra você, o melhor horário! O
        agendamento será mandado como convite por e-mail para o Google Calendar
        já com o link para a sessão! No dia, basta acessar o link.{" "}
      </p>

      <h2 className="titulo">De onde posso fazer?</h2>
      <div className="icones">
        <img src={Icone1} alt="Logo do Plano 1" className="icone-celular" />
        <img src={Icone2} alt="Logo do Plano 2" className="icone-notebook" />
        <img src={Icone3} alt="Logo do Plano 3" className="icone-computador" />
      </div>
    </div>
  </Helmet>
);

export default Atendimento;
