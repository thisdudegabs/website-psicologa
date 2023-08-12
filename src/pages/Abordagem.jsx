import React from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/abordagem.css";
import AbordagemImg from "../assets/all-images/inserts/abordagemImg.png";

const Abordagem = () => {
  return (
    <Helmet title=" - Abordagem">
      <div className="abordagem-container">
        <img
          src={AbordagemImg}
          alt="Imagem da Página Abordagem"
          className="abordagem-imagem"
        />

        <h1 className="abordagem-titulo">ACEITAÇÃO E COMPROMISSO</h1>
        <p className="abordagem-descrição">
          A terapia de aceitação e compromisso, frequentemente chamada de ACT, é
          uma{" "}
          <span className="abordagem-highlight">
            terapia cognitivo-comportamental{" "}
          </span>
          de terceira onda que tem por objetivo aumentar a flexibilidade
          psicológica. Essa terapia é baseada em estratégias de aceitação,
          mindfulness e comprometimento a fim de obter uma mudança no
          comportamento.
        </p>

        <div className="curve-bg1">
          <p className="abordagem-descrição">
            A <span className="abordagem-highlight2">ACT</span> acredita que o
            sofrimento humano surge a partir de uma inflexibilidade psicológica
            causada por esquiva experiencial, fusão cognitiva, apego a um
            conceito rígido de si mesmo e a perda do contato com o momento
            presente.{" "}
            <span className="abordagem-highlight2">
              Tudo isso leva o indivíduo a ter dificuldade em agir de acordo com
              seus próprios valores
            </span>
            , frequentemente tomando decisões que considera erradas e acumulando
            dificuldades em sua vida.{" "}
          </p>
        </div>

        <p className="abordagem-descrição">
          Há um foco relativamente alto na linguagem nessa abordagem
          terapêutica. Isso porque a maneira que{" "}
          <span className="abordagem-highlight">
            a linguagem afeta a nossa percepção
          </span>{" "}
          também pode contribuir para essas distorções cognitivas. Por isso,
          técnicas relacionadas a reformulação de falas e pensamentos são
          constantemente usadas nessa terapia.
        </p>

        <p className="abordagem-descrição">
          A terapia de aceitação e compromisso recebe esse nome porque é focada
          em 3 áreas:
        </p>

        <div className="curve-bg1">
          <ol className="abordagem-lista">
            <li>
              <span className="abordagem-highlight2">Aceitação</span> da
              realidade e das reações emocionais e comportamentais;
            </li>
            <li>
              <span className="abordagem-highlight2">Escolha</span> de uma
              direção de acordo com os valores do indivíduo;
            </li>
            <li>
              <span className="abordagem-highlight2">Comprometimento</span> com
              a mudança desejada.
            </li>
          </ol>
        </div>
      </div>
    </Helmet>
  );
};

export default Abordagem;
