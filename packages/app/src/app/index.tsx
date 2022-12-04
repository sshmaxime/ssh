import { FC } from "react";

import Navbar from "./navbar";
import Footer from "./footer";
import App from "./app";

type props = {};

const Index: FC<props> = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <App />
      <Footer />
    </>
  );
};

export default Index;
