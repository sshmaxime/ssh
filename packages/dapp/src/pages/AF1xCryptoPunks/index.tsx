import { FC } from "react";

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
        <Style.HeaderProjectTitle>WEAR YOUR PUNKS</Style.HeaderProjectTitle>
      </Style.HeaderProject>

      <Style.ProjectExplanation>
        <Grid container spacing={12}>
          <Grid item xs={12} md={5} lg={4}>
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
                boxShadow: "5px 5px 5px #bebebe, -1px -1px 1px #fff",
                padding: "25px",
                backgroundColor: "#fff",
                borderRadius: "25px",
              }}
            >
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={1}
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  <Grid item xs={2}>
                    <Style.ProjectExplanationStatus>
                      0 / 10.000
                    </Style.ProjectExplanationStatus>
                  </Grid>
                  <Grid item xs={1}>
                    <Style.ProjectExplanationStatus2>
                      AF1x
                    </Style.ProjectExplanationStatus2>
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={0}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Grid item xs={10}>
                    <Style.HeaderProjectSmallTitle>
                      <Style.HeaderProjectSmallTitleHead>
                        AF1x
                      </Style.HeaderProjectSmallTitleHead>
                      CryptoPunks
                    </Style.HeaderProjectSmallTitle>
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
                  also the leap into electronic typesetting, remaining.
                </Style.ProjectExplanationDescription>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  <Grid item xs={1}>
                    <Style.MintButton>mint</Style.MintButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Style.ProjectExplanation>

      <Style.ProjectExplanationContainer>
        <Style.Triangle />
      </Style.ProjectExplanationContainer>

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
              <Style.ProjectExplanationImgText>
                CryptoPunks
              </Style.ProjectExplanationImgText>
              <Style.ProjectExplanationImg src={punk_exemple} />
            </Style.ProjectExplanationGrid>

            <Style.ProjectExplanationBigCharContainer>
              <Style.ProjectExplanationBigChar children={"+"} />
            </Style.ProjectExplanationBigCharContainer>

            <Style.ProjectExplanationGrid>
              <Style.ProjectExplanationImgText>
                AF1x
              </Style.ProjectExplanationImgText>
              <Style.ProjectExplanationImg src={image2} />
            </Style.ProjectExplanationGrid>

            <Style.ProjectExplanationBigCharContainer>
              <Style.ProjectExplanationBigChar children={"="} />
            </Style.ProjectExplanationBigCharContainer>

            <Style.ProjectExplanationGrid>
              <Style.ProjectExplanationImgText>
                AF1xCryptoPunks
              </Style.ProjectExplanationImgText>
              <Style.ProjectExplanationImg src={af1x_exemple} />
            </Style.ProjectExplanationGrid>
          </Grid>
        </Grid>
      </Style.ProjectExplanation2>

      <Style.ProjectPlan>
        <Style.ProjectPlanTitle>
          The&nbsp;
          <Style.HeaderProjectSmallTitleHead>
            AF1x
          </Style.HeaderProjectSmallTitleHead>
          Project
        </Style.ProjectPlanTitle>
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
            paddingBottom: "10vh",
          }}
        >
          <Grid item xs={12} md={4} lg={3}>
            <Style.ImgReference src={af1x_exemple} />
          </Grid>
        </Grid>
      </Style.ProjectPlan>

      <Style.ProjectExempleImgs>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={8}>
            <Grid
              container
              spacing={2}
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
                <Style.ProjectExplanationImg2 src={af1x_exemple} />
              </Grid>
              <Grid item xs={2}>
                <Style.ProjectExplanationImg2 src={af1x_exemple} />
              </Grid>
              <Grid item xs={2}>
                <Style.ProjectExplanationImg2 src={af1x_exemple} />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid item xs={6}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Style.ProjectExempleImgs>

      <Style.Roadmap>
        <Style.ProjectPlanTitle>ROADMAP</Style.ProjectPlanTitle>

        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              0% (of the total supply is minted)
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "red" }} />
              <TimelineConnector style={{ backgroundColor: "red" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Style.RoadMapItem>
                <Style.RoadMapItemTitle>Deployment.</Style.RoadMapItemTitle>
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
              1%
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
