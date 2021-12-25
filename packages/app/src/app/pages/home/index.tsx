import React, { Fragment, FC, useState, useEffect } from "react";

// styles
import Style from "./style";

import { Grid, styled, Tabs, Box, Typography } from "@mui/material";

import af1x_exemple from "../../assets/images/Punk_7804.png";
import ArrowDownwardSharp from "@mui/icons-material/ArrowDownwardRounded";
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
                <Style.ProjectExplanationImg2 src={af1x_exemple} />
              </Grid>
              <Grid item xs={2}>
                <Style.ProjectExplanationImg2 src={af1x_exemple} />
              </Grid>
              <Grid item xs={2}>
                <Style.ProjectExplanationImg2Active src={af1x_exemple} />
              </Grid>
              <Grid item xs={2}>
                <Style.ProjectExplanationImg2 src={af1x_exemple} />
              </Grid>
              <Grid item xs={2}>
                <Style.ProjectExplanationImg2 src={af1x_exemple} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Style.View2>

      {/* View 3 */}
      <Style.View3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <ArrowDownwardSharp
            style={{
              fontSize: "25px",
            }}
          />
        </div>
        <Project
          title={"CryptoPunks"}
          description={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                vehicula ultrices sem, eget laoreet est tincidunt et. Maecenas
                dolor mi, posuere non iaculis sed, faucibus eget elit. Duis dui
                mauris, sollicitudin eu auctor vel, lacinia vitae sem.
          `}
          info={{ mintPrice: "0.1 ETH" }}
          pastilles={[
            {
              title: "0 / 10.000",
              description: "Minted supply / Total supply",
              color: "#caffbf",
              size: 2,
            },
            {
              title: "AF1x",
              description: "This NFT is a part of the AF1x ecosystem.",
              color: "#a0c4ff",
            },
            {
              title: "IRL",
              description: "This NFT holds a physical object.",
              color: "#ffdab9",
            },
            {
              title: "KEY",
              description: "This NFT is a key to the SSH ecosystem.",
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
            title: "SSH DROP.",
            imgs: { 1: af1x_exemple, 2: af1x_exemple, 3: af1x_exemple },
            innerTab: (
              <React.Fragment>
                <Style.TextAbout>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vehicula ultrices sem, eget laoreet est tincidunt et. Maecenas
                  dolor mi, posuere non iaculis sed, faucibus eget elit. Duis
                  dui mauris, sollicitudin eu auctor vel, lacinia vitae sem.
                  Donec quis sapien pellentesque, ultrices augue non, mollis
                  ipsum. Nunc congue purus in purus consectetur tincidunt.
                  Integer sit amet tellus fermentum, dignissim urna quis,
                  fringilla elit. Nunc bibendum posuere turpis, vel gravida
                  lacus lobortis sit amet. Aenean id viverra ipsum. Vivamus
                  luctus, nunc id iaculis blandit, tellus nisl dignissim nisi,
                  quis tempus nisl sapien vitae libero. Ut aliquam egestas lacus
                  vitae faucibus. Ut pellentesque eget eros vel sodales. Sed
                  sagittis felis metus, ut elementum leo fringilla eget.
                </Style.TextAbout>
                <Grid
                  container
                  spacing={2}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Style.ProjectPlanGrid item xs={3}>
                    <IconWithText title="1. SELECT YOUR NFT" icon={selectNft} />
                  </Style.ProjectPlanGrid>
                  <Style.ProjectPlanGrid item xs={3}>
                    <IconWithText title="2. PICK YOUR OBJECT" icon={clothes} />
                  </Style.ProjectPlanGrid>
                  <Style.ProjectPlanGrid item xs={3}>
                    <IconWithText title="3. MINT" icon={mintNft} />
                  </Style.ProjectPlanGrid>
                  <Style.ProjectPlanGrid item xs={3}>
                    <IconWithText title="4. REDEEM" icon={redeem} />
                  </Style.ProjectPlanGrid>
                </Grid>
              </React.Fragment>
            ),
          },
          {
            title: "SSH DROP.",
            imgs: { 1: af1x_exemple, 2: af1x_exemple, 3: af1x_exemple },
            innerTab: (
              <React.Fragment>
                <Style.TextAbout>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vehicula ultrices sem, eget laoreet est tincidunt et. Maecenas
                  dolor mi, posuere non iaculis sed, faucibus eget elit. Duis
                  dui mauris, sollicitudin eu auctor vel, lacinia vitae sem.
                  Donec quis sapien pellentesque, ultrices augue non, mollis
                  ipsum. Nunc congue purus in purus consectetur tincidunt.
                </Style.TextAbout>
                <Grid
                  container
                  spacing={2}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Style.ProjectPlanGrid item xs={3}>
                    <IconWithText title="1. SELECT YOUR NFT" icon={selectNft} />
                  </Style.ProjectPlanGrid>
                  <Style.ProjectPlanGrid item xs={3}>
                    <IconWithText title="2. PICK YOUR OBJECT" icon={clothes} />
                  </Style.ProjectPlanGrid>
                  <Style.ProjectPlanGrid item xs={3}>
                    <IconWithText title="3. MINT" icon={mintNft} />
                  </Style.ProjectPlanGrid>
                  <Style.ProjectPlanGrid item xs={3}>
                    <IconWithText title="4. REDEEM" icon={redeem} />
                  </Style.ProjectPlanGrid>
                </Grid>
              </React.Fragment>
            ),
          },
          {
            title: "SSH DROP.",
            imgs: { 1: af1x_exemple, 2: af1x_exemple, 3: af1x_exemple },
            innerTab: (
              <React.Fragment>
                <Style.TextAbout>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Style.TextAbout>
                <Grid
                  container
                  spacing={2}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Style.ProjectPlanGrid item xs={3}>
                    <IconWithText title="1. SELECT YOUR NFT" icon={selectNft} />
                  </Style.ProjectPlanGrid>
                  <Style.ProjectPlanGrid item xs={3}>
                    <IconWithText title="2. PICK YOUR OBJECT" icon={clothes} />
                  </Style.ProjectPlanGrid>
                  <Style.ProjectPlanGrid item xs={3}>
                    <IconWithText title="3. MINT" icon={mintNft} />
                  </Style.ProjectPlanGrid>
                  <Style.ProjectPlanGrid item xs={3}>
                    <IconWithText title="4. REDEEM" icon={redeem} />
                  </Style.ProjectPlanGrid>
                </Grid>
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
            step: "Q1. 2022",
            title: "SSH DROP",
            icon: <FastfoodIcon />,
            description: (
              <Fragment>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                vitae fermentum turpis, ut molestie justo. Donec sodales quis
                magna ac elementum. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra.
              </Fragment>
            ),
            done: false,
            colors: {
              bg: "#DCE8FF",
              color: "#6178D5",
            },
          },
          {
            step: "Q1. 2022",
            title: "SSH PROJECT",
            icon: <FastfoodIcon />,
            description: (
              <Fragment>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                vitae fermentum turpis, ut molestie justo. Donec sodales quis
                magna ac elementum. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra.
              </Fragment>
            ),
            done: false,
            colors: {
              bg: "#FFE4C8",
              color: "#FFA449",
            },
          },
          {
            step: "Q2. 2022",
            title: "SSH PREMIUM",
            icon: <FastfoodIcon />,
            description: (
              <Fragment>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                vitae fermentum turpis, ut molestie justo. Donec sodales quis
                magna ac elementum. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra.
              </Fragment>
            ),
            done: false,
            colors: {
              bg: "#CFC6DD",
              color: "#685289",
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
            job: "CEO & CTO",
            img: af1x_exemple,
            bgColor: "#B4FFA5",
          },
          {
            name: "BUSCA",
            job: "CEO & CTO",
            img: af1x_exemple,
            bgColor: "#9EFFEF",
          },
          {
            name: "GAMBAS",
            job: "CEO & CTO",
            img: af1x_exemple,
            bgColor: "#FFBE9E",
          },
        ]}
      />
    </Style.Root>
  );
};

export default Home;
