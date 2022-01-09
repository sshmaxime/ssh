import { FC } from "react";

import NavbarComponent from "./components/navbar";
import FooterComponent from "./components/footer";

// router
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/home";
import Docs from "./pages/docs";

// style
import Style from "../style";

const App: FC = () => {
  return (
    <Style.Root>
      <NavbarComponent />
      <Routes>
        <Route path="/docs" element={<Docs />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterComponent />
    </Style.Root>
  );
};

export default App;
