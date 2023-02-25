import React, { FC, useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import { Navbar } from "@/static/components/navbar";
import { Footer } from "@/static/components/footer";

import Home from "@/static/routes/index";
import Projects from "@/static/routes/projects";

const App: FC = ({ children }) => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/projects/*" element={<Projects />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
