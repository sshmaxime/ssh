import { FC } from "react";

import NavbarComponent from "./components/basics/navbar";
import FooterComponent from "./components/basics/footer";

// router
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/home";

// style
import Style from "../style";

const App: FC = () => {
  return (
    <Style.Root>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterComponent />
    </Style.Root>
  );
};

export default App;
