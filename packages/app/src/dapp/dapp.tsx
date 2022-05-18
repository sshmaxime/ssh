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

import logoeth from "../_utils/assets/images/logoeth.svg";
import af1x_exemple from "../_utils/assets/images/Punk_7804.png";
import Pastille from "../_utils/components/stateless/pastille";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import Clickable from "../_utils/components/stateless/clickable";
import { useDispatch, useSelector } from "./store/hooks";
import SceneLoader from "@/_3d/scenes/skate_1";
import { getAssetsOwned } from "./store/actions/app.actions";

const pastilles = [
  {
    title: "KEY",
    description: "Minting this NFT gives your a free SSH-KEY.",
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
    title: "0 / 100",
    description: "Minted supply / Total supply",
  },
];

const Drop: FC<{ dropId: number }> = ({ dropId }) => {
  // store
  const dispatch = useDispatch();
  const { auth, wallet } = useSelector((state) => state.appState);

  // fc state
  const [currentItem, setItem] = React.useState<{ collection: string; id: number; img: string }>();
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => setChecked(!checked);

  useEffect(() => {
    if (auth.signedIn) {
      dispatch(getAssetsOwned(dropId, auth.address));
    }
  }, [auth.signedIn]);

  const deckTexture = "/models/skate/textures/sublime-deck.png";
  const placeholderTexture = "/models/skate/textures/imgForMiddle.png";

  return (
    <Fade duration={1500} triggerOnce>
      <Style.Root>
        <Style.Header></Style.Header>
        <Style.Body>
          <SceneLoader
            deckTexture={deckTexture}
            placeholderTexture={currentItem?.img || placeholderTexture}
            _id={1}
          />
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
            {/*  */}
            <Style.BodyLeftSide connected={auth.signedIn}>
              {/*  */}
              <Style.InnerLeftSide>
                {wallet.nfts.length ? (
                  wallet.nfts.map((collection, index1) => (
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
                              setItem({
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
                ) : auth.signedIn ? (
                  <Style.InnerLeftSideNoNfts>You do not own any NFTs :'(</Style.InnerLeftSideNoNfts>
                ) : (
                  <Style.InnerLeftSideNoNfts>You are not connected :'(</Style.InnerLeftSideNoNfts>
                )}
              </Style.InnerLeftSide>
            </Style.BodyLeftSide>
          </Style.LeftSide>

          <ClickAwayListener onClickAway={() => setChecked(false)}>
            <Style.ContainerInfo maxed={checked}>
              <Style.InnerContainerInfo maxed={checked}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Style.ContainerTitle>DROP #1</Style.ContainerTitle>
                  </Grid>
                  <Grid item>
                    <Clickable onClick={handleChange}>
                      <Style.CloseContainerInfo maxed={checked}>CLOSE</Style.CloseContainerInfo>
                    </Clickable>
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignContent={"center"} style={{ marginTop: "5px" }}>
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
                        <Clickable onClick={() => {}}>
                          <Style.MintButton>MINT</Style.MintButton>
                        </Clickable>
                      </Grid>
                    </Grid>
                  </Style.InnerContainerPayment>
                </Style.ContainerPayment>
                <Clickable onClick={handleChange}>
                  <Style.ContainerMoreInfo maxed={checked}>
                    <Style.DetailsContainer container alignItems="center" justifyContent="center">
                      <Grid item>DETAILS</Grid>
                      <Grid item>
                        <ArrowRightAltIcon style={{ fontSize: "2.5em" }} />
                      </Grid>
                    </Style.DetailsContainer>
                  </Style.ContainerMoreInfo>
                </Clickable>

                <Style.ContainerMoreInfoContent maxed={checked}>
                  <Style.InnerContainerMoreInfoContent maxed={checked}>
                    <Grid container spacing={2} justifyContent="space-between">
                      <Grid item xs={9}>
                        Hello
                      </Grid>

                      <Grid item xs={3}>
                        <img src={af1x_exemple} style={{ width: "100%" }} alt="" />
                      </Grid>
                      <Grid item xs={9}>
                        Hello
                      </Grid>

                      <Grid item xs={3}>
                        <img src={af1x_exemple} style={{ width: "100%" }} alt="" />
                      </Grid>
                      <Grid item xs={9}>
                        Hello
                      </Grid>
                    </Grid>
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

export default Drop;
