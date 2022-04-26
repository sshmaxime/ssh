import React, { FC, Fragment, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Grid } from "@mui/material";

// styles
import Style from "./style";

import af1x_exemple from "../_utils/assets/images/Punk_7804.png";
import imgForMiddle from "../_utils/assets/images/imgForMiddle.png";

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

import img_sshkey from "../_utils/assets/images/sshkey.png";
import Clickable from "../_utils/components/stateless/clickable";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import me from "../_utils/assets/images/me.png";
import rems from "../_utils/assets/images/rems.png";
import Project from "../_utils/components/stateless/project";

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
              <ThreeDCoomponent camera={[0, 40, -60]}>
                <ambientLight intensity={0.95} />
                <ModelSkate
                  deckTextures={deckTextures}
                  deckIndex={0}
                  placeholderTextures={placeholderTexures}
                  placeholderIndex={stateCounter}
                  _id={demoSkateDrips[stateCounter].itemId}
                />
                <OrbitControls
                  autoRotate={true}
                  autoRotateSpeed={7.5}
                  enableZoom={false}
                  enableRotate={false}
                  target={[0, 40, 0]}
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
      {/* <Style.MoreLinkContainer>
        <Grid container>
          <Grid item alignSelf={"center"}>
            <Style.MoreLink>READ MORE</Style.MoreLink>
          </Grid>
          <Grid item alignSelf={"center"}>
            <ArrowRightAltIcon style={{ color: "black", fontSize: "1.8em" }} />
          </Grid>
        </Grid>
      </Style.MoreLinkContainer> */}
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
      <Style.ViewTitle>/ SOCIETY .</Style.ViewTitle>
      <Style.View2Content>
        When you mint a DRIP, in addition of the latter, you will get an <Sbu>SSH-KEY</Sbu>. It is
        precious so <Sbu>hold on to it</Sbu>.
        <br /> <br />
        The <Sbu>SSH-KEY</Sbu> is a <Sbu>membership</Sbu> access to the{" "}
        <Sbu no_u>
          <ColoredKw color="#F6EFB6">/ ssh society .</ColoredKw>
        </Sbu>
        , whose benefits and offerings will increase over time. Your <Sbu>SSH-KEY</Sbu> will open{" "}
        <Sbu no_u>undiscovered</Sbu> {"&"} <Sbu no_u>exclusive</Sbu> digital & physical doors for
        you, <Sbu>keep it safe</Sbu>.
      </Style.View2Content>
    </Style.RoadmapComponent>
  );
};

const TeamComponent: FC<{
  people: {
    name: string;
    job: string;
    img: string;
    bgColor?: string;
    icons: { img: any | string; link: string }[];
  }[];
}> = ({ children, people }) => {
  return (
    <Style.TeamComponent>
      <Style.ViewTitle>/ TEAM .</Style.ViewTitle>
      <Style.TeamContainer>
        <Grid container spacing={3}>
          {people.map((person) => (
            <Grid key={person.name} item xs={3}>
              <Grid container>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Style.TeamName>{person.name}</Style.TeamName>
                    </Grid>
                    <Grid item>
                      <Style.TeamNameTitle>{person.job}</Style.TeamNameTitle>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6}>
                  <Grid
                    container
                    spacing={1}
                    style={{
                      paddingRight: "5px",
                    }}
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    {person.icons.map((icon, index) => {
                      return (
                        <Grid key={index} item>
                          <Clickable address={icon.link}>
                            {typeof icon.img === "string" ? (
                              <img src={icon.img} alt="" />
                            ) : (
                              icon.img
                            )}
                          </Clickable>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <Style.ImgTeam src={person.img} alt="" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Style.TeamContainer>
    </Style.TeamComponent>
  );
};

const NowComponent: FC<props> = () => {
  return (
    <div>
      <Style.NowComponent>
        <Style.ViewTitle>/ PROJECT .</Style.ViewTitle>
        <Style.View2Content>
          If you are reading this, thank you.
          <br />
          We are pouring a lot of work into this project and it means a lot for us that your have
          been interested enough to read up until here.
          <br />
          If you haven't figured out it yet, we are bringing a new dimension to the NFT world and
          you might ask yourself if we will made it. It's a good question but the only way for you
          to figure it out without missing out is to ride with us.
          <br />
          Indeed, new web3 projects are spawning everywhere nowadays. Some are cash grabs. Some are
          pure scams. Some are just BS project. And some others ... fails. So why are we different ?
          <br />
          We are not backed by anyone and have for sole purpose making a big change in the web3
          industry.
          <br />
        </Style.View2Content>
      </Style.NowComponent>
    </div>
  );
};

const ContractsComponent: FC<props> = () => {
  return (
    <Style.ContractsComponent>
      <Style.ContractsTitle>CONTRACTS</Style.ContractsTitle>
      <Grid container justifyContent="center" rowSpacing={1}>
        <Grid item xs={12}>
          <Grid container alignItems="baseline">
            <Grid item>
              <Style.ContractsName>DRIP:</Style.ContractsName>
            </Grid>
            <Grid item>
              <Clickable>
                <Style.ContractsAddy>
                  0x00192fb10df37c9fb26829eb2cc623cd1bf599e8
                </Style.ContractsAddy>
              </Clickable>
            </Grid>
          </Grid>
        </Grid>
        {/*  */}
        <Grid item xs={12}>
          <Grid container alignItems="baseline">
            <Grid item>
              <Style.ContractsName>SSH-KEY:</Style.ContractsName>
            </Grid>
            <Grid item>
              <Clickable>
                <Style.ContractsAddy>
                  0x00192fb10df37c9fb26829eb2cc623cd1bf599e8
                </Style.ContractsAddy>
              </Clickable>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Style.ContractsComponent>
  );
};

const MainComponent: FC<props> = ({ children }) => {
  return (
    <Style.Root>
      <LandingScreenComponent />
      <DripComponent />
      <NowComponent />
      <SocietyComponent />
      <TeamComponent
        people={[
          {
            name: "SSH",
            job: "FOUNDER",
            img: me,
            bgColor: "#B4FFA5",
            icons: [],
          },
          {
            name: "REMS",
            job: "CO-FOUNDER",
            img: rems,
            bgColor: "#B4FFA5",
            icons: [],
          },
        ]}
      />
      <ContractsComponent />
    </Style.Root>
  );
};

export default MainComponent;

// <Project
// title={"DROP"}
// id={"1"}
// defaultLinks={{
//   mint: "/app",
// }}
// description={
//   <Fragment>
//     For this very first drop, SSH LABS is happy to give you the opportunity to mint an
//     exclusive skateboard deck ! Rock it in the metaverse or in real life !
//   </Fragment>
// }
// info={{ mintPrice: "0.1 ETH" }}
// pastilles={[
//   {
//     title: "0 / 250",
//     description: "Minted supply / Total supply",
//     // color: "#caffbf",
//   },
//   {
//     title: "3D",
//     description: "This NFT holds a 3D model.",
//     // color: "#a0c4ff",
//   },
//   {
//     title: "IRL",
//     description: "This NFT holds a redeemable physical object.",
//     // color: "#ffdab9",
//   },
//   {
//     title: "KEY",
//     description: "Minting this NFT gives your a free SSH Key.",
//     // color: "#cfbaf0",
//   },
// ]}
// />
