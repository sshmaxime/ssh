import React, { FC, Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Grid } from "@mui/material";

// styles
import Style from "./style";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import af1x_exemple from "../_utils/assets/images/Punk_7804.png";
import imgForMiddle from "../_utils/assets/images/imgForMiddle.png";
import { My3DRoom } from "../dapp";

// 3D
import ThreeDCoomponent from "../_utils/components/3d";
import ModelSkate from "../_utils/assets/models/Skate";
import { OrbitControls } from "@react-three/drei";

type props = {};

const MainComponent: FC<props> = ({ children }) => {
  return (
    <Style.Root>
      <Style.View1>
        <Style.Background>
          <Suspense fallback={null}>
            <My3DRoom />
          </Suspense>
          <Style.TitleContainer2>
            EXCLUSIVE <br />
            LIMITED <br />
            USABLE <br />
            WEARABLE
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
              <b>3D model</b> and backed IRL by a <b>physicial object</b>.
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
                              fontSize: "0.6em",
                            }}
                          >
                            (SUBLIME)
                          </span>
                        </Style.View3StepName>
                      </Grid>
                      <Grid item xs={12}>
                        <img
                          src={imgForMiddle}
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
              <b>
                <div
                  style={{
                    marginBottom: "10px",
                    fontWeight: 900,
                  }}
                >
                  <u>TO KNOW:</u>
                </div>
              </b>
              - <b>Full Ownership</b>.
              <br />- A DRIP can be in two states: <b>blank</b> or{" "}
              <b>complete</b>.
              <br />- Minting a DRIP gives an<b> SSH KEY </b>.
              <br />- You can only redeem the physical object by burning an
              <b> SSH KEY </b>.
            </Style.View2Content>
            {/* <Style.View3> */}
          </Grid>
          <Grid item xs={4}>
            <Grid container style={{ height: "100%", width: "100%" }}>
              <Grid item xs={12}>
                <ThreeDCoomponent camera={[0, 0, -60]}>
                  <ambientLight intensity={0.95} />
                  <ModelSkate
                    position={[0, 0, 0]}
                    rotation={[Math.PI / 2, Math.PI / 2, Math.PI]}
                  />
                  <OrbitControls
                    autoRotate={true}
                    autoRotateSpeed={10}
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
                      fontSize: "0.6em",
                    }}
                  >
                    SUBLIME
                  </span>
                </Style.View3StepName>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Style.View2>

      {/* </Style.View3> */}

      <Style.View4>
        <Style.ViewTitle>/ ROADMAP .</Style.ViewTitle>
        <Style.View2Content>TBA</Style.View2Content>
      </Style.View4>
    </Style.Root>
  );
};

export default MainComponent;
