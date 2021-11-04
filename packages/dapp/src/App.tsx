import { FC } from "react";

import { NavbarComponent } from "./components/stateful/navbar/navbar";

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
        <NavbarComponent />
        <Style.Root>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Style.Root>
      </BrowserRouter>
    </>
  );
};

export default App;
