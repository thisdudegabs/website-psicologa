import React from "react";
import Helmet from "../components/Helmet/Helmet";
import Hero from "../components/UI/Hero";
import Beneficios from "../components/UI/Beneficios";
import { Col, Container, Row } from "reactstrap";

const Home = () => {
  return (
    <Helmet title=" - Home">
      <section className="section-hero">
        <Container>
          <Row>
            <Col className="hero-col">
              <Hero />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-beneficios">
        <Container>
          <Row>
            <Col>
              <Beneficios />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
