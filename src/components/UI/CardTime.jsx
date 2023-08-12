import React from "react";
import "../../styles/card-time.css";
import Hellen from "../../assets/all-images/inserts/hellen.png";

const CardTime = () => {
  return (
    <div className="card-container">
      <div className="card1">
        <div className="imgBx1">
          <img src={Hellen} alt="Doutora Hellen" />
        </div>

        <div className="content1">
          <div className="details1">
            <h2>
              Dra. Hellen Santos
              <span style={{ display: "block" }}> Psicóloga</span>
            </h2>
            <div className="data1">
              <h3>
                +1.000{" "}
                <span style={{ display: "block" }}> Consultas Feitas</span>
              </h3>
              <h3>
                +15
                <span style={{ display: "block" }}> Anos de carreira</span>
              </h3>
              <h3>
                +1.000{" "}
                <span style={{ display: "block" }}> Vidas Melhoradas</span>
              </h3>
            </div>

            <div className="actionBtn1">
              <a
                href="https://perfil.psicologiaviva.com.br/hellensantos?_gl=1%2a257hyo%2a_ga%2aMTg2NzE0NDMwNS4xNjg5MTEzMTc3%2a_ga_DSMZTP0R32%2aMTY4OTExNjkzOS4yLjEuMTY4OTExNzA2MS4xNC4wLjA."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Seguir</button>
              </a>

              <a
                href="https://wa.me/553183126969"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Chat</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTime;
