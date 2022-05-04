import { FC, useEffect, useState } from "react";

import { Grid } from "@mui/material";

// styles
import Style from "./style";

import skateboard from "../_utils/assets/images/untitled.png";
import key from "../_utils/assets/images/untitled5.png";

import SceneSkate from "@/_3d/scenes/skate_0";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import Clickable from "../_utils/components/stateless/clickable";

import me from "../_utils/assets/images/me.png";
import rems from "../_utils/assets/images/rems.png";
import Marquee from "react-fast-marquee";

type props = {};

const LandingScreenComponent: FC<props> = () => {
  return (
    <Style.LandingScreenComponent>
      <Style.Background>
        {/* <SceneRoom /> */}
        <Style.TitleContainer2>{/*  */}</Style.TitleContainer2>
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
      placeholderPath: "/models/skate/textures/imgForMiddle.png",
    },
    {
      itemId: 397,
      placeholderPath: "/models/skate/textures/imgForMiddle1.png",
    },
    {
      itemId: 527,
      placeholderPath: "/models/skate/textures/imgForMiddle2.png",
    },
  ];

  const deckTextures = ["/models/skate/textures/sublime-deck.png"];

  const placeholderTexures = [
    "/models/skate/textures/imgForMiddle.png",
    "/models/skate/textures/imgForMiddle1.png",
    "/models/skate/textures/imgForMiddle2.png",
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
                WARNING :
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
              <SceneSkate
                deckTextures={deckTextures}
                deckIndex={0}
                placeholderTextures={placeholderTexures}
                placeholderIndex={stateCounter}
                _id={demoSkateDrips[stateCounter].itemId}
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
                  SUBLIME#825
                </span>
              </Style.View3StepName>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
          <Grid container justifyContent="center" style={{ marginBottom: "75px" }}>
            <Style.ViewTitle big shadow={false}>
              / THE SOCIETY .
            </Style.ViewTitle>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={10}>
        <Grid item xs={5}>
          <img src={key} style={{ width: "100%" }} alt="" />
        </Grid>

        <Grid item xs={7} alignSelf="center">
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
      <LabsComponent word="EXCLUSIVE" />
      <DripComponent />
      <LabsComponent word="LIMITED" />
      <SocietyComponent />
      <LabsComponent word="CUSTOMIZABLE" />
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
            name: "LE REMS",
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
