import { useState } from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import AboutMe from "./AboutMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
