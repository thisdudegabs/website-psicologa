import React, { Fragment } from "react";
import "../../styles/layout.css";

import Header from "../Header/Header";
import Routers from "../../routers/Routers";
import Footer from "../Footer/Footer";
import Icone from "../../assets/all-images/inserts/whatsapp.png";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
      <div className="whatsapp-icon">
        <a
          href="https://wa.me/553183126969"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Icone} alt="WhatsApp" />
        </a>
      </div>
    </Fragment>
  );
};

export default Layout;
