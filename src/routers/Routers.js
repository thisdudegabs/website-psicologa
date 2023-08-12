import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../pages/Home";
import Atendimento from "../pages/Atendimento";
import Abordagem from "../pages/Abordagem";
import Sobre from "../pages/Sobre";

const Routers = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/atendimento" element={<Atendimento />} />
      <Route path="/abordagem" element={<Abordagem />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  );
};

export default Routers;
