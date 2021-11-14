import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Slider from "react-slick";

// styles
import Style from "./style";

// components

//
import { Grid } from "@mui/material";

import image2 from "../../assets/images/Punk_5217.png";

import af1x_exemple from "../../assets/images/Punk_7804.png";
import punk_exemple from "../../assets/images/cryptopunk7804b.png";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { NAME } from "../../components/constants";

const AF1xCryptoPunks: FC = () => {
  return (
    <Style.Root>
      <Style.HeaderProject>
        <div>
          <Style.HeaderProjectTitle>WEAR YOUR PUNKS</Style.HeaderProjectTitle>
          <Style.HeaderProjectSmallTitle>
            <Style.HeaderProjectSmallTitleHead>
              AF1x
            </Style.HeaderProjectSmallTitleHead>
            CryptoPunks
          </Style.HeaderProjectSmallTitle>
        </div>
      </Style.HeaderProject>

      <Style.LinkContainer container spacing={4}>
        <Style.LinkContainerItem item md={2} sm={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Style.LinkContainerItemText>Etherscan</Style.LinkContainerItemText>
          </div>
        </Style.LinkContainerItem>

        <Style.LinkContainerItem
          item
          md={2}
          sm={6}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Style.LinkContainerItemText>Github</Style.LinkContainerItemText>
          </div>
        </Style.LinkContainerItem>
      </Style.LinkContainer>

      <Style.ProjectExplanationContainer>
        <Style.Triangle />
      </Style.ProjectExplanationContainer>

      <Style.ProjectExplanation>
        <Grid container spacing={12} style={{ paddingBottom: "10vh" }}>
          <Grid item xs={5}>
            <Style.ProjectExplanationGifContainer
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Style.Gif src={af1x_exemple} />
            </Style.ProjectExplanationGifContainer>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Style.ProjectExplanationNumberItems>
                  10.000 AF1xCryptoPunks
                </Style.ProjectExplanationNumberItems>
              </Grid>

              <Grid item xs={12}>
                Description
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            marginTop: "10vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Style.ProjectExplanationGrid>
            <Style.ProjectExplanationImg src={punk_exemple} />
            <Style.ProjectExplanationImgText>
              Your Punk
            </Style.ProjectExplanationImgText>
          </Style.ProjectExplanationGrid>

          <Style.ProjectExplanationBigCharContainer>
            <Style.ProjectExplanationBigChar children={"+"} />
          </Style.ProjectExplanationBigCharContainer>

          <Style.ProjectExplanationGrid>
            <Style.ProjectExplanationImg src={image2} />
            <Style.ProjectExplanationImgText>
              AF1x
            </Style.ProjectExplanationImgText>
          </Style.ProjectExplanationGrid>

          <Style.ProjectExplanationBigCharContainer>
            <Style.ProjectExplanationBigChar children={"="} />
          </Style.ProjectExplanationBigCharContainer>

          <Style.ProjectExplanationGrid>
            <Style.ProjectExplanationImg src={af1x_exemple} />
            <Style.ProjectExplanationImgText>
              Custom
            </Style.ProjectExplanationImgText>
          </Style.ProjectExplanationGrid>
        </Grid>
      </Style.ProjectExplanation>

      <Style.ProjectPlan>
        <Style.ProjectPlanTitle>WHAT'S THE PLAN</Style.ProjectPlanTitle>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Grid item xs={2}>
            Identify Your Punk
          </Grid>
          <Grid item xs={2}>
            generate it
          </Grid>
          <Grid item xs={2}>
            mint it
          </Grid>
          <Grid item xs={2}>
            burn it
          </Grid>
          <Grid item xs={2}>
            receive your custom
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "10vh",
          }}
        >
          <Grid item xs={12} md={4}>
            <Style.ImgReference src={af1x_exemple} />
          </Grid>
        </Grid>
      </Style.ProjectPlan>

      <Style.Roadmap>
        <Style.ProjectPlanTitle>ROADMAP</Style.ProjectPlanTitle>

        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              1% (of the total supply is minted)
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Style.RoadMapItem>
                <Style.RoadMapItemTitle>AF1x Airdrop.</Style.RoadMapItemTitle>
                <Style.RoadMapItemContent>
                  Once the project kicked of a bit and 100 AF1xCryptoPunks have
                  been minted, we will airdrop an AF1x to those 100 first
                  supporters. To read more about AF1x, check out this page.
                  {/* @TODO add link */}
                </Style.RoadMapItemContent>
              </Style.RoadMapItem>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              25%
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Style.RoadMapItem>
                <Style.RoadMapItemTitle>Redeem.</Style.RoadMapItemTitle>
                <Style.RoadMapItemContent>
                  Until that milestone, AF1x and its derivatives could be minted
                  but not redeemed. It's now a thing of the past, you can now
                  redeem your AF1x by burning your NFT.
                </Style.RoadMapItemContent>
              </Style.RoadMapItem>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              30%
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <Style.RoadMapItem>
                <Style.RoadMapItemTitle>{NAME}</Style.RoadMapItemTitle>
              </Style.RoadMapItem>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Style.Roadmap>
    </Style.Root>
  );
};

export default AF1xCryptoPunks;
