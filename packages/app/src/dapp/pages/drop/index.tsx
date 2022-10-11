import React, { Suspense, Fragment, FC, useState, useEffect, useRef } from "react";

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
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Fade } from "react-awesome-reveal";

import logoeth from "../../../_utils/assets/images/logoeth.svg";
import Pastille from "../../../_utils/components/stateless/pastille";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import Clickable from "../../../_utils/components/stateless/clickable";
import Tooltip from "../../../_utils/components/stateless/tooltip";
import { useDispatch, useSelector } from "../../store/hooks";
import SceneLoader, { sceneRef } from "@/_3d/scenes/skate_1";
import { Drop as DropType } from "@sshlabs/typings";
import { useParams } from "react-router-dom";
import { CREDENTIALS } from "../../../_constants";

import { useGetDropQuery, useGetAssetsForDropByAddressQuery } from "../../store/services";
import { login, mint } from "../../store/services/web3";

import { ethers } from "ethers";
import { useGetMessagesQuery } from "@/dapp/store/services/socket";

const { parseEther: toEth, formatEther, formatBytes32String } = ethers.utils;

const DropProxy: FC = () => {
  const { data: drop, isLoading } = useGetMessagesQuery({});
  const dropId = Number(useParams().dropId || "-1");

  if (isLoading) {
    return <></>; // TOD
  }

  if (isNaN(dropId) || drop === undefined || dropId >= drop.length) {
    return <DropNotFound />;
  }

  return <Drop drop={drop[dropId]} />;
};

const DropNotFound: FC = () => {
  return (
    <Style.RootNotFound>
      <Style.NotFound>
        <Grid container>
          <Grid item xs={12}>
            Drop Not Found.
          </Grid>
          <Grid item xs={12}>
            <Style.MoreLinkContainer>
              <Clickable onClick={() => {}}>
                <Grid container>
                  <Grid item alignSelf={"center"}>
                    <Style.MoreLink>HOME</Style.MoreLink>
                  </Grid>
                  <Grid item alignSelf={"center"}>
                    <ArrowRightAltIcon style={{ color: "black", fontSize: "1.8em" }} />
                  </Grid>
                </Grid>
              </Clickable>
            </Style.MoreLinkContainer>
          </Grid>
        </Grid>
      </Style.NotFound>
    </Style.RootNotFound>
  );
};

const Deck: { [key: string]: string } = {
  Sublimes: "/models/skate/textures/sublimes-deck.png",
  Isotile: "/models/skate/textures/isotile-deck.png",
  MoonCats: "/models/skate/textures/mooncats-deck.png",
};

