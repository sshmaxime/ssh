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
import img2 from "../_utils/assets/images/imgroom.jpg";
import img3 from "../_utils/assets/images/wave.png";
import img4 from "../_utils/assets/images/van.png";
import LogoFull from "../_utils/assets/images/logo-full.svg";
import alien from "../_utils/assets/images/aliendope.jpeg";
import circle from "../_utils/assets/images/circleblack.png";
import mouse from "../_utils/assets/images/mouse.png";
import Typewriter from "typewriter-effect";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import Marquee from "react-fast-marquee";

type props = {};

const LandingScreenComponent: FC<props> = () => {
  return (
    <Style.LandingScreenComponent>
      <Style.Background>
        <Style.DripComponentP3>
          <Style.LandingPageContentContainer>
            <Style.LandingPageContent>
              <Style.Header>
                <Grid container>
                  <Grid item xs={12}>
                    <Sbu>Exclusive</Sbu> . <Sbu>Limited</Sbu> . <Sbu>Customizable</Sbu>
                  </Grid>
                  <Grid item xs={12}></Grid>
                </Grid>
              </Style.Header>
            </Style.LandingPageContent>
          </Style.LandingPageContentContainer>
        </Style.DripComponentP3>

        <Style.HomepageBottomLink>
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
        </Style.HomepageBottomLink>
        <Style.Triangle />
      </Style.Background>
    </Style.LandingScreenComponent>
  );
};

