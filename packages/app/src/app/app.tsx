import React, { FC, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Grid } from "@mui/material";

// styles
import Style from "./style";

import af1x_exemple from "../_utils/assets/images/Punk_7804.png";
import imgForMiddle from "../_utils/assets/images/imgForMiddle.png";
import { My3DRoom } from "../dapp";

// 3D
import ThreeDCoomponent from "../_utils/components/3d";
import ModelSkate from "../_utils/assets/models/Skate";
import { OrbitControls } from "@react-three/drei";
import ThreeDHouse from "./components/3d_house";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

type props = {};

const exempleDrip = [
  {
    itemId: 825,
    texturePath: "/models/skate/Tex/Artboard 2.png",
    placeholderPath: "/models/skate/Tex/imgForMiddle.png",
  },
  {
    itemId: 397,
    texturePath: "/models/skate/Tex/Artboard 2.png",
    placeholderPath: "/models/skate/Tex/imgForMiddle1.png",
  },
  {
    itemId: 527,
    texturePath: "/models/skate/Tex/Artboard 2.png",
    placeholderPath: "/models/skate/Tex/imgForMiddle2.png",
  },
];

const MainComponent: FC<props> = ({ children }) => {
  const [stateCounter, setStateCounter] = useState(0);
  const [state, setState] = useState(exempleDrip[0]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     let innerStateCounter = stateCounter;

  //     if (stateCounter === exempleDrip.length - 1) {
  //       innerStateCounter = 0;
  //     } else {
  //       innerStateCounter = stateCounter + 1;
  //     }
  //     setState(exempleDrip[innerStateCounter]);
  //     setStateCounter(innerStateCounter);
  //   }, 2500);

  //   return () => clearInterval(interval);
  // }, [stateCounter]);

  return (
    <Style.Root>
      <Style.View1>
        <Style.Background>
          <ThreeDHouse />
          <Style.TitleContainer2>
            EXCLUSIVE <br />
            LIMITED <br />
            CUSTOMIZABLE <br />
          </Style.TitleContainer2>
          <Style.TitleContainer>
            <ArrowRightAltIcon
              style={{
                fontSize: "2em",
                animation: "bounce 2s infinite",
              }}
            />
          </Style.TitleContainer>
          <Style.Triangle />
        </Style.Background>
      </Style.View1>

      <Style.View2>
        <Grid container>
          <Grid item xs={8}>
            <Style.ViewTitle>/ DRIP .</Style.ViewTitle>
            <Style.View2Content>
              An{" "}
              <b>
                <u>exclusive</u>
              </b>
              ,{" "}
              <b>
                {" "}
                <u>limited</u>
              </b>{" "}
              and
              <b>
                {" "}
                <u>customizable</u>{" "}
              </b>
              piece of art that initially lives inside the blockchain as an{" "}
              <b>NFT</b> which is brought to life in the metaverse by a{" "}
              <b>3D model</b> and backed IRL by a{" "}
              <b>
                <u>redeemable</u> physical object
              </b>
              .
              <Style.View3Container>
                <Grid container justifyContent="center">
                  <Grid item xs={4}>
                    <Grid container rowSpacing={1}>
                      <Grid item xs={12}>
                        <Style.View3StepName>DRIP</Style.View3StepName>
                      </Grid>
                      <Grid item xs={12}>
                        <img
                          src={af1x_exemple}
                          style={{ width: "100%" }}
                          alt=""
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={2} alignSelf="center">
                    <Style.View3Char>+</Style.View3Char>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container rowSpacing={1}>
                      <Grid item xs={12}>
                        <Style.View3StepName>
                          NFT{" "}
                          <span
                            style={{
                              fontSize: "0.7em",
                            }}
                          >
                            (SUBLIME#{state.itemId})
                          </span>
                        </Style.View3StepName>
                      </Grid>
                      <Grid item xs={12}>
                        <img
                          src={state.placeholderPath}
                          style={{ width: "100%" }}
                          alt=""
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={2} alignSelf="center">
                    <Style.View3Char>=</Style.View3Char>
                  </Grid>
                </Grid>
              </Style.View3Container>
              <div
                style={{
                  fontSize: "1.1em",
                  fontWeight: 900,
                  marginBottom: "10px",
                }}
              >
                <u>WARRANTY:</u>
              </div>
              <ul style={{ lineHeight: "1.70em" }}>
                <li>
                  &#8226; <b>High Quality</b> 3D models.
                </li>
                <li>
                  &#8226; <b>High Quality</b> IRL products.
                </li>
                <li>
                  &#8226; Final products will be <b>dope af</b>.
                </li>
              </ul>
            </Style.View2Content>
            {/* <Style.View3> */}
          </Grid>
          <Grid item xs={4}>
            <Grid container style={{ height: "100%", width: "100%" }}>
              <Grid item xs={12}>
                <ThreeDCoomponent camera={[0, 0, -60]}>
                  <ambientLight intensity={0.95} />
                  <ModelSkate />
                  <OrbitControls
                    autoRotate={true}
                    autoRotateSpeed={7.5}
                    enableZoom={false}
                    enableRotate={false}
                    target={[0, 0, 0]}
                  />
                </ThreeDCoomponent>
              </Grid>
              <Grid item xs={12}>
                <Style.View3StepName>
                  DRIPx{" "}
                  <span
                    style={{
                      fontSize: "0.7em",
                    }}
                  >
                    SUBLIME#825
                  </span>
                </Style.View3StepName>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Style.MoreLinkContainer>
          <Grid container>
            <Grid item alignSelf={"center"}>
              <Style.MoreLink>READ MORE</Style.MoreLink>
            </Grid>
            <Grid item alignSelf={"center"}>
              <ArrowRightAltIcon style={{ fontSize: "1.8em" }} />
            </Grid>
          </Grid>
        </Style.MoreLinkContainer>
      </Style.View2>

      <Style.View4>
        <Style.ViewTitle>/ ROADMAP .</Style.ViewTitle>
        <Style.View2Content>TBD</Style.View2Content>
      </Style.View4>
    </Style.Root>
  );
};

export default MainComponent;
