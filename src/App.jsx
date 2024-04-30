import { useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaseStudy from "./pages/casestudy/CaseStudy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/casestudy" element={<CaseStudy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
