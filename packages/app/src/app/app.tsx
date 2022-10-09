import React, { FC, Fragment, useEffect, useState } from "react";

import { Grid } from "@mui/material";

// styles
import Style from "./style";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import skateboard from "../_utils/assets/images/untitled.png";
import key from "../_utils/assets/images/untitled5.png";
import alien from "../_utils/assets/images/aliendope.jpeg";
import circle from "../_utils/assets/images/circleblack.png";
import mouse from "../_utils/assets/images/mouse.png";
import Typewriter from "typewriter-effect";

import SceneSkate, { sceneRef } from "@/_3d/scenes/skate_0";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import Clickable from "../_utils/components/stateless/clickable";
import { Slide } from "react-awesome-reveal";
import TwitterIcon from "@mui/icons-material/Twitter";
import DiscordIcon from "../_utils/assets/icons/discord2.svg";
import OpenSeaIcon from "../_utils/assets/icons/opensea.svg";

import me from "../_utils/assets/images/me.png";
import rems from "../_utils/assets/images/rems.png";
import Marquee from "react-fast-marquee";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import TextLoop from "react-text-loop";

type props = {};

const LandingScreenComponent: FC<props> = () => {
  return (
    <Style.LandingScreenComponent>
      <Style.TitleContainer2>
        <Style.GridTitle container alignContent="center" justifyContent="center">
          <Grid item xs={7} style={{ display: "flex", alignItems: "center", position: "relative" }}>
            <img
              style={{ width: "125px", position: "absolute", top: "5%", right: "5%" }}
              src={circle}
              alt=""
            />
            <img
              style={{
                width: "20px",
                position: "absolute",
                top: "150px",
                right: "5%",
                zIndex: 1000,
              }}
              src={mouse}
              alt=""
            />
            <div
              style={{
                position: "absolute",
                top: "0",
                right: "25%",
              }}
            >
              <Grid item xs={12} style={{ marginTop: "25px", marginBottom: "50px" }}>
                <Style.Subtitle>Digitally living.</Style.Subtitle>
              </Grid>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "5%",
                right: "10%",
              }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Style.TitleButton>
                    {"admin@sshlabs > connection failed ..."}
                    <br />
                    {"admin@sshlabs > retrying ..."}
                    <br />
                    <br />
                    {"admin@sshlabs > connection succesful"}
                    <br />
                    <br />
                    {"admin@sshlabs > Hey there, how are you today ? :)"}
                    <br />
                    {"admin@sshlabs > "}
                  </Style.TitleButton>
                </Grid>
              </Grid>
            </div>

            <Grid container>
              <Grid item xs={12} style={{ marginBottom: "15px" }}>
                <Style.Title>WEAR YOUR</Style.Title>
              </Grid>
              <Grid item xs={12}>
                <Style.TitleKeyword>NFTs</Style.TitleKeyword>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid
              container
              flexDirection="column"
              justifyContent="space-between"
              style={{
                height: "100%",
                width: "50%",
                padding: "5px",
              }}
            >
              <Grid item>
                <Grid item>
                  <Style.TitleVertical1>&mdash; SSH DRIP &mdash;</Style.TitleVertical1>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item>
                  <Style.TitleVertical>EXCLUSIVE</Style.TitleVertical>
                </Grid>
                <Grid item>
                  <Style.TitleVertical>LIMITED</Style.TitleVertical>
                </Grid>
                <Grid item>
                  <Style.TitleVertical>CUSTOMIZABLE</Style.TitleVertical>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <img src={alien} style={{ width: "100%", borderRadius: "100px" }} alt="" />
          </Grid>
        </Style.GridTitle>
      </Style.TitleContainer2>

      <Style.Background>
        <Style.TitleContainer>
          <Grid container flexDirection="column">
            <Grid item style={{ marginBottom: "15px" }}>
              <Style.ButtonCallToAction>DISCOVER</Style.ButtonCallToAction>
            </Grid>
            <Grid item style={{ display: "grid", justifyContent: "center" }}>
              <ArrowRightAltIcon
                style={{
                  fontSize: "2em",
                  animation: "bounce 2s infinite",
                }}
              />
            </Grid>
          </Grid>
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
      placeholderPath: "/models/skate/textures/imgForMiddle.png",
      deckPath: "/models/skate/textures/sublimes-deck.png",
    },
    {
      itemId: 397,
      placeholderPath: "/models/skate/textures/imgForMiddle1.png",
      deckPath: "/models/skate/textures/sublimes-deck.png",
    },
    {
      itemId: 527,
      placeholderPath: "/models/skate/textures/imgForMiddle2.png",
      deckPath: "/models/skate/textures/sublimes-deck.png",
    },
  ];

  const sceneRef = React.useRef<sceneRef>(null!);

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
      sceneRef.current.changeTexturePlaceholder(demoSkateDrips[innerStateCounter].placeholderPath);
      sceneRef.current.changeId(demoSkateDrips[innerStateCounter].itemId);
    }, 2000);

    return () => clearInterval(interval);
  }, [stateCounter]);

  return (
    <Style.DripComponent container>
      <Grid item xs={8}>
        {/*  */}
        <Style.ViewTitle>DRIP .</Style.ViewTitle>
        <Style.View2Content>
          A <b>DRIP</b> is an{" "}
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
          piece of art that initially lives inside the blockchain as an <b>NFT</b> backed in the
          metaverse by a <b>3D model</b> and in real life by a{" "}
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
                    <img src={skateboard} style={{ width: "100%" }} alt="" />
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
            <u>collectable</u>
          </b>{" "}
          items both on the <b>blockchain</b> and <b>IRL</b> .
          <br />
        </Style.View2Content>
      </Grid>
      <Grid item xs={4}>
        <Grid container style={{ height: "100%", width: "100%" }}>
          <Grid item xs={12}>
            <SceneSkate
              sceneRef={sceneRef}
              initialId={demoSkateDrips[0].itemId}
              placeholderInitialTexture={demoSkateDrips[0].placeholderPath}
              deckInitialTexture={demoSkateDrips[0].deckPath}
            />
          </Grid>
          <Grid item xs={12}>
            <Style.View3StepName>
              DRIPx{" "}
              <span
                style={{
                  fontSize: "0.7em",
                }}
              >
                SUBLIME#{state.itemId}
              </span>
            </Style.View3StepName>
          </Grid>
        </Grid>
      </Grid>
    </Style.DripComponent>
  );
};

