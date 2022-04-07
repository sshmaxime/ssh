import { FC } from "react";

// store
import { Provider } from "react-redux";

// router
import { Routes, Route } from "react-router-dom";

// pages
import App from "./app";
import Dapp from "./dapp";

// store
import { store } from "./store";
import FooterComponent from "./_utils/components/footer";
import NavbarComponent from "./_utils/components/navbar";

const Index: FC = () => {
  return (
    <>
      <Provider store={store}>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/app" element={<Dapp />} />
        </Routes>
        <FooterComponent />
      </Provider>
    </>
  );
};

export default Index;
