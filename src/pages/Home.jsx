import React, { useEffect, useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import Hero from "../components/UI/Hero";
import { Col, Container, Row } from "reactstrap";
import "../styles/home.css";
import Beneficios from "../components/UI/Beneficios";
import TestimonialSlider from "../components/UI/TestimonialSlider";
import ConsultaDetalhes from "../components/UI/ConsultaDetalhes";
import Faq from "../components/UI/Faq";
import Header from "../components/Header/Header";

const Home = () => {
  const faqRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("scrollToFaq") === "true") {
      setTimeout(() => {
        faqRef.current.scrollIntoView({ behavior: "smooth" });
        localStorage.removeItem("scrollToFaq"); // Limpar para a próxima vez
      }, 100);
    }
  }, []);

  return (
    <Helmet title=" - Home">
      <Header />{" "}
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
      <section className="curve-bg1">
        <ConsultaDetalhes />
      </section>
      <section className="carousel-container">
        <Container>
          <Row>
            <Col>
              <div className="text-intersection">
                <h2>Veja quem já foi ajudado!</h2>
                <TestimonialSlider />
                <h2>PERGUNTAS FREQUENTES!</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="curve-bg2" id="faq" ref={faqRef}>
        <Faq />
      </section>
    </Helmet>
  );
};

export default Home;
