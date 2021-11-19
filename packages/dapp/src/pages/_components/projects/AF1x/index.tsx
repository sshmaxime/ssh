import { FC } from "react";

// styles
import Style from "./style";

import { Grid, GridSize } from "@mui/material";
import Pastille from "../../../../components/stateless/pastille";
import AcUnitIcon from "@mui/icons-material/AcUnit";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

type props = {
  view_1: {
    // children = description
    title: string;
    image: string;
    description: any;
    pastilles: {
      size: GridSize;
      title: string;
      color: string;
    }[];
  };
  view_2: {
    image_step_1: string;
    image_step_2: string;
    image_step_3: string;
  };
  view_3: {
    image_reference: string;
  };
  view_4: {
    image_1: string;
    image_2: string;
    image_3: string;
    image_4: string;
    image_5: string;
  };
  view_5: {
    percent: string;
    title: string;
    description: any;
    done: boolean;
  }[];
};

const AF1x: FC<props> = ({ view_1, view_2, view_3, view_4, view_5 }) => {
  const { title, image, pastilles, description } = view_1;
  const { image_step_1, image_step_2, image_step_3 } = view_2;
  const { image_reference } = view_3;
  const { image_1, image_2, image_3, image_4, image_5 } = view_4;
  const roadmapArray = view_5;

  return (
    <Style.Root>
      {/* View 1 */}
      <Style.View_1>
        <Style.PageTitleContainer>
          <Style.PageTitle children={"WEAR YOUR PUNKS"} />
        </Style.PageTitleContainer>
        <Style.HeaderContainer container spacing={12}>
          <Grid item xs={12} md={5} lg={4}>
            <Style.ImageContainer>
              <Style.Image src={image} />
            </Style.ImageContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <Style.GridContainerCard container spacing={0}>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={1}
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  {pastilles.map((pastille) => (
                    <Grid key={pastille.title} item xs={pastille.size}>
                      <Pastille title={pastille.title} color={pastille.color} />
                    </Grid>
                  ))}
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
                    <Style.ProjectTitleContainer>
                      <Style.ProjectTitleKeyword>
                        AF1x
                      </Style.ProjectTitleKeyword>
                      {title}
                    </Style.ProjectTitleContainer>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Style.ProjectSpacer>&nbsp; &nbsp; &nbsp;</Style.ProjectSpacer>
              </Grid>

              <Grid item xs={12} md={10}>
                <Style.ProjectDescription>
                  {description}
                </Style.ProjectDescription>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={1}
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  <Grid item>
                    <Style.MintButton>mint</Style.MintButton>
                  </Grid>
                  <Grid item>
                    <>&nbsp;&nbsp;&nbsp;</>
                  </Grid>
                  <Grid item>
                    <Style.ExternalLink>Etherscan</Style.ExternalLink>
                  </Grid>
                  <Grid item>
                    <Style.ExternalLink>OpenSea</Style.ExternalLink>
                  </Grid>
                </Grid>
              </Grid>
            </Style.GridContainerCard>
          </Grid>
        </Style.HeaderContainer>
      </Style.View_1>

      {/* View 2 */}
      <Style.View_2>
        <Style.TriangleContainer>
          <Style.Triangle />
        </Style.TriangleContainer>
        <Style.ProjectQuickPresentation>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item xs={7}>
              <Grid
                container
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  boxShadow: "5px 5px 10px grey, -1px -1px 1px white",
                  backgroundColor: "white",
                  borderRadius: "15px",
                  padding: "25px",
                }}
              >
                <Style.ProjectPresentationGrid xs={3}>
                  <Style.ProjectPresentationImg src={image_step_1} />
                </Style.ProjectPresentationGrid>

                <Style.ProjectPresentationBigCharContainer xs={1}>
                  <Style.ProjectPresentationBigChar children={"+"} />
                </Style.ProjectPresentationBigCharContainer>

                <Style.ProjectPresentationGrid xs={3}>
                  <Style.ProjectPresentationImg src={image_step_2} />
                </Style.ProjectPresentationGrid>

                <Style.ProjectPresentationBigCharContainer xs={1}>
                  <Style.ProjectPresentationBigChar children={"="} />
                </Style.ProjectPresentationBigCharContainer>

                <Style.ProjectPresentationGrid xs={3}>
                  <Style.ProjectPresentationImg src={image_step_3} />
                </Style.ProjectPresentationGrid>
              </Grid>
            </Grid>
          </Grid>
        </Style.ProjectQuickPresentation>
      </Style.View_2>

      {/* View 3 */}
      <Style.View_3>
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
            columnSpacing={12}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10vh",
              paddingBottom: "10vh",
            }}
          >
            <Grid item xs={12} lg={4}>
              <Style.ImgReference src={image_reference} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Style.TextTitle>&nbsp;ABOUT&nbsp;</Style.TextTitle>
              <Style.TextReference>
                The AF1x project is a first step into building the bridge
                between our life on earth and the metaverse.
                <br />
                <br />
                It aims at showing the world what can be done through the power
                of blockchain technology.
                <br />
                <br />
                Buying an AF1x, gives you the opportunity to join an exclusive
                group of like minded people, working together to make this world
                a better place.
                <br />
                <br />
                We must strive for a better life on earth.
                <br />
                <br />
                .Terra Invicta.
                <Style.ReadMore
                  container
                  flexDirection="row-reverse"
                  style={{
                    alignItems: "center",
                  }}
                >
                  <ArrowRightAltIcon /> Read more
                </Style.ReadMore>
              </Style.TextReference>
            </Grid>
          </Grid>
        </Style.ProjectPlan>
      </Style.View_3>

      {/* View 4 */}
      <Style.View_4>
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
                  <Style.ProjectExplanationImg2 src={image_1} />
                </Grid>
                <Grid item xs={2}>
                  <Style.ProjectExplanationImg2 src={image_2} />
                </Grid>
                <Grid item xs={2}>
                  <Style.ProjectExplanationImg2 src={image_3} />
                </Grid>
                <Grid item xs={2}>
                  <Style.ProjectExplanationImg2 src={image_4} />
                </Grid>
                <Grid item xs={2}>
                  <Style.ProjectExplanationImg2 src={image_5} />
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
      </Style.View_4>

      {/* View 5 */}
      <Style.View_5>
        <Style.Roadmap>
          <Style.ProjectPlanTitle>ROADMAP</Style.ProjectPlanTitle>

          <Timeline>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary"></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector
                  style={{
                    backgroundColor: "red",
                  }}
                />
              </TimelineSeparator>
              <TimelineContent />
            </TimelineItem>
            {roadmapArray.map((roadmapItem, index) => {
              return (
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    {roadmapItem.percent}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      style={{
                        backgroundColor: roadmapItem.done ? "red" : "",
                      }}
                    />
                    {roadmapArray.length === index + 1 ? null : (
                      <TimelineConnector
                        style={{
                          backgroundColor: roadmapItem.done ? "red" : "",
                        }}
                      />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Style.RoadMapItem>
                      <Style.RoadMapItemTitle>
                        . {roadmapItem.title} .
                      </Style.RoadMapItemTitle>
                      <Style.RoadMapItemContent>
                        {roadmapItem.description}
                      </Style.RoadMapItemContent>
                    </Style.RoadMapItem>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </Style.Roadmap>
      </Style.View_5>
    </Style.Root>
  );
};

export default AF1x;
