import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// styles
import Style from "./style";

// components
import Card from "../card";
import Button from "../button";
import { Grid } from "@mui/material";

import placeholder from "../../../assets/images/placeholder.jpeg";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type props = {
  inputTitle?: string;
  inputImgs?: [string, string, string, string];
  inputLinks?: { linkName: string; linkUrl: string }[];
  disabled?: boolean;
};

const Project: FC<props> = ({
  inputTitle,
  inputImgs,
  inputLinks,
  disabled,
}) => {
  const imgs: [string, string, string, string] = disabled
    ? [placeholder, placeholder, placeholder, placeholder]
    : [
        inputImgs ? inputImgs[0] : placeholder,
        inputImgs ? inputImgs[1] : placeholder,
        inputImgs ? inputImgs[2] : placeholder,
        inputImgs ? inputImgs[3] : placeholder,
      ];

  const title = !disabled ? inputTitle : "Coming soon ...";

  const Title = !disabled ? (
    <>
      <Style.Title>{title}</Style.Title>
    </>
  ) : (
    <>
      <Style.TitleDisabled>{title}</Style.TitleDisabled>
    </>
  );

  return (
    <Style.Root>
      <Card>
        <Grid container spacing={6}>
          {/* Title, Description, Links */}
          <Grid item sm={4} md={12} lg={6}>
            <Grid container direction="column" rowSpacing={4}>
              <Grid item xs={12}>
                {Title}
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {inputLinks?.map((obj) => {
                    return (
                      <Grid key={obj.linkName} item xs={6} md={6} lg={4}>
                        <Button title={obj.linkName} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* 4 images of the project */}
          <Grid item sm={8} md={12} lg={6}>
            <Grid container spacing={1}>
              <Grid item lg={3} md={6} xs={6}>
                <Style.Image src={imgs[0]} alt="" />
              </Grid>
              <Grid item lg={3} md={6} xs={6}>
                <Style.Image src={imgs[1]} alt="" />
              </Grid>
              <Grid item lg={3} md={6} xs={6}>
                <Style.Image src={imgs[2]} alt="" />
              </Grid>
              <Grid item lg={3} md={6} xs={6}>
                <Style.ImageContainer>
                  <Style.Image src={imgs[3]} alt="" />
                  {!disabled && (
                    <>
                      <Style.Overlay />
                      <Style.OverlayText>
                        <ArrowForwardIcon fontSize="large" />
                      </Style.OverlayText>
                    </>
                  )}
                </Style.ImageContainer>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Style.Root>
  );
};

export default Project;
