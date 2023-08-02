import React from "react";
import beneficiosData from "../../assets/data/beneficiosData";
import "../../styles/beneficios.css";

const Beneficios = () => {
  return (
    <div className="beneficios-container">
      <div className="beneficios-row">
        {beneficiosData.map((item) => (
          <div className="beneficios-col" key={item.id}>
            <item.icon className="beneficios-icon" />
            <h6 className="beneficios-title">{item.title}</h6>
            <p className="beneficios-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beneficios;
