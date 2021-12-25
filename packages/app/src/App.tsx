import { FC } from "react";

import NavbarComponent from "./components/basics/navbar";
import FooterComponent from "./components/basics/footer";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/home";

// style
import "./index.css";
import Style from "./style";

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Style.Root>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <FooterComponent />
        </Style.Root>
      </BrowserRouter>
    </>
  );
};

export default App;
