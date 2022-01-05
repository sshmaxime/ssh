import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Grid } from "@mui/material";

// styles
import Style from "./style";

import Container, { ContainerProps } from "../../../_components/container";

import { Fade } from "react-awesome-reveal";
import Clickable from "../../../../components/stateless/clickable";

type props = ContainerProps & {
  peoples: {
    name: string;
    job: string;
    img: string;
    bgColor?: string;
    icons: { img: any | string; link: string }[];
  }[];
};

const TeamComponent: FC<props> = ({
  children,
  title,
  subtitle,
  bgcolor: bgColor,
  peoples,
}) => {
  return (
    <Container title={title} subtitle={subtitle} bgcolor={bgColor}>
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
            <Grid key={person.name} item xs={3}>
              <Fade triggerOnce>
                <Grid container>
                  <Grid item xs={6}>
                    <Grid container spacing={0}>
                      <Grid item xs={12}>
                        <Style.TeamName>{person.name}</Style.TeamName>
                      </Grid>

                      <Grid item>
                        <Style.TeamNameTitle>{person.job}</Style.TeamNameTitle>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={6}>
                    <Grid
                      container
                      spacing={1}
                      style={{
                        paddingRight: "5px",
                      }}
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      {person.icons.map((icon, index) => {
                        return (
                          <Grid key={index} item>
                            <Clickable address={icon.link}>
                              {typeof icon.img === "string" ? (
                                <img src={icon.img} alt="" />
                              ) : (
                                icon.img
                              )}
                            </Clickable>
                          </Grid>
                        );
                      })}
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
