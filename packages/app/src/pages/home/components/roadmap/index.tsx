import { FC } from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import FastfoodIcon from "@mui/icons-material/Fastfood";

// styles
import Style from "./style";

import Container, { ContainerProps } from "../../../_components/container";

import { Slide } from "react-awesome-reveal";

type props = ContainerProps & {
  roadmapItems: {
    step: string;
    title: string;
    description: any;
    icon: any;
    done: boolean;
    colors: {
      bg: string;
      color: string;
    };
  }[];
};

const RoadmapComponent: FC<props> = ({
  title,
  subtitle,
  bgColor,
  roadmapItems,
}) => {
  return (
    <Container title={title} subtitle={subtitle} bgColor={bgColor}>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector
              style={{
                backgroundColor: "black",
                boxShadow: "1px 1px 1px #bebebe, 0px 0px 0px #ffffff",
                borderRadius: "25px",
                width: "6px",
              }}
            />
          </TimelineSeparator>
          <TimelineContent />
        </TimelineItem>
        {roadmapItems.map((roadmapItem, index) => {
          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                style={{
                  color: roadmapItem.colors.color,
                  fontWeight: 900,
                  marginTop: "12.5px",
                }}
              >
                <Style.RoadMapItemStep
                  color={roadmapItem.colors.color}
                  bgColor={roadmapItem.colors.bg}
                >
                  {roadmapItem.step}
                </Style.RoadMapItemStep>
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
                  {roadmapItem.icon}
                </TimelineDot>
                {roadmapItems.length === index + 1 ? null : (
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
                  <Slide direction="right" triggerOnce>
                    <Style.RoadMapItem
                      style={{
                        marginBottom: "5px",
                      }}
                    >
                      <Style.RoadMapItemTitle
                        style={{
                          color: roadmapItem.colors.bg,
                          textShadow: "2px 2px 1px grey",
                        }}
                      >
                        {roadmapItem.title}
                      </Style.RoadMapItemTitle>
                      <Style.RoadMapItemContent>
                        {roadmapItem.description}
                      </Style.RoadMapItemContent>
                    </Style.RoadMapItem>
                  </Slide>
                ) : (
                  <Slide direction="left" triggerOnce>
                    <Style.RoadMapItem2
                      style={{
                        marginBottom: "5px",
                      }}
                    >
                      <Style.RoadMapItemTitle
                        style={{
                          color: roadmapItem.colors.bg,
                          textShadow: "2px 2px 1px grey",
                        }}
                      >
                        {roadmapItem.title}
                      </Style.RoadMapItemTitle>
                      <Style.RoadMapItemContent>
                        {roadmapItem.description}
                      </Style.RoadMapItemContent>
                    </Style.RoadMapItem2>
                  </Slide>
                )}
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Container>
  );
};

export default RoadmapComponent;