const Drop: FC<{ drop: DropType }> = ({ drop }) => {
  const { auth, address, name } = useSelector((state) => state.web3);
  const dispatch = useDispatch();

  // fetch data
  const { data: assets, isLoading } = useGetAssetsForDropByAddressQuery(
    { dropId: drop.id, address: address },
    { skip: !auth }
  );

  const isMintable = drop.currentSupply !== drop.maxSupply;

  // fc state
  const [currentItem, setItem] = React.useState<{ collection: string; id: number; img: string }>();
  const [currentVersion, setVersion] = React.useState(0);
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => setChecked(!checked);

  const sceneRef = React.useRef<sceneRef>(null!);

  const updateItem = (newItem: any) => {
    setItem(newItem);

    if (Deck[newItem.collection]) {
      sceneRef.current.changeTexturePlaceholder(newItem.img);
      sceneRef.current.changeTextureDeck(Deck[newItem.collection]);
    } else {
    }
  };

  const pastilles = [
    {
      title: "IRL",
      description: "This NFT holds a redeemable physical object.",
    },
    {
      title: "3D",
      description: "This NFT holds a 3D model.",
    },
  ];

  return (
    <Fade duration={1500} triggerOnce>
      <Style.Root>
        <Style.Header></Style.Header>

        <Style.Body>
          <Style.BodyScene>
            <SceneLoader sceneRef={sceneRef} />
          </Style.BodyScene>

          <Style.LeftSide>
            <Style.RealHeader>
              <Grid container spacing={0} flexDirection="column">
                <Grid item xs={12}>
                  <Style.HeaderFirstLeftSideTitle>
                    Hello
                    <b style={{ borderBottom: "2px solid black", marginLeft: "8px" }}>{name}</b>
                  </Style.HeaderFirstLeftSideTitle>
                </Grid>
                {/*  */}
                <Grid item xs={12}>
                  <Style.CommandsContainer container>
                    <Grid item xs={12}>
                      <Grid container justifyContent="space-between">
                        <Grid item>
                          <Style.CommandsText>
                            <Style.StepTitle>QUICK INFO</Style.StepTitle>
                          </Style.CommandsText>
                        </Grid>
                        <Grid item>
                          <Style.CommandsText>
                            <Style.StepTitle3>DROP #{drop.id}</Style.StepTitle3>
                          </Style.CommandsText>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Style.Commands container justifyContent="space-between">
                        <Grid item>
                          <Grid container columnSpacing={0.5}>
                            <Grid item>
                              {/* <Pastille
                                secondary
                                bgcolor={
                                  drop.status === STATUS.CREATED
                                    ? "#F8E0CD"
                                    : drop.status === STATUS.MINTABLE
                                    ? "#DAF1EA"
                                    : drop.status === STATUS.STANDBY
                                    ? "#EDECE8"
                                    : "#E4ECFE"
                                }
                                small
                                title={drop.status}
                              /> */}
                            </Grid>
                            <Grid item>
                              <Pastille
                                secondary
                                bgcolor={"#CDDAFD"}
                                small
                                title={` ${drop.currentSupply} / ${drop.maxSupply}`}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Style.Commands>
                    </Grid>
                  </Style.CommandsContainer>
                </Grid>
              </Grid>
            </Style.RealHeader>

            {/* {isStateCreated && (
              <Style.BodyLeftSideTextContainer>
                <Style.BodyLeftSideTextContainerCenterer>
                  <Style.StepTitle2>INFORMATION</Style.StepTitle2>

                  <Style.BodyLeftSideText>
                    This <b>DROP</b> has just been created and is not yet ready to be minted.
                    <br />
                    <br />
                    You will have to wait for a bit.
                    <br />
                    <br />
                    Read more <b style={{ borderBottom: "1.5px solid black" }}>here.</b>
                    <br />
                    <br />
                    ☀️
                  </Style.BodyLeftSideText>
                </Style.BodyLeftSideTextContainerCenterer>
              </Style.BodyLeftSideTextContainer>
            )}

            {isStateMintable && (
              <Style.BodyLeftSideTextContainer>
                <Style.BodyLeftSideTextContainerCenterer>
                  <Style.StepTitle2>INFORMATION</Style.StepTitle2>

                  <Style.BodyLeftSideText>
                    This <b>DROP</b> is ready to be minted.
                    <br />
                    <br />
                    Get your <b>DRIP</b> right now !
                    <br />
                    <br />
                    Read more <b style={{ borderBottom: "1.5px solid black" }}>here.</b>
                    <br />
                    <br />
                    ☀️
                  </Style.BodyLeftSideText>
                </Style.BodyLeftSideTextContainerCenterer>
              </Style.BodyLeftSideTextContainer>
            )}

            {isStateStandBy && (
              <Style.BodyLeftSideTextContainer>
                <Style.BodyLeftSideTextContainerCenterer>
                  <Style.StepTitle2>INFORMATION</Style.StepTitle2>
                  <Style.BodyLeftSideText>
                    This <b>DROP</b> is in standby.
                    <br />
                    <br />
                    You can <b style={{ borderBottom: "1.5px solid black" }}>vote here</b> for the
                    collection of your choice.
                    <br />
                    <br />
                    Read more <b style={{ borderBottom: "1.5px solid black" }}>here.</b>
                    <br />
                    <br />
                    ☀️
                  </Style.BodyLeftSideText>
                </Style.BodyLeftSideTextContainerCenterer>
              </Style.BodyLeftSideTextContainer>
            )} */}

            <>
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
                        Search ...
                      </Grid>
                    </Grid>
                  </Style.SearchBar>
                </Grid>
              </Style.HeaderLeftSide>
              <Style.BodyLeftSide $connected={auth}>
                <Style.InnerLeftSide>
                  {assets && assets.length ? (
                    assets.map((collection, index1) => (
                      <div key={index1} style={{ marginBottom: "20px" }}>
                        <Style.CollectionName>{collection.collectionName}</Style.CollectionName>
                        <ImageList cols={4} gap={4}>
                          {collection.assets.map((item, index) => (
                            <ImageListItem
                              key={index}
                              style={{
                                border:
                                  currentItem &&
                                  currentItem.collection === collection.collectionName &&
                                  currentItem.id === item.id
                                    ? "3px solid #2AFE00"
                                    : "3px solid white",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                updateItem({
                                  collection: collection.collectionName,
                                  id: item.id,
                                  img: item.img,
                                });
                              }}
                            >
                              <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={"item.id"}
                                loading="lazy"
                              />
                            </ImageListItem>
                          ))}
                        </ImageList>
                      </div>
                    ))
                  ) : auth ? (
                    <Style.InnerLeftSideNoNfts>
                      {isLoading ? "Loading ..." : "You do not own any NFTs :("}
                    </Style.InnerLeftSideNoNfts>
                  ) : (
                    <Style.InnerLeftSideNoNfts>You are not connected :'(</Style.InnerLeftSideNoNfts>
                  )}
                </Style.InnerLeftSide>
              </Style.BodyLeftSide>
            </>
          </Style.LeftSide>
          <Style.LeftSideRightSide>
            <Clickable onClick={() => sceneRef.current.reset3DView()}>
              <Style.LeftSideRightSideInner>RESET 3D VIEW</Style.LeftSideRightSideInner>
            </Clickable>
          </Style.LeftSideRightSide>

          <ClickAwayListener onClickAway={() => setChecked(false)}>
            <Style.ContainerInfo $maxed={checked}>
              <Style.InnerContainerInfo $maxed={checked}>
                <div style={{ height: "50px" }}>
                  <Grid
                    container
                    spacing={0}
                    alignContent={"center"}
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <Style.ContainerTitle>DROP #{drop.id}</Style.ContainerTitle>
                    </Grid>
                    <Grid item>
                      <Clickable onClick={handleChange}>
                        <Style.CloseContainerInfo $maxed={checked}>CLOSE</Style.CloseContainerInfo>
                      </Clickable>
                    </Grid>
                  </Grid>
                </div>

                <Grid
                  container
                  spacing={1}
                  alignContent={"center"}
                  style={{ marginTop: "5px", paddingRight: "5px" }}
                >
                  {pastilles.map((pastille) => (
                    <Grid key={pastille.title} item>
                      <Tooltip title={pastille.description}>
                        <div>
                          <Pastille title={pastille.title} />
                        </div>
                      </Tooltip>
                    </Grid>
                  ))}
                  <Grid item flex={1} />
                  <Grid item>
                    <Tooltip title={"Current Supply / Max Supply"}>
                      <div>
                        <Style.MintInfo>
                          {drop.currentSupply} / {drop.maxSupply}
                        </Style.MintInfo>
                      </div>
                    </Tooltip>
                  </Grid>
                </Grid>

                <Style.ContainerPayment $maxed={checked}>
                  <Style.InnerContainerPayment>
                    <Grid container rowSpacing={2}>
                      <Grid item xs={6}>
                        <Style.MintPriceTitle>Mint price</Style.MintPriceTitle>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container alignItems="baseline" columnSpacing={1}>
                          <Grid item>
                            <img src={logoeth} style={{ width: "15px" }} alt="" />
                          </Grid>
                          <Grid item>
                            <Style.MintPrice>{formatEther(drop.price)}</Style.MintPrice>
                          </Grid>
                          <Grid item>
                            <Style.MintPriceUsd>($0)</Style.MintPriceUsd>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Clickable
                          activated={isMintable}
                          onClick={() => {
                            dispatch(mint({ address: drop._address, value: drop.price }));
                          }}
                        >
                          <Style.MintButton>MINT</Style.MintButton>
                        </Clickable>
                      </Grid>
                    </Grid>
                  </Style.InnerContainerPayment>
                </Style.ContainerPayment>

                <Style.ContainerMoreInfo $maxed={checked}>
                  <Clickable onClick={handleChange}>
                    <Style.DetailsContainer container alignItems="center" justifyContent="center">
                      <Grid item>
                        <Style.DetailsButton>DETAILS</Style.DetailsButton>
                      </Grid>
                      <Grid item>
                        <ArrowRightAltIcon style={{ fontSize: "2.5em" }} />
                      </Grid>
                    </Style.DetailsContainer>
                  </Clickable>
                </Style.ContainerMoreInfo>

                <Style.ContainerMoreInfoContent $maxed={checked}>
                  <Style.InnerContainerMoreInfoContent $maxed={checked}>
                    {"bla bla"}
                  </Style.InnerContainerMoreInfoContent>
                </Style.ContainerMoreInfoContent>

                <Style.PayContainerInfoOpen $maxed={checked}>
                  <Style.PayContainerInfoGrid container>
                    <Grid item style={{ display: "flex", alignItems: "center" }}>
                      <Grid container alignItems="baseline">
                        <Grid item>
                          <img src={logoeth} style={{ width: "15px" }} alt="" />
                        </Grid>
                        <Grid item style={{ paddingRight: "7.5px", paddingLeft: "7.5px" }}>
                          <Style.MintPrice>{formatEther(drop.price)}</Style.MintPrice>
                        </Grid>
                        <Grid item>
                          <Style.MintPriceUsd>($10000)</Style.MintPriceUsd>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item style={{ marginLeft: "20px" }}>
                      <Clickable
                        activated={isMintable}
                        onClick={() => {
                          dispatch(mint({ address: drop._address, value: drop.price }));
                        }}
                      >
                        <Style.MintButton>MINT</Style.MintButton>
                      </Clickable>
                    </Grid>
                  </Style.PayContainerInfoGrid>
                </Style.PayContainerInfoOpen>
                {/*  */}
              </Style.InnerContainerInfo>
            </Style.ContainerInfo>
          </ClickAwayListener>

          <Style.BottomBar>
            <Grid container justifyContent="center" alignItems="center" columnSpacing={1}>
              {CircleSelect(0, currentVersion, "#FFF5D5", () => setVersion(0))}
              {CircleSelect(1, currentVersion, "#A6FFDC", () => setVersion(1))}
              {CircleSelect(2, currentVersion, "#FFEEF0", () => setVersion(2))}
              {CircleSelect(3, currentVersion, "#B4FFF5", () => setVersion(3))}
              {CircleSelect(4, currentVersion, "#F5E9FD", () => setVersion(4))}
            </Grid>
          </Style.BottomBar>
        </Style.Body>

        <Style.Footer>
          <Grid container justifyContent="space-between">
            <Grid item xs={2}>
              <Grid container>
                <Grid item xs={6}>
                  <Style.Credentials>{CREDENTIALS}</Style.Credentials>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <Grid container flexDirection="row-reverse" columnSpacing={3}>
                <Grid item>
                  <Style.Version>v1.0.0-beta</Style.Version>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Style.Footer>
      </Style.Root>
    </Fade>
  );
};

export const CircleSelect = (
  version: number,
  currentVersion: number,
  color: string,
  fct: Function
) => (
  <Grid item>
    <Clickable onClick={() => fct()}>
      <Style.Circle $selected={version === currentVersion} bgcolor={color} />
    </Clickable>
  </Grid>
);

export default DropProxy;
