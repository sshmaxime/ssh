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
import { Drop as DropType, STATUS } from "@sshlabs/typings";
import { useParams } from "react-router-dom";
import { CREDENTIALS } from "../../../_constants";

import { useGetDropQuery, useGetAssetsForDropByAddressQuery } from "../../store/services";
import { login, mint } from "../../store/services/web3";

import { ethers } from "ethers";

const { parseEther: toEth, formatEther, formatBytes32String } = ethers.utils;

const DropProxy: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login());
  });

  const dropId = parseInt(useParams().dropId || "-1");

  const { data: drop, isLoading } = useGetDropQuery({ dropId: dropId });
  if (isLoading) {
    return <>Loaading ...</>;
  }

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
  Sublimes: "/models/skate/textures/sublimes-deck.png",
  Isotile: "/models/skate/textures/isotile-deck.png",
};

const Drop: FC<{ drop: DropType }> = ({ drop }) => {
  const { auth, address } = useSelector((state) => state.web3);
  const dispatch = useDispatch();

  // fetch data
  const { data: assets, isLoading } = useGetAssetsForDropByAddressQuery(
    { dropId: drop.id, address: address },
    { skip: !auth }
  );

  const isMintable = drop.status === STATUS.MINTABLE && drop.currentSupply !== drop.maxSupply;
  const isStateCustomizable = drop.status === STATUS.CUSTOMIZABLE;
  const isStateCreated = drop.status === STATUS.CREATED;
  const isStateMintable = drop.status === STATUS.MINTABLE;
  const isStateStandBy = drop.status === STATUS.STANDBY;

  // fc state
  const [currentItem, setItem] = React.useState<{ collection: string; id: number; img: string }>();
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => setChecked(!checked);

  const sceneRef = React.useRef<sceneRef>(null!);

  const updateItem = (newItem: any) => {
    setItem(newItem);

    if (Deck[newItem.collection]) {
      sceneRef.current.changeTexturePlaceholder(newItem.img);
      sceneRef.current.changeTextureDeck(Deck[newItem.collection]);
    } else {
      sceneRef.current.reset();
    }
  };

  const pastilles = [
    {
      title: "KEY",
      description: "Minting this NFT gives you a free SSH Key.",
    },
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
          <SceneLoader ref={sceneRef} _id={currentItem ? currentItem.id : 0} />
          <Style.LeftSide>
            <Style.RealHeader>
              <Grid container spacing={0} flexDirection="column">
                <Grid item xs={12}>
                  <Style.HeaderFirstLeftSideTitle>
                    Hello, <b style={{ borderBottom: "3px solid black" }}>alpha.eth</b> ☀️
                  </Style.HeaderFirstLeftSideTitle>
                </Grid>
                {/*  */}
                <Grid item xs={12}>
                  <Style.CommandsContainer container>
                    <Grid item xs={12}>
                      <Style.CommandsText>
                        <Style.StepTitle>QUICK COMMANDS:</Style.StepTitle>
                      </Style.CommandsText>
                    </Grid>
                    <Grid item>
                      <Style.Commands container>
                        <Style.CommandItem item bgcolor="#dfe7fd">
                          Hello
                        </Style.CommandItem>
                        {/* 
                      <Style.CommandItem item bgcolor="#e2ece9">
                        Hello
                      </Style.CommandItem>
                      <Style.CommandItem $last item bgcolor="#fff1e6">
                        Hello
                      </Style.CommandItem> */}
                      </Style.Commands>
                    </Grid>
                  </Style.CommandsContainer>
                </Grid>
              </Grid>
            </Style.RealHeader>

            {isStateCreated && (
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
            )}

            {isStateCustomizable && (
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
                      <Style.InnerLeftSideNoNfts>
                        You are not connected :'(
                      </Style.InnerLeftSideNoNfts>
                    )}
                  </Style.InnerLeftSide>
                </Style.BodyLeftSide>
              </>
            )}
          </Style.LeftSide>

          <ClickAwayListener onClickAway={() => setChecked(false)}>
            <Style.ContainerInfo $maxed={checked}>
              <Style.InnerContainerInfo $maxed={checked}>
                <div style={{ height: "30px" }}>
                  <Grid
                    container
                    spacing={0}
                    alignContent={"center"}
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <Tooltip title="Status of the DROP.">
                        <Pastille secondary bgcolor="#fad2e1" small title={drop.status} />
                      </Tooltip>
                    </Grid>
                    <Grid item>
                      <Clickable onClick={handleChange}>
                        <Style.CloseContainerInfo $maxed={checked}>CLOSE</Style.CloseContainerInfo>
                      </Clickable>
                    </Grid>
                  </Grid>
                </div>

                <Grid container justifyContent="space-between" style={{ paddingRight: "5px" }}>
                  <Grid item>
                    <Style.ContainerTitle>DROP #{drop.id}</Style.ContainerTitle>
                  </Grid>
                </Grid>

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
                      <Grid item>DETAILS</Grid>
                      <Grid item>
                        <ArrowRightAltIcon style={{ fontSize: "2.5em" }} />
                      </Grid>
                    </Style.DetailsContainer>
                  </Clickable>
                </Style.ContainerMoreInfo>

                <Style.ContainerMoreInfoContent $maxed={checked}>
                  <Style.InnerContainerMoreInfoContent $maxed={checked}>
                    {isStateCustomizable && (
                      <Style.EligibleCollection $maxed={checked}>
                        <Style.EligibleCollectionTitle>
                          COLLECTIONS ELIGIBLE :
                        </Style.EligibleCollectionTitle>
                        <Grid container spacing={1} style={{ paddingLeft: "5px" }}>
                          {assets &&
                            assets.map((collection) => (
                              <Grid item>
                                <Style.CollectionName>
                                  {collection.collectionName}
                                </Style.CollectionName>
                              </Grid>
                            ))}
                        </Grid>
                      </Style.EligibleCollection>
                    )}
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
            <Grid item xs={8}>
              <Grid container justifyContent="center" columnSpacing={1}>
                <Grid item xs={1}>
                  <Style.BottomLinks>Docs</Style.BottomLinks>
                </Grid>
                <Grid item xs={1}>
                  <Style.BottomLinks>FAQs</Style.BottomLinks>
                </Grid>
                <Grid item xs={1}>
                  <Style.BottomLinks>OpenSea</Style.BottomLinks>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Grid container flexDirection="row-reverse">
                <Grid item xs={6}>
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

export default DropProxy;
