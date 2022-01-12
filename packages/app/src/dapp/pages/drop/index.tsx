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
} from "@mui/material";

import Style from "./style";

import Step from "@mui/material/Step";
import { Fade } from "react-awesome-reveal";
import { useLocation } from "react-router-dom";

import af1x_exemple from "../../../_assets/images/Punk_7804.png";
import Pastille from "../../../_components/stateless/pastille";
import Project from "../../../_components/stateless/project";

const listItems = [
  {
    collection: "Bored Ape Yatch Club",
    list: [{ img: af1x_exemple, title: "hello" }],
  },
  {
    collection: "CryptoPunks",
    list: [
      { img: af1x_exemple, title: "hello" },
      { img: af1x_exemple, title: "hello" },
      { img: af1x_exemple, title: "hello" },
      { img: af1x_exemple, title: "hello" },
      { img: af1x_exemple, title: "hello" },
      { img: af1x_exemple, title: "hello" },
      { img: af1x_exemple, title: "hello" },
    ],
  },
  {
    collection: "Isotile Genesis Avatar",
    list: [
      {
        img: "https://lh3.googleusercontent.com/BBj09xD7R4bBtg1lgnAAS9_TfoYXKwMtudlk-0fVljlURaK7BWcARCpkM-1LGNGTAcsGO6V1TgrtmQFvCo8uVYW_QEfASK-9j6Nr=s300",
        title: "hello",
      },
      {
        img: "https://lh3.googleusercontent.com/BBj09xD7R4bBtg1lgnAAS9_TfoYXKwMtudlk-0fVljlURaK7BWcARCpkM-1LGNGTAcsGO6V1TgrtmQFvCo8uVYW_QEfASK-9j6Nr=s300",
        title: "hello",
      },
      {
        img: "https://lh3.googleusercontent.com/BBj09xD7R4bBtg1lgnAAS9_TfoYXKwMtudlk-0fVljlURaK7BWcARCpkM-1LGNGTAcsGO6V1TgrtmQFvCo8uVYW_QEfASK-9j6Nr=s300",
        title: "hello",
      },
      {
        img: "https://lh3.googleusercontent.com/BBj09xD7R4bBtg1lgnAAS9_TfoYXKwMtudlk-0fVljlURaK7BWcARCpkM-1LGNGTAcsGO6V1TgrtmQFvCo8uVYW_QEfASK-9j6Nr=s300",
        title: "hello",
      },
    ],
  },
  {
    collection: "Cool Cats",
    list: [
      { img: af1x_exemple, title: "hello" },
      { img: af1x_exemple, title: "hello" },
      { img: af1x_exemple, title: "hello" },
      { img: af1x_exemple, title: "hello" },
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

const DApp: FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const hash = useLocation().hash;

  return (
    <Fade duration={1500} triggerOnce>
      <Style.Root>
        <Style.Root1>
          <Project
            title={"DROP"}
            id={"0"}
            justHeader
            defaultLinks={{
              mint: "/app",
            }}
            otherLinks={[
              {
                name: "Opensea",
                url: "https://google.com",
              },
              {
                name: "Etherscan",
                url: "https://google.com",
              },
            ]}
            description={
              <Fragment>
                For this very first drop, SSH LABS is happy to give you the
                opportunity to mint an exclusive skateboard deck ! Rock it in
                the metaverse or in real life !
              </Fragment>
            }
            info={{ mintPrice: "0.1 ETH" }}
            pastilles={[
              {
                title: "0 / 250",
                description: "Minted supply / Total supply",
              },
              {
                title: "3D",
                description: "This NFT holds a 3D model.",
              },
              {
                title: "IRL",
                description: "This NFT holds a redeemable physical object.",
              },
              {
                title: "KEY",
                description: "Minting this NFT gives your a free SSH Key.",
              },
            ]}
          />
          {/*  */}
          <Style.Machine>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Style.StepTitle>SELECT YOUR NFT</Style.StepTitle>
              </Grid>
            </Grid>

            <Grid container justifyContent={"space-between"} spacing={6}>
              <Grid item xs={6}>
                <Style.ScrollerChoose>
                  {listItems.map((list, index1) => (
                    <div key={index1}>
                      <Style.CollectionName>
                        {list.collection}
                      </Style.CollectionName>
                      <ImageList
                        cols={5}
                        gap={8}
                        style={{ marginBottom: "25px" }}
                      >
                        {list.list.map((item, index) => (
                          <ImageListItem
                            key={index}
                            style={{
                              border: "2px solid #2AFE00",
                              cursor: "pointer",
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
                </Style.ScrollerChoose>
              </Grid>

              <Grid item xs={6}>
                <img
                  style={{ width: "100%", borderRadius: "5px", float: "right" }}
                  src={af1x_exemple}
                  alt=""
                />
              </Grid>
            </Grid>

            <Grid
              container
              flexDirection={"row-reverse"}
              style={{ marginTop: "10px" }}
            >
              <Style.MintButton>MINT</Style.MintButton>
            </Grid>
          </Style.Machine>
        </Style.Root1>
      </Style.Root>
    </Fade>
  );
};

export default DApp;
