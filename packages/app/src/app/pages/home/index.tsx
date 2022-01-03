import React, { Fragment, FC, useState, useEffect } from "react";

// styles
import Style from "./style";

import { Grid, styled, Tabs, Box, Typography } from "@mui/material";

import af1x_exemple from "../../assets/images/Punk_7804.png";
import me from "../../assets/images/me.jpeg";
import comingSoon from "../../assets/images/comingsoon.png";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Project from "../../components/stateless/project";

import TeamComponent from "./components/team";
import ConceptComponent from "./components/concept";
import RoadmapComponent from "./components/roadmap";
import MainComponent from "./components/main";

import IconWithText from "../../components/stateless/iconWithText";

import mintNft from "../../assets/icons/mintNft.png";
import selectNft from "../../assets/icons/selectNft.png";
import redeem from "../../assets/icons/redeem.png";
import clothes from "../../assets/icons/clothes.png";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home: FC = () => {
  return (
    <Style.Root>
      <MainComponent />

      {/* View 2 */}
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
          id={"1234"}
          description={
            <Fragment>
              For this very first drop, SSH LABS is happy to give you the
              opportunity to mint an exclusive
              <span style={{ fontWeight: 600 }}> skateboard deck</span> made in
              collaboration with <span style={{ fontWeight: 600 }}> X</span>.
              Rock it in the metaverse or in real life !
            </Fragment>
          }
          info={{ mintPrice: "0.1 ETH" }}
          pastilles={[
            {
              title: "0 / 250",
              description: "Minted supply / Total supply",
              color: "#caffbf",
            },
            {
              title: "3D",
              description: "This NFT holds a 3D model.",
              color: "#a0c4ff",
            },
            {
              title: "IRL",
              description: "This NFT holds a physical object.",
              color: "#ffdab9",
            },
            {
              title: "KEY",
              description: "This NFT holds a key to the SSH ecosystem.",
              color: "#cfbaf0",
            },
          ]}
        />
      </Style.View3>

      {/* View 4 */}
      <ConceptComponent
        title="/ CONCEPT ."
        subtitle="WHAT ARE WE DOING ?"
        tabs={[
          {
            title: "/ DROP .",
            imgs: { 1: af1x_exemple, 2: af1x_exemple, 3: af1x_exemple },
            innerTab: (
              <React.Fragment>
                <Style.TextAbout>
                  DROPs are a very exclusive and limited piece of art that lives
                  in the metaverse. Our goal is to have Supreme and Off-White in
                  one of our drop. We aim at the very top.
                  <br />
                  <br />
                  When you buy a DROP you are getting: Full Ownership of your
                  DROP, 3D Model, SSH Membership and an SSH Key.
                  <br />
                  <br />
                  You can get your DROP in real life by burning an SSH Key. SSH
                  Keys are fungible.
                </Style.TextAbout>
              </React.Fragment>
            ),
          },
        ]}
      />

      <RoadmapComponent
        title="/ ROADMAP ."
        subtitle="WHERE ARE WE GOING ?"
        bgColor="secondary"
        roadmapItems={[
          {
            step: "February. 2022.",
            title: "SSH DROP",
            icon: <FastfoodIcon />,
            description: (
              <Fragment>
                After several months of work, SSH LABS will release the first of
                its many more to come DROP.
              </Fragment>
            ),
            done: true,
            colors: {
              bg: "black",
              color: "#2AFE00",
            },
          },
          {
            step: "February. 2022.",
            title: "SSH DROP",
            icon: <FastfoodIcon />,
            description: (
              <Fragment>
                After several months of work, SSH LABS will release the first of
                its many more to come DROP.
              </Fragment>
            ),
            done: true,
            colors: {
              bg: "black",
              color: "#2AFE00",
            },
          },
          {
            step: "February. 2022.",
            title: "SSH DROP",
            icon: <FastfoodIcon />,
            description: (
              <Fragment>
                After several months of work, SSH LABS will release the first of
                its many more to come DROP.
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
    </Style.Root>
  );
};

export default Home;
