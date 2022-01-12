import { FC } from "react";

// store
import { Provider } from "react-redux";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Drop from "./pages/drop";

// store
import { store } from "./store";
import NavbarComponent from "./components/navbar";

const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <NavbarComponent />
        <Routes>
          <Route path="/drop/*" element={<Drop />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
