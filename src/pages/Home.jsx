import React from "react";
import Helmet from "../components/Helmet/Helmet";
import Hero from "../components/UI/Hero";
import { Col, Container, Row } from "reactstrap";
import "../styles/home.css";
import Beneficios from "../components/UI/Beneficios";
import TestimonialSlider from "../components/UI/TestimonialSlider";

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
              <div className="text-intersection">
                <h2>Como terapia vai me ajudar?</h2>
                <Beneficios />
                <h2>Como é feito a consulta?</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-testimonials"></section>
    </Helmet>
  );
};

export default Home;
