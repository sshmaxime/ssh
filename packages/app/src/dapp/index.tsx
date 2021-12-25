import { FC } from "react";

// store
import { Provider } from "react-redux";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import DApp from "./dapp";

// store
import { store } from "./store";

const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<DApp />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
