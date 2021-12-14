import { FC } from "react";

// styles
import Style from "./style";

import { Grid, GridSize, Button } from "@mui/material";
import Pastille from "../../../../components/stateless/pastille";
import AcUnitIcon from "@mui/icons-material/AcUnit";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import Tooltip from "@mui/material/Tooltip";

type props = {
  view_1: {
    // children = description
    title: string;
    headline: string;
    image: string;
    description: any;
    info: {
      mintPrice: string;
    };
    pastilles: {
      size?: GridSize;
      title: string;
      description: string;
      color: string;
    }[];
  };
  view_2: {
    image_step_1: string;
    image_step_2: string;
    image_step_3: string;
  };
  view_3: {
    image_about: string;
    text_about: any;
    image_artist: string;
    text_artist: any;
    info_nft: {
      launchDate: string;
      currentlyMinted: number;
      totalSupply: string;
      owners: number;
    };
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
  const { title, headline, info, image, pastilles, description } = view_1;
  const { image_step_1, image_step_2, image_step_3 } = view_2;
  const { image_about, text_about, image_artist, text_artist, info_nft } =
    view_3;
  const { image_1, image_2, image_3, image_4, image_5 } = view_4;
  const roadmapArray = view_5;

  return (
    <Style.Root>
      {/* View 1 */}
      <Style.View_1>
        <Style.PageTitleContainer>
          <Style.PageTitle children={headline} />
        </Style.PageTitleContainer>
        <Style.HeaderContainer container spacing={2} justifyContent={"center"}>
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
                    <Grid
                      key={pastille.title}
                      item
                      xs={pastille.size || "auto"}
                    >
                      <Tooltip
                        arrow
                        title={pastille.description}
                        placement="top"
                      >
                        <div>
                          <Pastille
                            title={pastille.title}
                            color={pastille.color}
                          />
                        </div>
                      </Tooltip>
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
                <Style.ProjectSpacer>&nbsp;&nbsp;&nbsp;</Style.ProjectSpacer>
              </Grid>

              <Grid item xs={12}>
                <Style.ProjectDescription>
                  {description}
                </Style.ProjectDescription>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Grid container spacing={1}>
                      <Grid item>
                        <Style.MintPrice>{info.mintPrice}</Style.MintPrice>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={6}>
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
                }}
              >
                <Style.ProjectPresentationGrid item xs={3}>
                  <Style.ProjectPresentationImg src={image_step_1} />
                  <Style.ProjectPresentationTitle>
                    &nbsp;CryptoPunks&nbsp;
                  </Style.ProjectPresentationTitle>
                </Style.ProjectPresentationGrid>

                <Style.ProjectPresentationBigCharContainer item xs={1}>
                  <Style.ProjectPresentationBigChar children={"+"} />
                </Style.ProjectPresentationBigCharContainer>

                <Style.ProjectPresentationGrid item xs={3}>
                  <Style.ProjectPresentationImg src={image_step_2} />
                  <Style.ProjectPresentationTitle>
                    &nbsp;AF1&nbsp;
                  </Style.ProjectPresentationTitle>
                </Style.ProjectPresentationGrid>

                <Style.ProjectPresentationBigCharContainer item xs={1}>
                  <Style.ProjectPresentationBigChar children={"="} />
                </Style.ProjectPresentationBigCharContainer>

                <Style.ProjectPresentationGrid item xs={3}>
                  <Style.ProjectPresentationImg src={image_step_3} />
                  <Style.ProjectPresentationTitle>
                    &nbsp;AF1x CryptoPunks&nbsp;
                  </Style.ProjectPresentationTitle>
                </Style.ProjectPresentationGrid>
              </Grid>
            </Grid>
          </Grid>
        </Style.ProjectQuickPresentation>
      </Style.View_2>

      {/* View 3 */}
      <Style.View_3>
        <Style.ProjectPlan>
          <Style.ProjectPlan_Wrapper1>
            <Style.ProjectPlanTitle>
              <Style.HeaderProjectSmallTitleHead>
                AF1x
              </Style.HeaderProjectSmallTitleHead>
              {title}
            </Style.ProjectPlanTitle>
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingBottom: "5vh",
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
                <Style.ImgAbout src={image_about} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <Style.TextTitleContainer>
                  <Style.TextTitle>&nbsp;ABOUT&nbsp;</Style.TextTitle>
                </Style.TextTitleContainer>
                <Style.TextAbout>{text_about}</Style.TextAbout>
              </Grid>
            </Grid>
          </Style.ProjectPlan_Wrapper1>

          <Style.InfoNft>
            <Grid container columnSpacing={12}>
              <Style.InfoNftContainer item xs={4}>
                <Style.InfoNftContent>
                  {info_nft.currentlyMinted}
                </Style.InfoNftContent>
                <Style.InfoNftTitle>CURRENT SUPPLY</Style.InfoNftTitle>
              </Style.InfoNftContainer>
              <Style.InfoNftContainer item xs={4}>
                <Style.InfoNftContent>{info_nft.owners}</Style.InfoNftContent>
                <Style.InfoNftTitle>OWNERS</Style.InfoNftTitle>
              </Style.InfoNftContainer>
              <Style.InfoNftContainer item xs={4}>
                <Style.InfoNftContent>
                  {info_nft.totalSupply}
                </Style.InfoNftContent>
                <Style.InfoNftTitle>TOTAL SUPPLY</Style.InfoNftTitle>
              </Style.InfoNftContainer>
            </Grid>
          </Style.InfoNft>

          <Grid item xs={12}>
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
                <Style.TextTitleContainer>
                  <Style.TextTitle>&nbsp;ARTIST&nbsp;</Style.TextTitle>
                </Style.TextTitleContainer>
                <Style.TextAbout>{text_artist}</Style.TextAbout>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Grid
                  container
                  spacing={2}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Grid item xs={12} lg={6}>
                    <Style.ImgAbout src={image_artist} />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Style.ImgAbout src={image_artist} />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Style.ImgAbout src={image_artist} />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Style.ImgAbout src={image_artist} />
                  </Grid>
                </Grid>
              </Grid>
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
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector
                  style={{
                    backgroundColor: "#dbeaff",
                    boxShadow: "3px 3px 1px #bebebe, 0px 0px 0px #ffffff",
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
                  <TimelineOppositeContent style={{ color: "#c6c6c6" }}>
                    {roadmapItem.percent}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      style={{
                        backgroundColor: roadmapItem.done ? "#dbeaff" : "",
                      }}
                    />
                    {roadmapArray.length === index + 1 ? null : (
                      <TimelineConnector
                        style={{
                          backgroundColor: roadmapItem.done ? "#dbeaff" : "",
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
                    <Style.RoadMapItem>
                      <Style.RoadMapItemTitle>
                        {roadmapItem.title}
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
