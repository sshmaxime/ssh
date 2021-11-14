import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// styles
import Style from "./style";

// components
import FullHeightContainer from "../../components/stateless/fullHeightContainer";
import Container from "../../components/stateless/container";
import Project from "../../components/stateless/project";
import Spacer from "../../components/stateless/spacer";

import image1 from "../../assets/images/Punk_3011.png";
import image2 from "../../assets/images/Punk_5217.png";
import image3 from "../../assets/images/Punk_8857.png";
import image4 from "../../assets/images/Punk_dogg.png";

import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <Style.Root>
      <FullHeightContainer
        title="WE DO"
        secondTitle="Really . Cool . Stuff"
        smallTitle="( or at least, we think we do ... )"
      />
      <Spacer />
      <Container title="LIVE PROJECTS">
        <Project
          inputTitle="AF1x CryptoPunks"
          inputImgs={[image1, image2, image3, image4]}
          inputLinks={[
            {
              linkName: "Etherscan",
              linkUrl: "",
            },
            {
              linkName: "OpenSea",
              linkUrl: "",
            },
          ]}
        />
        <Project disabled />
      </Container>
      <Spacer />
      <Container title={`SSH`}></Container>
      <Spacer />
    </Style.Root>
  );
};

export default Home;
