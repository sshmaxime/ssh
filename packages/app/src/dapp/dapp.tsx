import React, { Fragment, FC, useState, useEffect } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  Grid,
  SwipeableDrawer,
} from "@mui/material";

import Style from "./style";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Step from "@mui/material/Step";
import { Fade } from "react-awesome-reveal";

import af1x_exemple from "../_assets/images/Punk_7804.png";

const MyStep: FC<{ title: string; isActive: boolean }> = ({
  title,
  children,
  isActive,
}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Style.StepTitle style={{ opacity: isActive ? "" : "25%" }}>
          / {title} .
        </Style.StepTitle>
      </Grid>

      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

const DApp: FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <Fade duration={1500} triggerOnce>
      <Style.Root>
        <Style.Machine xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Style.Stepper activeStep={activeStep} orientation="vertical">
                <Step key={0}>
                  <MyStep title="SELECT DROP" isActive={activeStep === 0}>
                    <Style.StepContent style={{ marginBottom: "25px" }}>
                      <>Select something</>
                    </Style.StepContent>
                  </MyStep>
                </Step>

                <Step key={1}>
                  <MyStep title="SELECT COLLECTION" isActive={activeStep === 1}>
                    <Style.StepContent>
                      <>Select something</>
                    </Style.StepContent>
                  </MyStep>
                </Step>

                <Step key={2}>
                  <MyStep title="SELECT ITEM" isActive={activeStep === 2}>
                    <Style.StepContent>
                      <>Select something</>
                    </Style.StepContent>
                  </MyStep>
                </Step>
              </Style.Stepper>
            </Grid>
            <Grid item xs={6}>
              <img style={{ width: "100%" }} src={af1x_exemple} alt="" />
            </Grid>
          </Grid>
        </Style.Machine>
      </Style.Root>
    </Fade>
  );
};

export default DApp;
