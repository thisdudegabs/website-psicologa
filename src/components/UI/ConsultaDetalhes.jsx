import React from "react";
import consultaData from "../../assets/data/consultaData";
import "../../styles/consulta-detalhes.css";

const ConsultaDetalhes = () => {
  return (
    <div className="consulta-container">
      <div className="consulta-row">
        {consultaData.map((item) => (
          <div className="consulta-col" key={item.id}>
            <item.icon className="consulta-icon" />
            <h6 className="consulta-title">{item.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ConsultaDetalhes;
