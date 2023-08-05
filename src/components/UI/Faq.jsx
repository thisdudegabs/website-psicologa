import React, { useState } from "react";
import faqData from "../../assets/data/faqData";
import "../../styles/faq.css";

const Faq = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpansion = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const column1 = faqData.filter((item) => item.id <= 3);
  const column2 = faqData.filter((item) => item.id > 3);

  const renderColumn = (columnData) => (
    <div className="faq-column">
      {columnData.map((item) => (
        <div key={item.id} className="faq-box">
          <div className="faq-title" onClick={() => toggleExpansion(item.id)}>
            {item.title}
          </div>
          {expandedId === item.id && (
            <div
              className={
                "faq-description" + (expandedId === item.id ? " expanded" : "")
              }
            >
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="faq-container">
      {renderColumn(column1)}
      {renderColumn(column2)}
    </div>
  );
};

export default Faq;