const Sbu: FC<{ no_u?: boolean }> = ({ children, no_u }) => {
  return <b>{no_u ? <>{children}</> : <u>{children}</u>}</b>;
};

const ColoredKw: FC<{ color?: string }> = ({ color = "black", children }) => {
  return (
    <span
      style={{
        backgroundColor: color,
        padding: "1.5px 12.5px 1.5px 12.5px",
        borderRadius: "3.5px",
        color: color === "black" ? "white" : "black",
      }}
    >
      {children}
    </span>
  );
};

const SocietyComponent: FC<{}> = () => {
  return (
    <Style.SocietyComponent>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Grid container justifyContent="center" style={{ marginBottom: "50px" }}>
            <Style.ViewTitle>/ SOCIETY .</Style.ViewTitle>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={5}>
        <Grid item xs={6}>
          <img src={key} style={{ width: "100%" }} alt="" />
        </Grid>
        <Grid item xs={6} alignSelf="center">
          <Style.Titlea>/ ssh key .</Style.Titlea>
          <Style.View2Content>
            When you mint a DRIP, in addition of the latter, you will get an <Sbu>SSH-KEY</Sbu>. It
            is precious so <Sbu>hold on to it</Sbu>.
            <br /> <br />
            The <Sbu>SSH-KEY</Sbu> is a <Sbu>membership</Sbu> access to the{" "}
            <Sbu no_u>
              <ColoredKw color="#F6EFB6">/ ssh society .</ColoredKw>
            </Sbu>
            , whose benefits and offerings will increase over time. Your <Sbu>SSH-KEY</Sbu> will
            open <Sbu no_u>undiscovered</Sbu> {"&"} <Sbu no_u>exclusive</Sbu> digital & physical
            doors for you, <Sbu>keep it safe</Sbu>.
          </Style.View2Content>
          <Style.MoreLinkContainer>
            <Clickable onClick={() => {}}>
              <Grid container>
                <Grid item alignSelf={"center"}>
                  <Style.MoreLink>DISCOVER</Style.MoreLink>
                </Grid>
                <Grid item alignSelf={"center"}>
                  <ArrowRightAltIcon style={{ color: "black", fontSize: "1.8em" }} />
                </Grid>
              </Grid>
            </Clickable>
          </Style.MoreLinkContainer>
        </Grid>
      </Grid>
    </Style.SocietyComponent>
  );
};

