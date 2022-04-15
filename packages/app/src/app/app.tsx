import React, { FC, Fragment, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Grid } from "@mui/material";

// styles
import Style from "./style";

import af1x_exemple from "../_utils/assets/images/Punk_7804.png";
import imgForMiddle from "../_utils/assets/images/imgForMiddle.png";
import { My3DRoom } from "../dapp";

// 3D
import * as THREE from "three";
import { TextureLoader } from "three";

import ThreeDCoomponent from "../_utils/components/3d";
import ModelSkate from "./3dscenes/demo/skate";
import { OrbitControls } from "@react-three/drei";
import ThreeDHouse from "./3dscenes/house";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useLoader } from "@react-three/fiber";
import SkateDefault from "../_utils/assets/models/SkateDefault";

//
import FastfoodIcon from "@mui/icons-material/Fastfood";

//
import { Slide } from "react-awesome-reveal";

//
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

type props = {};

const LandingScreenComponent: FC<props> = () => {
  return (
    <Style.LandingScreenComponent>
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
    </Style.LandingScreenComponent>
  );
};

const DripComponent: FC<props> = () => {
  const demoSkateDrips = [
    {
      itemId: 825,
      placeholderPath: "/models/skate/Tex/imgForMiddle.png",
    },
    {
      itemId: 397,
      placeholderPath: "/models/skate/Tex/imgForMiddle1.png",
    },
    {
      itemId: 527,
      placeholderPath: "/models/skate/Tex/imgForMiddle2.png",
    },
  ];

  const deckTextures = ["/models/skate/Tex/Deck_Sublimes.png"];

  const placeholderTexures = [
    "/models/skate/Tex/imgForMiddle.png",
    "/models/skate/Tex/imgForMiddle1.png",
    "/models/skate/Tex/imgForMiddle2.png",
  ];

  //
  const [stateCounter, setStateCounter] = useState(0);
  const [state, setState] = useState(demoSkateDrips[stateCounter]);

  useEffect(() => {
    const interval = setInterval(() => {
      let innerStateCounter = stateCounter;

      if (stateCounter === demoSkateDrips.length - 1) {
        innerStateCounter = 0;
      } else {
        innerStateCounter = stateCounter + 1;
      }
      setState(demoSkateDrips[innerStateCounter]);
      setStateCounter(innerStateCounter);
    }, 2000);

    return () => clearInterval(interval);
  }, [stateCounter]);

  return (
    <Style.DripComponent>
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
            piece of art that initially lives inside the blockchain as an <b>NFT</b> which is
            brought to life in the metaverse by a <b>3D model</b> and backed IRL by a{" "}
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
                      <img src={af1x_exemple} style={{ width: "100%" }} alt="" />
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
                      <img src={state.placeholderPath} style={{ width: "100%" }} alt="" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2} alignSelf="center">
                  <Style.View3Char>=</Style.View3Char>
                </Grid>
              </Grid>
            </Style.View3Container>
            At the border between the{" "}
            <b>
              <u>metaverse</u>
            </b>{" "}
            and the{" "}
            <b>
              <u>real world</u>
            </b>
            , you can finally <b>wear</b>
            {" & "}
            <b>use your NFT</b> through{" "}
            <b>
              <u>exclusive</u>
            </b>
            {" & "}
            <b>
              <u>collectionable</u>
            </b>{" "}
            items on the <b>blockchain</b> and <b>IRL</b> .
            <br />
            <Style.DripWarningContainer>
              <div
                style={{
                  fontSize: "0.9em",
                  fontWeight: 900,
                  marginBottom: "10px",
                  letterSpacing: "1px",
                }}
              >
                <u>WARNING :</u>
              </div>
              <ul>
                <li>
                  &#8226; Your friends will be <b>jealous</b>.
                </li>
              </ul>
            </Style.DripWarningContainer>
          </Style.View2Content>
        </Grid>
        <Grid item xs={4}>
          <Grid container style={{ height: "100%", width: "100%" }}>
            <Grid item xs={12}>
              <ThreeDCoomponent camera={[0, 0, -60]}>
                <ambientLight intensity={0.95} />
                <ModelSkate
                  deckTextures={deckTextures}
                  deckIndex={0}
                  placeholderTextures={placeholderTexures}
                  placeholderIndex={stateCounter}
                  id={demoSkateDrips[stateCounter].itemId}
                />
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
            <ArrowRightAltIcon style={{ color: "black", fontSize: "1.8em" }} />
          </Grid>
        </Grid>
      </Style.MoreLinkContainer>
    </Style.DripComponent>
  );
};

const Sbu: FC<{ no_u?: boolean }> = ({ children, no_u }) => {
  return <b>{no_u ? <>{children}</> : <u>{children}</u>}</b>;
};

const ColoredKw: FC<{ color: string }> = ({ color, children }) => {
  return (
    <span
      style={{
        backgroundColor: color,
        padding: "1.5px 12.5px 1.5px 12.5px",
        borderRadius: "2.5px",
      }}
    >
      {children}
    </span>
  );
};

const SocietyComponent: FC<{}> = () => {
  return (
    <Style.RoadmapComponent>
      <Style.ViewTitle>/ THE SOCIETY .</Style.ViewTitle>
      <Style.View2Content>
        When you mint a DRIP, in addition of the latter, you will get an <Sbu>SSH-KEY</Sbu>. It is
        precious. Hold on to it. <Sbu>You will need it</Sbu>.
        <br /> <br />
        This key is a <Sbu>membership</Sbu> access to the{" "}
        <Sbu no_u>
          <ColoredKw color="#F6EFB6">/ ssh society .</ColoredKw>
        </Sbu>
        , whose benefits and offerings will increase over time. Your <Sbu>SSH-KEY</Sbu> will open{" "}
        <Sbu>undiscovered</Sbu> {"&"} <Sbu>exclusive</Sbu> digital doors for you,{" "}
        <Sbu no_u>keep it safe</Sbu>.
      </Style.View2Content>
      <Style.MoreLinkContainer>
        <Grid container>
          <Grid item alignSelf={"center"}>
            <Style.MoreLink>READ MORE</Style.MoreLink>
          </Grid>
          <Grid item alignSelf={"center"}>
            <ArrowRightAltIcon style={{ color: "black", fontSize: "1.8em" }} />
          </Grid>
        </Grid>
      </Style.MoreLinkContainer>
    </Style.RoadmapComponent>
  );
};

const NowComponent: FC<props> = ({ children }) => {
  return (
    <Style.NowComponent>
      <Style.NowContainer>hello</Style.NowContainer>
    </Style.NowComponent>
  );
};

const MainComponent: FC<props> = ({ children }) => {
  return (
    <Style.Root>
      <LandingScreenComponent />
      <DripComponent />
      <SocietyComponent />
      <NowComponent />
    </Style.Root>
  );
};

export default MainComponent;
