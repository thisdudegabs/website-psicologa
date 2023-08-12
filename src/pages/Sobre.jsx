import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/sobre.css";
import "../styles/card-time.css";

import CardTime from "../components/UI/CardTime";

const Sobre = () => {
  const [showCardTime, setShowCardTime] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCardTime(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    import("../styles/sobre.css");
  }, []);

  return (
    <Helmet title=" - Sobre Mim">
      <section className="titulo-pagina">
        <Container>
          <Row>
            <Col lg="12" className="mb-2 mt-5 text-center">
              <h6 className="section_subtitle custom_top">Sobre</h6>
              <h2 className="section_title">Mim</h2>
              <CardTime showCardTime={showCardTime} />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Sobre;