const TeamComponent: FC<{
  people: {
    name: string;
    job: string;
    img: string;
    bgcolor?: string;
    icons: { img: any | string; link: string }[];
  }[];
}> = ({ children, people }) => {
  return (
    <Style.TeamComponent>
      <Style.ViewTitle>TEAM .</Style.ViewTitle>
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

const LabsComponent: FC<{ word: string }> = ({ word }) => {
  return (
    <div>
      <Style.LabsComponent>
        <Marquee gradient={false} speed={75}>
          <Style.Sentence>
            {word}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {word}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {word}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {word}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {word}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {word}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {word}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {word}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {word}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {word}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {word}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {word}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {word}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {word}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Style.Sentence>
        </Marquee>
      </Style.LabsComponent>
    </div>
  );
};

type propsRoadmap = {
  roadmapItems: {
    step: string;
    title: string;
    description: any;
    done: boolean;
    type: string;
  }[];
};

const RoadmapComponent: FC<propsRoadmap> = ({ roadmapItems }) => {
  return (
    <Style.RoadmapComponent>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Grid container style={{ marginBottom: "50px" }}>
            <Style.ViewTitle>/ ROADMAP .</Style.ViewTitle>
          </Grid>
        </Grid>
      </Grid>
      <Timeline position="alternate" style={{ padding: "0px" }}>
        <TimelineItem style={{ display: "none" }}></TimelineItem>
        {roadmapItems.map((roadmapItem, index) => {
          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                style={{
                  fontWeight: 900,
                }}
              >
                <Style.RoadMapItemStep>{roadmapItem.step}</Style.RoadMapItemStep>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    color: "white",
                    boxShadow: "none",
                    opacity: roadmapItem.done ? "0%" : "10%",
                    backgroundColor: "black",
                  }}
                />
                {roadmapItems.length === index + 1 ? null : (
                  <TimelineConnector
                    style={{
                      backgroundColor: "black",
                      opacity: roadmapItem.done ? "0%" : "10%",
                      boxShadow: roadmapItem.done ? "1px 1px 2.5px grey, 0px 0px 0px #ffffff" : "",
                      borderRadius: "25px",
                      width: roadmapItem.done ? "5px" : "3px",
                    }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent>
                {index % 2 ? (
                  <Slide direction="right" triggerOnce>
                    <Style.RoadMapItem>
                      <Grid container justifyContent={"space-between"}>
                        <Style.RoadMapItemTitle>{roadmapItem.title}</Style.RoadMapItemTitle>
                        <div>
                          <Style.RoadMapItemType>{roadmapItem.type}</Style.RoadMapItemType>
                        </div>
                      </Grid>
                      <Style.RoadMapItemContent>{roadmapItem.description}</Style.RoadMapItemContent>
                    </Style.RoadMapItem>
                  </Slide>
                ) : (
                  <Slide direction="left" triggerOnce>
                    <Style.RoadMapItem2>
                      <Grid container justifyContent={"space-between"}>
                        <Style.RoadMapItemTitle>{roadmapItem.title}</Style.RoadMapItemTitle>
                        <div>
                          <Style.RoadMapItemType>{roadmapItem.type}</Style.RoadMapItemType>
                        </div>
                      </Grid>
                      <Style.RoadMapItemContent>{roadmapItem.description}</Style.RoadMapItemContent>
                    </Style.RoadMapItem2>
                  </Slide>
                )}
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Style.RoadmapComponent>
  );
};

const ContractsComponent: FC<props> = () => {
  return (
    <Style.ContractsComponent>
      <Style.ViewTitle>/ CONTRACTS .</Style.ViewTitle>
      <Style.TeamContainer>To be added.</Style.TeamContainer>
    </Style.ContractsComponent>
  );
};

const MainComponent: FC<props> = ({ children }) => {
  return (
    <Style.Root>
      <LandingScreenComponent />
      <DripComponent />
      <Style.FooterSplitContainer>
        <Style.FooterSplit />
      </Style.FooterSplitContainer>
      <TeamComponent
        people={[
          {
            name: "SSH",
            job: "FOUNDER",
            img: me,
            bgcolor: "#B4FFA5",
            icons: [],
          },
        ]}
      />
      <Style.FooterSplitContainer>
        <Style.FooterSplit />
        <Style.FooterSplit />
      </Style.FooterSplitContainer>
    </Style.Root>
  );
};

export default MainComponent;
