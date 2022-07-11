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
  Tooltip,
} from "@mui/material";

import Style from "./style";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Fade } from "react-awesome-reveal";

import logoeth from "../../../_utils/assets/images/logoeth.svg";
import af1x_exemple from "../../../_utils/assets/images/Punk_7804.png";
import Pastille from "../../../_utils/components/stateless/pastille";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import Clickable from "../../../_utils/components/stateless/clickable";
import { useDispatch, useSelector } from "../../store/hooks";
import SceneLoader, { sceneRef } from "@/_3d/scenes/skate_1";
import { Drop as DropType } from "@sshlabs/typings";
import { useParams } from "react-router-dom";

import { useGetDropQuery, useGetAssetsForDropByAddressQuery } from "../../store/services";
import { login } from "../../store/services/web3";

import { ethers } from "ethers";

const { parseEther: toEth, formatEther, formatBytes32String } = ethers.utils;

const DropProxy: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login());
  });

  const dropId = parseInt(useParams().dropId || "-1");

  const { data: drop } = useGetDropQuery({ dropId: dropId });
  if (drop === undefined) {
    return <DropNotFound />;
  }

  return <Drop drop={drop} />;
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
  Sublimes: "/models/skate/textures/sublime-deck.png",
  Isotile: "/models/skate/textures/isotile-deck.png",
};

const Drop: FC<{ drop: DropType }> = ({ drop }) => {
  const { auth, address } = useSelector((state) => state.web3);
  console.log(drop);
  // fetch data
  const { data: assets } = useGetAssetsForDropByAddressQuery(
    { dropId: drop.id, address: address },
    { skip: !auth }
  );
  //

  // fc state
  const [currentItem, setItem] = React.useState<{ collection: string; id: number; img: string }>();
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => setChecked(!checked);

  const sceneRef = React.useRef<sceneRef>(null!);

  const updateItem = (newItem: any) => {
    setItem(newItem);

    sceneRef.current.changeTexturePlaceholder(newItem.img);

    if (!currentItem || currentItem.collection !== newItem.collection) {
      sceneRef.current.changeTextureDeck(Deck[newItem.collection]);
    }
  };

  return (
    <Fade duration={1500} triggerOnce>
      <Style.Root>
        <Style.Header></Style.Header>
        <Style.Body>
          <SceneLoader ref={sceneRef} _id={currentItem ? currentItem.id : 0} />
          <Style.LeftSide>
            <Style.HeaderLeftSide container spacing={0} alignItems="center">
              <Grid item xs={6}>
                <Style.StepTitle>SELECT YOUR NFT</Style.StepTitle>
              </Grid>

              {/* <Grid item xs={1}>
                <FilterListIcon />
              </Grid> */}

              {/* <Grid item xs={5}>
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
              </Grid> */}
            </Style.HeaderLeftSide>
            {/*  */}
            <Style.BodyLeftSide $connected={auth}>
              {/*  */}

              <Style.InnerLeftSide>
                {assets && assets.length ? (
                  assets.map((collection, index1) => (
                    <div key={index1}>
                      <Style.CollectionName>{collection.collectionName}</Style.CollectionName>
                      <ImageList cols={4} gap={4} style={{ marginBottom: "20px" }}>
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
                  <Style.InnerLeftSideNoNfts>You do not own any NFTs :'(</Style.InnerLeftSideNoNfts>
                ) : (
                  <Style.InnerLeftSideNoNfts>You are not connected :'(</Style.InnerLeftSideNoNfts>
                )}
              </Style.InnerLeftSide>
            </Style.BodyLeftSide>
          </Style.LeftSide>

          <ClickAwayListener onClickAway={() => setChecked(false)}>
            <Style.ContainerInfo $maxed={checked}>
              <Style.InnerContainerInfo $maxed={checked}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Style.ContainerTitle>DROP #{drop.id}</Style.ContainerTitle>
                  </Grid>
                  <Grid item>
                    <Clickable onClick={handleChange}>
                      <Style.CloseContainerInfo $maxed={checked}>CLOSE</Style.CloseContainerInfo>
                    </Clickable>
                  </Grid>
                </Grid>
                <Style.ContainerPayment $maxed={checked}>
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
                            <Style.MintPrice>{formatEther(drop.price)}</Style.MintPrice>
                          </Grid>
                          {/* <Grid item>
                            <Style.MintPriceUsd>($200.87)</Style.MintPriceUsd>
                          </Grid> */}
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Clickable onClick={() => {}}>
                          <Style.MintButton>MINT</Style.MintButton>
                        </Clickable>
                      </Grid>
                    </Grid>
                  </Style.InnerContainerPayment>
                </Style.ContainerPayment>
                <Clickable onClick={handleChange}>
                  <Style.ContainerMoreInfo $maxed={checked}>
                    <Style.DetailsContainer container alignItems="center" justifyContent="center">
                      <Grid item>DETAILS</Grid>
                      <Grid item>
                        <ArrowRightAltIcon style={{ fontSize: "2.5em" }} />
                      </Grid>
                    </Style.DetailsContainer>
                  </Style.ContainerMoreInfo>
                </Clickable>

                <Style.ContainerMoreInfoContent $maxed={checked}>
                  <Style.InnerContainerMoreInfoContent $maxed={checked}>
                    Hello
                  </Style.InnerContainerMoreInfoContent>
                </Style.ContainerMoreInfoContent>
              </Style.InnerContainerInfo>
            </Style.ContainerInfo>
          </ClickAwayListener>
        </Style.Body>
        <Style.Footer></Style.Footer>
      </Style.Root>
    </Fade>
  );
};

export default DropProxy;
