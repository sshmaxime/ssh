import React, { Fragment, FC, useState, useEffect } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  Grid,
  SwipeableDrawer,
  ImageList,
  ImageListItem,
  Tooltip,
} from "@mui/material";

import Style from "./style";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import Step from "@mui/material/Step";
import { Fade } from "react-awesome-reveal";
import { useLocation, useParams } from "react-router-dom";

import af1x_exemple from "../../../_assets/images/Punk_7804.png";
import comingSoon from "../../../_assets/images/comingsoon.png";
import Pastille from "../../../_components/stateless/pastille";

const listItems = [
  {
    collection: "BAYC",
    list: [{ img: af1x_exemple, title: "hello", id: 0 }],
  },
  {
    collection: "CryptoPunks",
    list: [
      { img: af1x_exemple, title: "hello", id: 0 },
      { img: af1x_exemple, title: "hello", id: 1 },
      { img: af1x_exemple, title: "hello", id: 2 },
      { img: af1x_exemple, title: "hello", id: 3 },
      { img: af1x_exemple, title: "hello", id: 4 },
      { img: af1x_exemple, title: "hello", id: 5 },
      { img: af1x_exemple, title: "hello", id: 6 },
      { img: af1x_exemple, title: "hello", id: 7 },
    ],
  },
  {
    collection: "Isotile",
    list: [
      {
        img: "https://lh3.googleusercontent.com/BBj09xD7R4bBtg1lgnAAS9_TfoYXKwMtudlk-0fVljlURaK7BWcARCpkM-1LGNGTAcsGO6V1TgrtmQFvCo8uVYW_QEfASK-9j6Nr=s300",
        title: "hello",
        id: 0,
      },
      {
        img: "https://lh3.googleusercontent.com/BBj09xD7R4bBtg1lgnAAS9_TfoYXKwMtudlk-0fVljlURaK7BWcARCpkM-1LGNGTAcsGO6V1TgrtmQFvCo8uVYW_QEfASK-9j6Nr=s300",
        title: "hello",
        id: 1,
      },
      {
        img: "https://lh3.googleusercontent.com/BBj09xD7R4bBtg1lgnAAS9_TfoYXKwMtudlk-0fVljlURaK7BWcARCpkM-1LGNGTAcsGO6V1TgrtmQFvCo8uVYW_QEfASK-9j6Nr=s300",
        title: "hello",
        id: 2,
      },
      {
        img: "https://lh3.googleusercontent.com/BBj09xD7R4bBtg1lgnAAS9_TfoYXKwMtudlk-0fVljlURaK7BWcARCpkM-1LGNGTAcsGO6V1TgrtmQFvCo8uVYW_QEfASK-9j6Nr=s300",
        title: "hello",
        id: 3,
      },
    ],
  },
  {
    collection: "Cool Cats",
    list: [
      { img: af1x_exemple, title: "hello", id: 0 },
      { img: af1x_exemple, title: "hello", id: 1 },
      { img: af1x_exemple, title: "hello", id: 2 },
      { img: af1x_exemple, title: "hello", id: 3 },
      { img: af1x_exemple, title: "hello", id: 4 },
      { img: af1x_exemple, title: "hello", id: 5 },
      { img: af1x_exemple, title: "hello", id: 6 },
      { img: af1x_exemple, title: "hello", id: 7 },
      { img: af1x_exemple, title: "hello", id: 8 },
    ],
  },
];

const fakeDrop = {
  id: "0",
  collections: [
    { name: "alpha", contract: "0x" },
    { name: "alpha", contract: "0x" },
    { name: "alpha", contract: "0x" },
  ],
};

const pastilles = [
  {
    title: "KEY",
    description: "Minting this NFT gives your a free SSH Key.",
  },
  {
    title: "IRL",
    description: "This NFT holds a redeemable physical object.",
  },
  {
    title: "3D",
    description: "This NFT holds a 3D model.",
  },
  {
    title: "0 / 250",
    description: "Minted supply / Total supply",
  },
];

