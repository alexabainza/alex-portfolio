import { useState } from "react";
import "flowbite";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaseStudy from "./pages/casestudy/CaseStudy";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
