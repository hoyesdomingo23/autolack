// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/home/Home";
import Quienessomos from "./components/quienessomos/Quienessomos";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Quienessomos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
