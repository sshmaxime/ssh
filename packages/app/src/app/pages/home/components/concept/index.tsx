import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Grid, styled, Tabs, Box, Typography } from "@mui/material";
import { Transition } from "react-transition-group";

// styles
import Style from "./style";

import TabsUnstyled from "@mui/base/TabsUnstyled";
import Container, { ContainerProps } from "../../../_components/container";

import { Fade } from "react-awesome-reveal";

type props = ContainerProps & {
  tabs: {
    title: string;
    imgs: { 1: string; 2: string; 3: string };
    innerTab: any;
  }[];
};

const ConceptComponent: FC<props> = ({
  children,
  title,
  subtitle,
  bgColor,
  tabs,
}) => {
  return (
    <Container title={title} subtitle={subtitle} bgColor={bgColor}>
      <TabsUnstyled defaultValue={0}>
        <Grid item xs={8}>
          <Style.TabsList>
            {tabs.map((tab) => (
              <Style.Tab>{tab.title}</Style.Tab>
            ))}
          </Style.TabsList>
        </Grid>

        {tabs.map((tab, index) => (
          <Style.TabPanel value={index}>
            <Fade duration={1500} triggerOnce>
              <Grid
                container
                columnSpacing={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid item xs={8}>
                  {tab.innerTab}
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
                      <Style.ImgTeam src={tab.imgs[1]} />
                    </Grid>
                    <Grid item xs={6}>
                      <Style.ImgTeam src={tab.imgs[2]} />
                    </Grid>
                    <Grid item xs={6}>
                      <Style.ImgTeam src={tab.imgs[3]} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Fade>
          </Style.TabPanel>
        ))}
      </TabsUnstyled>
    </Container>
  );
};

export default ConceptComponent;
