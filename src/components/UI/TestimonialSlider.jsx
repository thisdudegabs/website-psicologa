import React from "react";
import Slider from "react-slick";
import "../../styles/testimonials-sliders.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ava01 from "../../assets/all-images/Avatares/ava-1.jpg";
import ava02 from "../../assets/all-images/Avatares/ava-2.jpg";
import ava03 from "../../assets/all-images/Avatares/ava-3.jpg";
import ava04 from "../../assets/all-images/Avatares/ava-4.jpg";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonialsDescription py-4 px-3">
        <p className="section_description">
          A Hellen é só a melhor psicóloga do mundo! Sempre fazendo um excelente
          trabalho. Sobre a plataforma, é muito pratica e de fácil acesso.
        </p>

        <div className="image-name">
          <img
            src={ava01}
            alt=""
            className="image-definitions image-rounderness"
          />

          <div>
            <h6 className="name">Victor Ferreira</h6>
            <p className="section_description"></p>
          </div>
        </div>
      </div>

      <div className="testimonialsDescription py-4 px-3">
        <p className="section_description">
          Mais uma vez (como todas as anteriores) tive uma experiência muito
          acolhedora.
        </p>

        <div className="image-name">
          <img
            src={ava02}
            alt=""
            className="image-definitions image-rounderness"
          />

          <div>
            <h6 className="name">Cintia Rocha</h6>
            <p className="section_description"></p>
          </div>
        </div>
      </div>

      <div className="testimonialsDescription py-4 px-3">
        <p className="section_description">
          Atendimento rápido e eficiente, além de preços acessíveis. Minha
          clínica veterinária de confiança!
        </p>

        <div className="image-name">
          <img
            src={ava03}
            alt=""
            className="image-definitions image-rounderness"
          />

          <div>
            <h6 className="name">Michael Dias</h6>
            <p className="section_description"></p>
          </div>
        </div>
      </div>

      <div className="testimonialsDescription py-4 px-3">
        <p className="section_description">
          Equipe simpática e atenciosa, sempre pronta para esclarecer minhas
          dúvidas. Recomendo a todos os donos de animais!
        </p>

        <div className="image-name">
          <img
            src={ava04}
            alt=""
            className="image-definitions image-rounderness"
          />

          <div>
            <h6 className="name">Victoria Luana</h6>
            <p className="section_description"></p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