const DripComponent: FC<props> = () => {
  return (
    <Style.DripComponent>
      <Style.DripComponentP2>
        <Grid item xs={12} style={{ paddingTop: "25px", marginBottom: "100px" }}>
          <Grid container justifyContent="center">
            <img src={LogoFull} style={{ width: "600px" }} alt="" />
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ marginBottom: "50px" }}>
          <Style.View2Content>
            <Grid container justifyContent="center">
              <Grid item xs={12} style={{ textAlign: "center" }}>
                Designed for the era of <Sbu>ownership</Sbu>, <Sbu>digitalization</Sbu> and{" "}
                <Sbu>fashion</Sbu>.
                <div style={{ height: "20px", width: "2px" }} />
                <Style.Premier>PREMIER</Style.Premier> subscribe itself into Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Pellentesque congue congue quam, et fermentum
                ante gravida laoreet. Curabitur rhoncus placerat felis ac accumsan. Cras
                consectetur, nisi in maximus venenatis, dui metus tincidunt odio, nec iaculis mi
                tortor eget sapien. Proin maximus dolor at magna vulputate, quis volutpat neque
                sagittis.
              </Grid>
            </Grid>
          </Style.View2Content>
        </Grid>

        <Grid item xs={12}>
          <Style.View2Content>
            <Grid container justifyContent="center">
              <Grid item xs={10} style={{ textAlign: "center" }}>
                <Style.ButtonCallToAction>OUR CONCEPTS</Style.ButtonCallToAction>
              </Grid>
            </Grid>
          </Style.View2Content>
        </Grid>
      </Style.DripComponentP2>

      <Grid container justifyContent="center">
        <div
          style={{
            width: "25%",
            height: "1px",
            backgroundColor: "black",
            marginBottom: "125px",
            marginTop: "125px",
            opacity: "25%",
          }}
        />
      </Grid>

      <Style.DripComponentP3 container spacing={1}>
        <Grid item xs={4}>
          <Style.ViewTitle>because everyone has a dream.</Style.ViewTitle>
          <br />
          <Style.ViewTitle2>and this is where mine started -</Style.ViewTitle2>
          <Style.View2Content>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <img
                  src={img2}
                  style={{
                    filter: "grayscale(100%)",
                    width: "100%",
                  }}
                  alt=""
                />
              </Grid>
            </Grid>
          </Style.View2Content>
        </Grid>

        <Grid item xs={4}>
          <Style.ViewTitle>because whatever you do.</Style.ViewTitle>
          <br />
          <Style.ViewTitle2>some people will never like it -</Style.ViewTitle2>
          <Style.View2Content>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <img
                  src={img2}
                  style={{
                    filter: "grayscale(100%)",
                    width: "100%",
                  }}
                  alt=""
                />
              </Grid>
            </Grid>
          </Style.View2Content>
        </Grid>

        <Grid item xs={4}>
          <Style.ViewTitle>because you can die tomorrow.</Style.ViewTitle>
          <br />
          <Style.ViewTitle2>do your own thing -</Style.ViewTitle2>
          <Style.View2Content>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <img
                  src={img2}
                  style={{
                    filter: "grayscale(100%)",
                    width: "100%",
                  }}
                  alt=""
                />
              </Grid>
            </Grid>
          </Style.View2Content>
        </Grid>
      </Style.DripComponentP3>

      {/* <Grid container justifyContent="center">
        <div
          style={{
            width: "25%",
            height: "1px",
            backgroundColor: "black",
            marginBottom: "125px",
            marginTop: "125px",
          }}
        />
      </Grid>

      <Grid item xs={12} style={{ marginBottom: "25px" }}>
        <Style.DripComponentP2>
          <Grid item xs={12} style={{ paddingTop: "25px", marginBottom: "100px" }}>
            <Grid container justifyContent="center">
              <Style.View2Content>
                <span style={{ fontSize: "3em" }}>
                  <Sbu bold={900}>DRIP</Sbu>{" "}
                </span>
                <span style={{ fontSize: "1.25em" }}>
                  by <Style.Premier>PREMIER</Style.Premier>
                </span>
              </Style.View2Content>
            </Grid>
          </Grid>

          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Style.View2Content>
              A <Sbu>DRIP</Sbu> is an <Sbu>exclusive</Sbu> and <Sbu>limited</Sbu> item{" "}
              <Sbu>customizable</Sbu> with digital belongings.
              <br />
              <br />
              Available on the <Sbu>ethereum</Sbu> blockchain through its smart-contract, a{" "}
              <Sbu>DRIP</Sbu> is digitally represented by a <Sbu>3D model</Sbu>, fully ready to be
              used in any <Sbu>game</Sbu> or <Sbu>digital world</Sbu> as well as backed by a{" "}
              <Sbu>1/1 physical asset</Sbu> at any time <Sbu>redeemable</Sbu>.
            </Style.View2Content>
          </Grid>
        </Style.DripComponentP2>
      </Grid> */}
      <Grid container justifyContent="center">
        <div
          style={{
            width: "25%",
            height: "1px",
            backgroundColor: "black",
            marginBottom: "125px",
            marginTop: "125px",
            opacity: "25%",
          }}
        />
      </Grid>

      <Style.DripComponentP3 item xs={12} style={{ marginBottom: "75px" }}>
        <Grid container justifyContent="center">
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
                <Style.ViewTitle1>explore.</Style.ViewTitle1>
              </Grid>
              <Grid item xs={12}>
                <Style.View2Content>
                  <Grid container justifyContent="center">
                    <Grid item xs={12} style={{ textAlign: "center" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit
                      vestibulum tincidunt. Fusce vehicula sit amet nisl ac faucibus. Nulla
                      facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada
                      fames ac turpis egestas.
                    </Grid>
                  </Grid>
                </Style.View2Content>
              </Grid>
            </Grid>
          </Grid>

          <Grid item flexGrow={1} />

          <Grid item xs={7}>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <img
                  src={img4}
                  style={{
                    filter: "grayscale(100%)",
                    width: "100%",
                  }}
                  alt=""
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Style.DripComponentP3>

      <Style.DripComponentP3 item xs={12} style={{ marginBottom: "75px" }}>
        <Grid container justifyContent="center">
          <Grid item xs={7}>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <img
                  src={img4}
                  style={{
                    filter: "grayscale(100%)",
                    width: "100%",
                  }}
                  alt=""
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item flexGrow={1} />

          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
                <Style.ViewTitle1>thrive.</Style.ViewTitle1>
              </Grid>
              <Grid item xs={12}>
                <Style.View2Content>
                  <Grid container justifyContent="center">
                    <Grid item xs={12} style={{ textAlign: "center" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit
                      vestibulum tincidunt. Fusce vehicula sit amet nisl ac faucibus. Nulla
                      facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada
                      fames ac turpis egestas.
                    </Grid>
                  </Grid>
                </Style.View2Content>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Style.DripComponentP3>

      <Style.DripComponentP3 item xs={12} style={{ marginBottom: "75px" }}>
        <Grid container justifyContent="center">
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
                <Style.ViewTitle1>live.</Style.ViewTitle1>
              </Grid>
              <Grid item xs={12}>
                <Style.View2Content>
                  <Grid container justifyContent="center">
                    <Grid item xs={12} style={{ textAlign: "center" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit
                      vestibulum tincidunt. Fusce vehicula sit amet nisl ac faucibus. Nulla
                      facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada
                      fames ac turpis egestas.
                    </Grid>
                  </Grid>
                </Style.View2Content>
              </Grid>
            </Grid>
          </Grid>

          <Grid item flexGrow={1} />

          <Grid item xs={7}>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <img
                  src={img4}
                  style={{
                    filter: "grayscale(100%)",
                    width: "100%",
                  }}
                  alt=""
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Style.DripComponentP3>

      <Grid container justifyContent="center">
        <div
          style={{
            width: "80%",
            height: "1px",
            backgroundColor: "black",
            marginTop: "125px",
            opacity: "25%",
          }}
        />
      </Grid>
    </Style.DripComponent>
  );
};

const Sbu: FC<{ no_u?: boolean; bold?: any }> = ({ children, no_u = true, bold }) => {
  return <Style.Sbu bold={bold}>{no_u ? <>{children}</> : <u>{children}</u>}</Style.Sbu>;
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

const MainComponent: FC<props> = ({ children }) => {
  return (
    <Style.Root>
      <LandingScreenComponent />
      <DripComponent />
    </Style.Root>
  );
};

export default MainComponent;
