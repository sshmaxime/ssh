import { FC } from "react";

import NavbarComponent from "./components/stateful/navbar";
import FooterComponent from "./components/stateful/footer";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/home";
import AF1xCryptoPunks from "./pages/AF1xCryptoPunks";

// style
import "./index.css";
import Style from "./style";

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Style.Root>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AF1xCryptoPunks" element={<AF1xCryptoPunks />} />
          </Routes>
        </Style.Root>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
};

export default App;
