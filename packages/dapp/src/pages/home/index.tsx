import React, { Fragment, FC, useState, useEffect } from "react";

// styles
import Style from "./style";

import { Grid } from "@mui/material";

import af1x_exemple from "../../assets/images/Punk_7804.png";
import ethereum from "../../assets/icons/ethereum.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowDownwardSharp from "@mui/icons-material/ArrowDownwardRounded";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Project from "../../components/stateless/project";
import AcUnitIcon from "@mui/icons-material/AcUnit";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import IconWithText from "../../components/stateless/iconWithText";

const roadmapArray = [
  {
    percent: "0.1% (minted)",
    title: "AIRDROP",
    description: (
      <Fragment>
        Once this project kicked of a bit, we will airdrop 1x AF1xWorld to those
        first supporters.
      </Fragment>
    ),
    done: false,
    colors: {
      bg: "#DCE8FF",
      color: "#6178D5",
    },
  },
  {
    percent: "0.1% (minted)",
    title: "AIRDROP",
    description: (
      <Fragment>
        Once this project kicked of a bit, we will airdrop 1x AF1xWorld to those
        first supporters.
      </Fragment>
    ),
    done: false,
    colors: {
      bg: "#FFE4C8",
      color: "#FFA449",
    },
  },
  {
    percent: "0.1% (minted)",
    title: "AIRDROP",
    description: (
      <Fragment>
        Once this project kicked of a bit, we will airdrop 1x AF1xWorld to those
        first supporters.
      </Fragment>
    ),
    done: false,
    colors: {
      bg: "#CFC6DD",
      color: "#685289",
    },
  },
  {
    percent: "0.1% (minted)",
    title: "AIRDROP",
    description: (
      <Fragment>
        Once this project kicked of a bit, we will airdrop 1x AF1xWorld to those
        first supporters.
      </Fragment>
    ),
    done: false,
    colors: {
      bg: "#C1F4DD",
      color: "#1A955E",
    },
  },
  {
    percent: "5% (minted)",
    title: "REDEEM",
    description: (
      <Fragment>
        Until that milestone, AF1xCryptoPunks could be minted but not redeemed.
        It's now thing of the past. You can now redeem your AF1xCryptoPunks by
        burning your NFT !
      </Fragment>
    ),
    done: false,
    colors: {
      bg: "#FFD3D4",
      color: "#FF5F61",
    },
  },
];

