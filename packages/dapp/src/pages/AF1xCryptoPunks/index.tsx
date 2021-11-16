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

import AcUnitIcon from "@mui/icons-material/AcUnit";

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
          <Grid item xs={6}>
            <Grid
              container
              spacing={0}
              style={{
                boxShadow: "5px 5px 5px #bebebe, -5px -5px 0px #fff",
                padding: "25px",
                backgroundColor: "#f9f9fb",
                borderRadius: "25px",
              }}
            >
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={0}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Grid item xs={10}>
                    <Style.ProjectExplanationTitle>
                      AF1xCryptoPunks
                    </Style.ProjectExplanationTitle>
                  </Grid>
                  <Grid item xs={2}>
                    <Style.ProjectExplanationStatus>
                      0 / 10.000
                    </Style.ProjectExplanationStatus>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Style.ProjectExplanationNumberItems>
                  &nbsp; &nbsp; &nbsp;
                </Style.ProjectExplanationNumberItems>
              </Grid>

              <Grid item xs={12} md={10}>
                <Style.ProjectExplanationDescription>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Style.ProjectExplanationDescription>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Style.ProjectExplanation>

      <Style.ProjectExplanation2>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              justifyContent: "center",
              boxShadow: "5px 5px 10px grey, -1px -1px 1px white",
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "25px",
            }}
          >
            <Style.ProjectExplanationGrid>
              <Style.ProjectExplanationImg src={punk_exemple} />
              <Style.ProjectExplanationImgText>
                CryptoPunks
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
                AF1xCryptoPunks
              </Style.ProjectExplanationImgText>
            </Style.ProjectExplanationGrid>
          </Grid>
        </Grid>
      </Style.ProjectExplanation2>

      <Style.ProjectPlan>
        <Style.ProjectPlanTitle>WHAT'S THE PLAN</Style.ProjectPlanTitle>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Style.ProjectPlanGrid item xs={2}>
            <Style.ProjectPlanGridContainer
              style={{
                backgroundColor: "#b6ccfe",
              }}
            >
              <AcUnitIcon
                style={{
                  fontSize: "60px",
                  color: "white",
                }}
              />
            </Style.ProjectPlanGridContainer>
          </Style.ProjectPlanGrid>
          <Style.ProjectPlanGrid item xs={2}>
            <Style.ProjectPlanGridContainer
              style={{
                backgroundColor: "#ffd6ba",
              }}
            >
              <AcUnitIcon
                style={{
                  fontSize: "60px",
                  color: "white",
                }}
              />
            </Style.ProjectPlanGridContainer>
          </Style.ProjectPlanGrid>
          <Style.ProjectPlanGrid item xs={2}>
            <Style.ProjectPlanGridContainer
              style={{
                backgroundColor: "#f29479",
              }}
            >
              <AcUnitIcon
                style={{
                  fontSize: "60px",
                  color: "white",
                }}
              />
            </Style.ProjectPlanGridContainer>
          </Style.ProjectPlanGrid>
          <Style.ProjectPlanGrid item xs={2}>
            <Style.ProjectPlanGridContainer
              style={{
                backgroundColor: "#98f5e1",
              }}
            >
              <AcUnitIcon
                style={{
                  fontSize: "60px",
                  color: "white",
                }}
              />
            </Style.ProjectPlanGridContainer>
          </Style.ProjectPlanGrid>
          <Style.ProjectPlanGrid item xs={2}>
            <Style.ProjectPlanGridContainer
              style={{
                backgroundColor: "#cfbaf0",
              }}
            >
              <AcUnitIcon
                style={{
                  fontSize: "60px",
                  color: "white",
                }}
              />
            </Style.ProjectPlanGridContainer>
          </Style.ProjectPlanGrid>
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
