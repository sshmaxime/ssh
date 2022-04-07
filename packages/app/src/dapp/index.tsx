import React, {
  Suspense,
  Fragment,
  FC,
  useState,
  useEffect,
  useRef,
} from "react";

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

import logoeth from "../_utils/assets/images/logoeth.svg";
import af1x_exemple from "../_utils/assets/images/Punk_7804.png";
import Pastille from "../_utils/components/stateless/pastille";

import { useLoader, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from "@react-three/drei";
import ModelAIR from "../_utils/assets/models/AIR";
import ModelSkate from "../_utils/assets/models/Skate";
import ModelRoom from "../_utils/assets/models/Room";
import * as THREE from "three";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { createCanvas, loadImage, Image } from "canvas";

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

export const My3DScene: FC = () => {
  return (
    <>
      <Canvas
        flat={true}
        linear={true}
        camera={{ position: [0, 45, -75] }}
        style={{ height: "100%", width: "100%" }}
      >
        {/*  */}
        <ambientLight intensity={0.95} />
        <ModelSkate
          position={[0, 45, 0]}
          rotation={[Math.PI / 2, Math.PI / 2, Math.PI]}
        />
        {/* <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[100, 100, 100, 100]} />
          <meshBasicMaterial side={THREE.DoubleSide} color="black" />
        </mesh> */}
        <OrbitControls target={[0, 45, 0]} />
      </Canvas>
    </>
  );
};

export const My3DRoom: FC = () => {
  return (
    <>
      <Canvas
        flat={true}
        linear={true}
        camera={{ position: [0, 45, -75] }}
        style={{ height: "100%", width: "100%" }}
      >
        {/*  */}
        <ambientLight intensity={0.95} />
        <ModelRoom position={[0, 45, 0]} />
        <OrbitControls target={[0, 45, 0]} />
      </Canvas>
    </>
  );
};

const Drop: FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  let params = useParams();

  const [currentItem, setItem] = React.useState(undefined as any);

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    if (checked === false) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  //
  return (
    <Fade duration={1500} triggerOnce>
      <Style.Root>
        <Style.Header></Style.Header>
        <Style.Part1>
          {/* 3D */}
          <Suspense fallback={null}>
            <My3DScene />
          </Suspense>

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
            <Style.InnerContainerInfo maxed={checked}>
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
              <Style.ContainerPayment maxed={checked}>
                <Style.InnerContainerPayment>
                  <Grid container alignItems="center" rowSpacing={2}>
                    <Grid item xs={12}>
                      <Style.MintPriceTitle>Mint price</Style.MintPriceTitle>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container alignItems="baseline" columnSpacing={1}>
                        <Grid item xs={1}>
                          <img src={logoeth} style={{ width: "90%" }} alt="" />
                        </Grid>
                        <Grid item>
                          <Style.MintPrice>0.5</Style.MintPrice>
                        </Grid>
                        <Grid item>
                          <Style.MintPriceUsd>($200.87)</Style.MintPriceUsd>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Style.MintButton>MINT</Style.MintButton>
                    </Grid>
                  </Grid>
                </Style.InnerContainerPayment>
              </Style.ContainerPayment>
              <Style.ContainerMoreInfo maxed={checked} onClick={handleChange}>
                <Style.DetailsContainer
                  container
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item>DETAILS</Grid>
                  <Grid item>
                    <ArrowRightAltIcon style={{ fontSize: "2.5em" }} />
                  </Grid>
                </Style.DetailsContainer>
              </Style.ContainerMoreInfo>

              <Style.ContainerMoreInfoContent maxed={checked}>
                <Style.InnerContainerMoreInfoContent maxed={checked}>
                  <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={9}>
                      Hello
                    </Grid>

                    <Grid item xs={3}>
                      <img
                        src={af1x_exemple}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={9}>
                      Hello
                    </Grid>

                    <Grid item xs={3}>
                      <img
                        src={af1x_exemple}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={9}>
                      Hello
                    </Grid>

                    <Grid item xs={3}>
                      <img
                        src={af1x_exemple}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={9}>
                      Hello
                    </Grid>

                    <Grid item xs={3}>
                      <img
                        src={af1x_exemple}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={9}>
                      Hello
                    </Grid>

                    <Grid item xs={3}>
                      <img
                        src={af1x_exemple}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={9}>
                      Hello
                    </Grid>

                    <Grid item xs={3}>
                      <img
                        src={af1x_exemple}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </Grid>
                  </Grid>
                </Style.InnerContainerMoreInfoContent>
              </Style.ContainerMoreInfoContent>
            </Style.InnerContainerInfo>
          </Style.ContainerInfo>
        </Style.Part1>
        <Style.Overlay>
          <Style.InnerOverlay>
            <Style.InnerOverlayLeft></Style.InnerOverlayLeft>
            <Style.InnerOverlayCenter>hey</Style.InnerOverlayCenter>
            <Style.InnerOverlayRight></Style.InnerOverlayRight>
          </Style.InnerOverlay>
        </Style.Overlay>
      </Style.Root>
    </Fade>
  );
};

export default Drop;
