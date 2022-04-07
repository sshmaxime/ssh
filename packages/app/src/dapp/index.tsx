import { FC } from "react";

// store
import { Provider } from "react-redux";

// router
import { Routes, Route } from "react-router-dom";

// pages
import DropPage from "./projects/drop/page";
import DropDapp from "./projects/drop/dapp";

// store
import { store } from "./store";
import FooterComponent from "./components/footer";
import NavbarComponent from "./components/navbar";

const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <NavbarComponent />
        <Routes>
          {/* DROP */}
          <Route path="/drop" element={<DropPage />} />
          <Route path="/drop/app" element={<DropDapp />} />
        </Routes>
        <FooterComponent />
      </Provider>
    </>
  );
};

export default App;