const Drop: FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  let params = useParams();

  console.log(params.id);
  //
  const [currentItem, setItem] = React.useState(undefined as any);

  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Fade duration={1500} triggerOnce>
      <Style.Root>
        <Style.Header></Style.Header>
        <Style.Part1>
          <Style.LeftSide>
            <Style.HeaderLeftSide container spacing={0} alignItems="center">
              <Grid item xs={6}>
                <Style.StepTitle>SELECT YOUR NFT</Style.StepTitle>
              </Grid>

              <Grid item xs={1}>
                <FilterListIcon />
              </Grid>

              <Grid item xs={5}>
                <Style.SearchBar>
                  <Grid container alignItems="center">
                    <Grid item>
                      <SearchIcon
                        style={{
                          fontSize: "1.3em",
                          marginLeft: "5px",
                          marginRight: "10px",
                        }}
                      />
                    </Grid>
                    <Grid item style={{ color: "grey", fontSize: "0.9em" }}>
                      Search
                    </Grid>
                  </Grid>
                </Style.SearchBar>
              </Grid>
            </Style.HeaderLeftSide>
            <Style.BodyLeftSide>
              {/*  */}
              <Style.InnerLeftSide>
                {listItems.map((list, index1) => (
                  <div key={index1}>
                    <Style.CollectionName>
                      {list.collection}
                    </Style.CollectionName>
                    <ImageList
                      cols={4}
                      gap={4}
                      style={{ marginBottom: "20px" }}
                    >
                      {list.list.map((item, index) => (
                        <ImageListItem
                          key={index}
                          style={{
                            border:
                              currentItem &&
                              currentItem.collection === list.collection &&
                              currentItem.id === item.id
                                ? "3px solid #2AFE00"
                                : "3px solid white",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setItem({
                              collection: list.collection,
                              id: item.id,
                              img: item.img,
                            });
                          }}
                        >
                          <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </div>
                ))}
              </Style.InnerLeftSide>
            </Style.BodyLeftSide>
          </Style.LeftSide>

          <Style.ContainerInfo maxed={checked}>
            <Style.CloseContainerInfo maxed={checked} onClick={handleChange}>
              CLOSE
            </Style.CloseContainerInfo>
            <Style.ContainerTitle>DROP #1</Style.ContainerTitle>
            <Grid
              container
              spacing={1}
              alignContent={"center"}
              style={{ marginTop: "5px" }}
            >
              {pastilles.map((pastille) => (
                <Grid key={pastille.title} item>
                  <Tooltip arrow title={pastille.description} placement="top">
                    <div>
                      <Pastille title={pastille.title} />
                    </div>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
            <Style.ContainerMoreInfo maxed={checked} onClick={handleChange}>
              <Grid container alignItems="center" justifyContent="center">
                <Grid item>EXPLORE</Grid>
                <Grid item>
                  <ArrowRightAltIcon style={{ fontSize: "2.5em" }} />
                </Grid>
              </Grid>
            </Style.ContainerMoreInfo>

            <Fade
              reverse={!checked}
              duration={250}
              triggerOnce
              style={{ height: "90%" }}
            >
              <Style.ContainerMoreInfoContent>
                <Style.InnerContainerMoreInfoContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam a nisl ac mi imperdiet vulputate sed eget nunc. Donec
                  eleifend dignissim eros, eu pretium risus fermentum at. Proin
                  tortor nisl, faucibus eget malesuada nec, fringilla vitae
                  neque. Aliquam erat volutpat. Etiam facilisis ipsum at nisl
                  consequat, vitae vulputate mi lacinia. Maecenas fringilla odio
                  sed nisi dignissim sodales. Morbi egestas enim et massa
                  gravida interdum. Duis at ex quis lacus imperdiet ullamcorper
                  et a ex. Suspendisse eget leo vitae felis placerat elementum.
                  Maecenas ac augue quis tortor rhoncus viverra non quis sapien.
                  Nullam porta, nulla ac placerat pellentesque, erat ante
                  tristique mi, eu sollicitudin massa nunc quis ipsum. Etiam
                  vitae massa mattis, sodales nisi nec, imperdiet velit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
                  nisl ac mi imperdiet vulputate sed eget nunc. Donec eleifend
                  dignissim eros, eu pretium risus fermentum at. Proin tortor
                  nisl, faucibus eget malesuada nec, fringilla vitae neque.
                  Aliquam erat volutpat. Etiam facilisis ipsum at nisl
                  consequat, vitae vulputate mi lacinia. Maecenas fringilla odio
                  sed nisi dignissim sodales. Morbi egestas enim et massa
                  gravida interdum. Duis at ex quis lacus imperdiet ullamcorper
                  et a ex. Suspendisse eget leo vitae felis placerat elementum.
                  Maecenas ac augue quis tortor rhoncus viverra non quis sapien.
                  Nullam porta, nulla ac placerat pellentesque, erat ante
                  tristique mi, eu sollicitudin massa nunc quis ipsum. Etiam
                  vitae massa mattis, sodales nisi nec, imperdiet velit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
                  nisl ac mi imperdiet vulputate sed eget nunc. Donec eleifend
                  dignissim eros, eu pretium risus fermentum at. Proin tortor
                  nisl, faucibus eget malesuada nec, fringilla vitae neque.
                  Aliquam erat volutpat. Etiam facilisis ipsum at nisl
                  consequat, vitae vulputate mi lacinia. Maecenas fringilla odio
                  sed nisi dignissim sodales. Morbi egestas enim et massa
                  gravida interdum. Duis at ex quis lacus imperdiet ullamcorper
                  et a ex. Suspendisse eget leo vitae felis placerat elementum.
                  Maecenas ac augue quis tortor rhoncus viverra non quis sapien.
                  Nullam porta, nulla ac placerat pellentesque, erat ante
                  tristique mi, eu sollicitudin massa nunc quis ipsum. Etiam
                  vitae massa mattis, sodales nisi nec, imperdiet velit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
                  nisl ac mi imperdiet vulputate sed eget nunc. Donec eleifend
                  dignissim eros, eu pretium risus fermentum at. Proin tortor
                  nisl, faucibus eget malesuada nec, fringilla vitae neque.
                  Aliquam erat volutpat. Etiam facilisis ipsum at nisl
                  consequat, vitae vulputate mi lacinia. Maecenas fringilla odio
                  sed nisi dignissim sodales. Morbi egestas enim et massa
                  gravida interdum. Duis at ex quis lacus imperdiet ullamcorper
                  et a ex. Suspendisse eget leo vitae felis placerat elementum.
                  Maecenas ac augue quis tortor rhoncus viverra non quis sapien.
                  Nullam porta, nulla ac placerat pellentesque, erat ante
                  tristique mi, eu sollicitudin massa nunc quis ipsum. Etiam
                  vitae massa mattis, sodales nisi nec, imperdiet velit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
                  nisl ac mi imperdiet vulputate sed eget nunc. Donec eleifend
                  dignissim eros, eu pretium risus fermentum at. Proin tortor
                  nisl, faucibus eget malesuada nec, fringilla vitae neque.
                  Aliquam erat volutpat. Etiam facilisis ipsum at nisl
                  consequat, vitae vulputate mi lacinia. Maecenas fringilla odio
                  sed nisi dignissim sodales. Morbi egestas enim et massa
                  gravida interdum. Duis at ex quis lacus imperdiet ullamcorper
                  et a ex. Suspendisse eget leo vitae felis placerat elementum.
                  Maecenas ac augue quis tortor rhoncus viverra non quis sapien.
                  Nullam porta, nulla ac placerat pellentesque, erat ante
                  tristique mi, eu sollicitudin massa nunc quis ipsum. Etiam
                  vitae massa mattis, sodales nisi nec, imperdiet velit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
                  nisl ac mi imperdiet vulputate sed eget nunc. Donec eleifend
                  dignissim eros, eu pretium risus fermentum at. Proin tortor
                  nisl, faucibus eget malesuada nec, fringilla vitae neque.
                  Aliquam erat volutpat. Etiam facilisis ipsum at nisl
                  consequat, vitae vulputate mi lacinia. Maecenas fringilla odio
                  sed nisi dignissim sodales. Morbi egestas enim et massa
                  gravida interdum. Duis at ex quis lacus imperdiet ullamcorper
                  et a ex. Suspendisse eget leo vitae felis placerat elementum.
                  Maecenas ac augue quis tortor rhoncus viverra non quis sapien.
                  Nullam porta, nulla ac placerat pellentesque, erat ante
                  tristique mi, eu sollicitudin massa nunc quis ipsum. Etiam
                  vitae massa mattis, sodales nisi nec, imperdiet velit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
                  nisl ac mi imperdiet vulputate sed eget nunc. Donec eleifend
                  dignissim eros, eu pretium risus fermentum at. Proin tortor
                  nisl, faucibus eget malesuada nec, fringilla vitae neque.
                  Aliquam erat volutpat. Etiam facilisis ipsum at nisl
                  consequat, vitae vulputate mi lacinia. Maecenas fringilla odio
                  sed nisi dignissim sodales. Morbi egestas enim et massa
                  gravida interdum. Duis at ex quis lacus imperdiet ullamcorper
                  et a ex. Suspendisse eget leo vitae felis placerat elementum.
                  Maecenas ac augue quis tortor rhoncus viverra non quis sapien.
                  Nullam porta, nulla ac placerat pellentesque, erat ante
                  tristique mi, eu sollicitudin massa nunc quis ipsum. Etiam
                  vitae massa mattis, sodales nisi nec, imperdiet velit.
                </Style.InnerContainerMoreInfoContent>
              </Style.ContainerMoreInfoContent>
            </Fade>
          </Style.ContainerInfo>
        </Style.Part1>
        <Style.Overlay>
          <Style.InnerOverlay>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={9}>
                <Grid
                  container
                  columnSpacing={4}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={2}>
                    <Style.ProjectExplanationImg2 src={comingSoon} />
                  </Grid>
                  <Grid item xs={2}>
                    <Style.ProjectExplanationImg2 src={comingSoon} />
                  </Grid>
                  <Grid item xs={2}>
                    <Style.ProjectExplanationImg2Active src={af1x_exemple} />
                  </Grid>
                  <Grid item xs={2}>
                    <Style.ProjectExplanationImg2 src={comingSoon} />
                  </Grid>
                  <Grid item xs={2}>
                    <Style.ProjectExplanationImg2 src={comingSoon} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Style.InnerOverlay>
        </Style.Overlay>
      </Style.Root>
    </Fade>
  );
};

export default Drop;
