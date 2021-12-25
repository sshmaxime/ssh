import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Grid } from "@mui/material";

// styles
import Style from "./style";

import Container, { ContainerProps } from "../../../_components/container";

import { Fade } from "react-awesome-reveal";

type props = ContainerProps & {
  peoples: {
    name: string;
    job: string;
    img: string;
    bgColor?: string;
  }[];
};

const TeamComponent: FC<props> = ({
  children,
  title,
  subtitle,
  bgColor,
  peoples,
}) => {
  const defaultColor = "black";

  return (
    <Container title={title} subtitle={subtitle} bgColor={bgColor}>
      <Grid
        container
        columnSpacing={0}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={4}>
          {peoples.map((person) => (
            <Grid item xs={3}>
              <Fade triggerOnce>
                <Grid container spacing={1} flexDirection="column">
                  <Grid item xs={12}>
                    <Grid container spacing={0} flexDirection="column">
                      <Grid item xs={12}>
                        <Style.TeamName
                          bgColor={person.bgColor || defaultColor}
                        >
                          {person.name}
                        </Style.TeamName>
                      </Grid>
                      <Grid item xs={12}>
                        <Style.TeamNameTitle>{person.job}</Style.TeamNameTitle>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item xs={12}>
                      <Style.ImgTeam src={person.img} alt="" />
                    </Grid>
                  </Grid>
                </Grid>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default TeamComponent;