const Home: FC = () => {
  return (
    <Style.Root>
      {/* View 1 */}
      <Style.View1>
        <Style.Background>
          <Style.TitleContainer>
            <Style.ProjectQuickPresentation>
              <Grid
                container
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Style.ProjectPresentationGrid item xs={12}>
                  <Style.ProjectPresentationTitle>
                    EXPLORE
                    <ArrowRightAltIcon style={{ fontSize: "3em" }} />
                  </Style.ProjectPresentationTitle>
                </Style.ProjectPresentationGrid>
              </Grid>
            </Style.ProjectQuickPresentation>
          </Style.TitleContainer>
          <Style.Triangle />
        </Style.Background>
      </Style.View1>

      {/* View 2 */}
      <Style.View2>
        <Style.ProjectExempleImgs>
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
        </Style.ProjectExempleImgs>
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
      <Style.View4>
        <Style.TextSubtitle2>/ CONCEPT .</Style.TextSubtitle2>

        <Grid
          container
          columnSpacing={12}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={8}>
            <Style.TextTitleContainer>
              <Grid
                container
                spacing={0}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingBottom: "5vh",
                }}
              >
                <Style.ProjectPlanGrid item xs={2}>
                  <IconWithText title="maxime" icon={ethereum} />
                </Style.ProjectPlanGrid>
                <Style.ProjectPlanGrid item xs={2}>
                  <IconWithText title="maxime" icon={ethereum} />
                </Style.ProjectPlanGrid>
                <Style.ProjectPlanGrid item xs={2}>
                  <IconWithText title="maxime" icon={ethereum} />
                </Style.ProjectPlanGrid>
                <Style.ProjectPlanGrid item xs={2}>
                  <IconWithText title="maxime" icon={ethereum} />
                </Style.ProjectPlanGrid>
                <Style.ProjectPlanGrid item xs={2}>
                  <IconWithText title="maxime" icon={ethereum} />
                </Style.ProjectPlanGrid>
              </Grid>

              <Style.TextAbout>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                vehicula ultrices sem, eget laoreet est tincidunt et. Maecenas
                dolor mi, posuere non iaculis sed, faucibus eget elit. Duis dui
                mauris, sollicitudin eu auctor vel, lacinia vitae sem. Donec
                quis sapien pellentesque, ultrices augue non, mollis ipsum. Nunc
                congue purus in purus consectetur tincidunt. Integer sit amet
                tellus fermentum, dignissim urna quis, fringilla elit. Nunc
                bibendum posuere turpis, vel gravida lacus lobortis sit amet.
                Aenean id viverra ipsum. Vivamus luctus, nunc id iaculis
                blandit, tellus nisl dignissim nisi, quis tempus nisl sapien
                vitae libero. Ut aliquam egestas lacus vitae faucibus. Ut
                pellentesque eget eros vel sodales. Sed sagittis felis metus, ut
                elementum leo fringilla eget.
              </Style.TextAbout>
            </Style.TextTitleContainer>
          </Grid>

          <Grid item xs={4}>
            <Grid
              container
              spacing={1}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid item xs={12}>
                <Style.ImgTeam src={af1x_exemple} />
              </Grid>
              <Grid item xs={6}>
                <Style.ImgTeam src={af1x_exemple} />
              </Grid>
              <Grid item xs={6}>
                <Style.ImgTeam src={af1x_exemple} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Style.View4>

      {/* View 5 */}
      <Style.View5>
        <Style.Roadmap>
          <Style.TextSubtitle>/ ROADMAP .</Style.TextSubtitle>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector
                  style={{
                    backgroundColor: "#dbeaff",
                    boxShadow: "1px 1px 1px #bebebe, 0px 0px 0px #ffffff",
                    borderRadius: "25px",
                    width: "6px",
                  }}
                />
              </TimelineSeparator>
              <TimelineContent />
            </TimelineItem>
            {roadmapArray.map((roadmapItem, index) => {
              return (
                <TimelineItem key={index}>
                  <TimelineOppositeContent
                    style={{
                      color: roadmapItem.colors.color,
                      fontWeight: 900,
                      marginTop: "12.5px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: roadmapItem.colors.bg,
                        padding: "5px 10px 5px 10px",
                        borderRadius: "10px",
                        display: "inline-block",
                      }}
                    >
                      {roadmapItem.percent}
                    </div>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      style={{
                        color: roadmapItem.colors.color,
                        boxShadow: "none",
                        padding: "10px",
                        backgroundColor: roadmapItem.colors.bg,
                      }}
                    >
                      <FastfoodIcon />
                    </TimelineDot>
                    {roadmapArray.length === index + 1 ? null : (
                      <TimelineConnector
                        style={{
                          backgroundColor: roadmapItem.done ? "#8080AE" : "",
                          boxShadow: roadmapItem.done
                            ? "2px 2px 1px #bebebe, 0px 0px 0px #ffffff"
                            : "",
                          borderRadius: "25px",
                          width: roadmapItem.done ? "5px" : "3px",
                        }}
                      />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    {index % 2 ? (
                      <Style.RoadMapItem>
                        <Style.RoadMapItemTitle>
                          {roadmapItem.title}
                        </Style.RoadMapItemTitle>
                        <Style.RoadMapItemContent>
                          {roadmapItem.description}
                        </Style.RoadMapItemContent>
                      </Style.RoadMapItem>
                    ) : (
                      <Style.RoadMapItem2>
                        <Style.RoadMapItemTitle>
                          {roadmapItem.title}
                        </Style.RoadMapItemTitle>
                        <Style.RoadMapItemContent>
                          {roadmapItem.description}
                        </Style.RoadMapItemContent>
                      </Style.RoadMapItem2>
                    )}
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </Style.Roadmap>
      </Style.View5>

      {/* View 6 */}
      <Style.View6>
        <Grid
          container
          columnSpacing={0}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12}>
            <Style.TextTitleContainer>
              <Style.TextSubtitle2>/ TEAM .</Style.TextSubtitle2>
            </Style.TextTitleContainer>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Grid container spacing={3} flexDirection="column">
                <Grid item xs={12}>
                  <Grid container spacing={1} flexDirection="column">
                    <Grid item xs={12}>
                      <Style.TeamName>SSH SUPREME</Style.TeamName>
                    </Grid>
                    <Grid item xs={12}>
                      <Style.TeamNameTitle>CEO & CTO</Style.TeamNameTitle>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <Style.ImgTeam src={af1x_exemple} alt="" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Style.View6>
    </Style.Root>
  );
};

export default Home;

// <Style.InfoNft>
//           <Grid container>
//             <Style.InfoNftContainer item xs={3}>
//               <Style.InfoNftContent>{0}</Style.InfoNftContent>
//               <Style.InfoNftTitle>TOTAL PROJECT</Style.InfoNftTitle>
//             </Style.InfoNftContainer>
//             <Style.InfoNftContainer item xs={3}>
//               <Style.InfoNftContent>{0}</Style.InfoNftContent>
//               <Style.InfoNftTitle>CURRENT SUPPLY</Style.InfoNftTitle>
//             </Style.InfoNftContainer>
//             <Style.InfoNftContainer item xs={3}>
//               <Style.InfoNftContent>{0}</Style.InfoNftContent>
//               <Style.InfoNftTitle>OWNERS</Style.InfoNftTitle>
//             </Style.InfoNftContainer>
//             <Style.InfoNftContainer item xs={3}>
//               <Style.InfoNftContent>{0}</Style.InfoNftContent>
//               <Style.InfoNftTitle>COLLABS</Style.InfoNftTitle>
//             </Style.InfoNftContainer>
//           </Grid>
//         </Style.InfoNft>
