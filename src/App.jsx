// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/home/Home";
import Quienessomos from "./components/quienessomos/Quienessomos";
import Lineas from "./components/lineas/Lineas";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Quienessomos />} />
          <Route path="/lineas" element={<Lineas />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
