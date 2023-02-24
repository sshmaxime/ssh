import React, { FC, useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import { Navbar } from "@/static/components/navbar";
import { Footer } from "@/static/components/footer";

import Home from "@/static/routes/index";
import Drop from "@/static/routes/drop";

const App: FC = ({ children }) => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/drop" element={<Drop />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
