import React, { Fragment, FC, useEffect } from "react";

// styles
import Style from "./style";

import { Grid } from "@mui/material";

import af1x_exemple from "../../../_assets/images/Punk_7804.png";
import me from "../../../_assets/images/me.jpeg";
import comingSoon from "../../../_assets/images/comingsoon.png";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Project from "../../../_components/stateless/project";

import TeamComponent from "./components/team";
import ConceptComponent from "./components/concept";
import RoadmapComponent from "./components/roadmap";
import MainComponent from "./components/main";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { useLocation } from "react-router-dom";

import { Element, scroller } from "react-scroll";
import { Fade } from "react-awesome-reveal";

const Home: FC = () => {
  const hash = useLocation().hash;

  useEffect(() => {
    scroller.scrollTo(hash, {
      duration: 500,
      delay: 250,
      smooth: "easeInOutQuart",
    });
  }, [hash]);

  return (
    <Style.Root>
      <Fade duration={1500} triggerOnce>
        <MainComponent />

        {/* View 2 */}
        <Element name="#projects">
          <Style.View2>
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "2.5vh",
              }}
            >
              <Grid item xs={12}>
                <Grid
                  container
                  columnSpacing={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Grid item xs={2}>
                    <Style.ProjectExplanationImg2 src={comingSoon} />
                  </Grid>
                  <Grid item xs={2}>
                    <Style.ProjectExplanationImg2 src={comingSoon} />
                  </Grid>
                  <Grid item xs={2}>
                    <Style.ProjectExplanationImg2Active src={af1x_exemple} />
                  </Grid>
                  <Grid item xs={2}>
                    <Style.ProjectExplanationImg2 src={comingSoon} />
                  </Grid>
                  <Grid item xs={2}>
                    <Style.ProjectExplanationImg2 src={comingSoon} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Style.View2>

          {/* View 3 */}
          <Style.View3>
            <Project
              title={"DROP"}
              id={"1"}
              links={{
                opensea: "https://google.com",
                etherscan: "https://google.com",
                mint: "/app",
              }}
              description={
                <Fragment>
                  For this very first drop, SSH LABS is happy to give you the
                  opportunity to mint an exclusive skateboard deck ! Rock it in
                  the metaverse or in real life !
                </Fragment>
              }
              info={{ mintPrice: "0.1 ETH" }}
              pastilles={[
                {
                  title: "0 / 250",
                  description: "Minted supply / Total supply",
                },
                {
                  title: "3D",
                  description: "This NFT holds a 3D model.",
                },
                {
                  title: "IRL",
                  description: "This NFT holds a redeemable physical object.",
                },
                {
                  title: "KEY",
                  description: "Minting this NFT gives your a free SSH Key.",
                },
              ]}
            />
          </Style.View3>
        </Element>

        {/* View 4 */}
        <Element name="#concept">
          <ConceptComponent
            title="/ CONCEPT ."
            subtitle="WHAT ARE WE DOING ?"
            tabs={[
              {
                title: "/ DROP .",
                imgs: { 1: af1x_exemple, 2: af1x_exemple, 3: af1x_exemple },
                innerTab: (
                  <React.Fragment>
                    <p>
                      A DROP is a very<b> exclusive </b>and<b> limited </b>
                      piece of usable art that initially lives inside the
                      blockchain as an <b> NFT</b> which is brought to life by a
                      <b> 3D model</b>.
                    </p>
                    <br />
                    <p>
                      In order to mint a DROP and original piece represented as
                      an NFT needs to be hold accountable for its creation.
                    </p>
                    <br />
                    <p>
                      Be assured, that at the root of every DROP a long process
                      of thought and discussion has occured to choose the
                      <b> best products </b> and <b> designs </b>.
                    </p>
                    <br />
                    <p>
                      Owning a DROP gives you<b> full ownership </b> over it and
                      its <b>3D model</b>.
                    </p>
                    <br />
                    <p>
                      Every single DROP is redeemable physically by burning an
                      <b> SSH Key </b> and the said DROP. However, be careful,
                      <b> SSH Key </b> might
                      <b> (they will)</b> become necessary at some point.
                    </p>
                    <br />
                    <p>
                      DROP bought on our platform gives to its buyer a free
                      <b> SSH Key</b>.
                    </p>
                    <br />
                    <p>
                      <b>/ SSH .</b>
                    </p>
                  </React.Fragment>
                ),
              },
            ]}
          />
        </Element>

        <Element name="#roadmap">
          <RoadmapComponent
            title="/ ROADMAP ."
            subtitle="WHERE ARE WE GOING ?"
            bgcolor="secondary"
            roadmapItems={[
              {
                step: "February. 1st. 2022.",
                title: "Drop #1",
                icon: <FastfoodIcon />,
                description: (
                  <Fragment>
                    After several months of work, SSH LABS will release the
                    first of its many more to come DROP.
                  </Fragment>
                ),
                done: true,
                colors: {
                  bg: "black",
                  color: "#2AFE00",
                },
              },
              {
                step: "February. 28th. 2022.",
                title: "Drop #1",
                type: "END",
                icon: <FastfoodIcon />,
                description: <Fragment>All good things have an end.</Fragment>,
                done: true,
                colors: {
                  bg: "black",
                  color: "#2AFE00",
                },
              },
              {
                step: "TBD.",
                title: "Drop #1",
                type: "REDEEM",
                icon: <FastfoodIcon />,
                description: (
                  <Fragment>
                    This is when you'll be able to redeem your NFT in real life
                    to rock it everywhere, we cannot f*cking wait !
                  </Fragment>
                ),
                done: true,
                colors: {
                  bg: "black",
                  color: "#2AFE00",
                },
              },
            ]}
          />
        </Element>

        <Element name="#team">
          <TeamComponent
            title="/ TEAM ."
            subtitle="WHO ARE WE ?"
            peoples={[
              {
                name: "SSH",
                job: "FOUNDER",
                img: me,
                bgColor: "#B4FFA5",
                icons: [
                  {
                    img: <GitHubIcon />,
                    link: "https://github.com/sshmaxime",
                  },
                  {
                    img: <LinkedInIcon />,
                    link: "https://www.linkedin.com/in/maxime-aubanel-4196a3b5/",
                  },
                ],
              },
            ]}
          />
        </Element>
      </Fade>
    </Style.Root>
  );
};

export default Home;
