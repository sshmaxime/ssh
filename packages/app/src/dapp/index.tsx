import { FC } from "react";

// store
import { Provider } from "react-redux";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import DApp from "./dapp";

// store
import { store } from "./store";
import NavbarComponent from "./_components/navbar";

const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<DApp />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
