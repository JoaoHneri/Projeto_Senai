import React, { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import { Home } from "../components/Pages/Home/Home";
import Eventos from "../components/Pages/Eventos/Eventos";

function ToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Rotas = () => {
  return (
    <Router>
      <ToTop />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/eventos" Component={Eventos} />
      </Routes>
    </Router>
  );
};

export default Rotas;
