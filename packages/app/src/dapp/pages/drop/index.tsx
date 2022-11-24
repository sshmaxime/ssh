import React, { FC, useEffect } from "react";

import { Grid, ImageList, ImageListItem } from "@mui/material";

import { useGetDropsQuery } from "@/dapp/store/services/socket";
import SceneLoader, { sceneRef } from "@/_3d/scenes/skate_1";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Drop as DropType, NFT } from "@sshlabs/typings";

import { ethers } from "ethers";
import { Fade } from "react-awesome-reveal";
import { useParams } from "react-router-dom";

import { CREDENTIALS } from "../../../_constants";
import logoeth from "../../../_utils/assets/images/logoeth.svg";
import Clickable from "../../../_utils/components/stateless/clickable";
import Pastille from "../../../_utils/components/stateless/pastille";
import Tooltip from "../../../_utils/components/stateless/tooltip";
import { useDispatch, useSelector } from "../../store/hooks";
import { useGetAssetsQuery } from "../../store/services";
import { mint } from "../../store/services/web3";
import NotFound from "../404";
import Style from "./style";
import { useImagePreloader } from "@/_utils/hooks/imagePreloader";
import { useCState, useR3fState } from "@/_3d/utils/hooks";

const { parseEther: toEth, formatEther, formatBytes32String } = ethers.utils;

const DropProxy: FC = () => {
  const { data: drop, isLoading, isError, isSuccess } = useGetDropsQuery({});
  const dropId = Number(useParams().dropId || "-1");

  const isParamProblem = isNaN(dropId);
  const isQueryProblem = !isSuccess || isError || drop === undefined || drop[dropId] === undefined;

  if (isLoading) {
    return <></>; // TODO
  }

  if (isParamProblem || isQueryProblem) {
    return <NotFound />;
  }

  return <Drop drop={drop[dropId]} />;
};

const Drop: FC<{ drop: DropType }> = ({ drop }) => {
  const { auth, address, name } = useSelector((state) => state.web3);
  const dispatch = useDispatch();

  // fetch data
  const { data: assets, isLoading } = useGetAssetsQuery({ address: address }, { skip: !auth });

  const isMintable = drop.currentSupply !== drop.maxSupply;

  // fc state
  const [currentItem, currentItemRef, setItem] = useCState<NFT | undefined>(undefined);
  const [currentVersion, currentVersionRef, setVersion] = useCState(0);
  const [checked, setChecked] = React.useState(false);
  const [displayInfoDiv, setDisplayInfoDiv] = React.useState(false);
  const [toDisplayInfoDiv, setToDisplayInfoDiv] = React.useState<{ img: string; title: string }>();
  const handleChange = () => setChecked(!checked);

  const sceneRef = React.useRef<sceneRef>(null!);

  const updateVersion = (version: number) => {
    setVersion(version);
    if (toDisplayInfoDiv?.title === "Deck") {
      setToDisplayInfoDiv({
        title: toDisplayInfoDiv.title,
        img: drop.metadata.versions[version].texture,
      });
    }
    sceneRef.current.updateVersion(version);
  };
  //
  const updateItem = (newItem: NFT) => {
    setItem(newItem);
    if (toDisplayInfoDiv?.title === "Placeholder") {
      setToDisplayInfoDiv({
        title: toDisplayInfoDiv.title,
        img: newItem.img,
      });
    }
    sceneRef.current.updateItem(
      newItem.img,
      0,
      drop.metadata.versions[currentVersion].name,
      drop.symbol,
      newItem.symbol + " #" + newItem.id
    );
  };

  const resetItem = () => {
    setItem(undefined);
    if (toDisplayInfoDiv) {
      setToDisplayInfoDiv({
        title: toDisplayInfoDiv.title,
        img: "",
      });
    }

    sceneRef.current.updateItem(
      drop.metadata.versions[currentVersion].texture,
      0,
      drop.metadata.versions[currentVersion].name,
      "",
      ""
    );
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

  const { imagesPreloaded } = useImagePreloader(drop.metadata.versions.map((item) => item.texture));

  return (
    <Fade duration={1500} triggerOnce>
      <Style.Root>
        <Style.Header></Style.Header>

        <Style.Body>
          <Style.BodyScene>
            <SceneLoader
              sceneRef={sceneRef}
              model={drop.metadata.model}
              versions={drop.metadata.versions}
              initialVersion={0}
              initialPlaceholderTexture={""}
              initialDropSymbol={drop.symbol}
              initialTokenNameId={"-"}
              initialId={0}
              three={{
                deck: {
                  onPointerMissed: (e) => {
                    e.stopPropagation();
                    setDisplayInfoDiv(false);
                  },
                  onClick: (e) => {
                    e.stopPropagation();
                    setDisplayInfoDiv(true);

                    setToDisplayInfoDiv({
                      title: "Deck",
                      img: drop.metadata.versions[currentVersionRef.current].texture,
                    });
                  },
                },
                placeholder: {
                  onPointerMissed: (e) => {
                    e.stopPropagation();
                    setDisplayInfoDiv(false);
                  },
                  onClick: (e) => {
                    e.stopPropagation();
                    setDisplayInfoDiv(true);

                    setToDisplayInfoDiv({
                      title: "Placeholder",
                      img: currentItemRef.current?.img || "", // TODO
                    });
                  },
                },
              }}
            />
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
                                currentItem.name === collection.collectionName &&
                                currentItem.id === item.id
                                  ? "3px solid #2AFE00"
                                  : "3px solid white",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              updateItem(item);
                            }}
                          >
                            <img src={item.img} alt={"item.id"} loading="lazy" />
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
          </Style.LeftSide>
          <Style.LeftSideRightSide>
            <Clickable onClick={() => sceneRef.current.reset3DView()}>
              <Style.LeftSideRightSideInner>RESET 3D VIEW</Style.LeftSideRightSideInner>
            </Clickable>
          </Style.LeftSideRightSide>

          <Style.ContainerInfo $maxed={checked}>
            <Style.InnerContainerInfo $maxed={checked}>
              <Style.ContainerTitle>DROP #{drop.id}</Style.ContainerTitle>

              <Style.VersionName
                style={{
                  backgroundColor: drop.metadata.versions[currentVersion].color,
                  color: "black",
                  padding: "5px",
                }}
              >
                {drop.metadata.versions[currentVersion].name}
              </Style.VersionName>

              <div style={{}}>
                <Style.Mutator>
                  {currentItem ? currentItem.symbol + " #" + currentItem.id : "#"}
                </Style.Mutator>

                {currentItem ? (
                  <Style.MutatorRemove>
                    <Clickable onClick={() => resetItem()}>remove</Clickable>
                  </Style.MutatorRemove>
                ) : null}
              </div>

              <Grid
                container
                spacing={1}
                alignContent={"center"}
                style={{
                  marginBottom: "10px",
                }}
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
                  <Grid container rowSpacing={1}>
                    <Grid item xs={6}>
                      <Style.MintPriceTitle>Mint price</Style.MintPriceTitle>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container alignItems="baseline" columnSpacing={1}>
                        <Grid item>
                          <img src={logoeth} style={{ width: "12.5px" }} alt="" />
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
                          dispatch(
                            mint({
                              address: drop._address,
                              versionId: currentVersion,
                              value: drop.price,
                              nft: currentItem,
                            })
                          );
                        }}
                      >
                        <Tooltip
                          placement="left"
                          title={
                            <Style.MintInfoText>
                              {currentItem ? (
                                <span>
                                  *You are minting and mutating your DRIP with{" "}
                                  <span
                                    style={{
                                      fontWeight: 600,
                                    }}
                                  >
                                    {currentItem.symbol}#{currentItem.id}
                                  </span>
                                  . This action is irreversible.
                                </span>
                              ) : (
                                <span>
                                  *You are minting your DRIP without mutating it. Do not worry, you
                                  will be able to mutate it later on.
                                </span>
                              )}
                            </Style.MintInfoText>
                          }
                        >
                          <Style.MintButton>MINT</Style.MintButton>
                        </Tooltip>
                      </Clickable>
                    </Grid>
                  </Grid>
                </Style.InnerContainerPayment>
              </Style.ContainerPayment>

              {/*  */}
            </Style.InnerContainerInfo>
          </Style.ContainerInfo>

          <Style.BottomBar>
            <Grid container justifyContent="center" alignItems="center" style={{ height: "100%" }}>
              <Grid item style={{ height: "100%" }}>
                <Style.BottomBarContainer
                  container
                  justifyContent="center"
                  alignItems="center"
                  columnSpacing={1}
                  style={{ minWidth: "300px" }}
                >
                  <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" columnSpacing={1}>
                      {drop.metadata.versions.map((versionMetadata, index) =>
                        CircleSelect(index, currentVersion, versionMetadata.color, () =>
                          updateVersion(index)
                        )
                      )}
                    </Grid>
                  </Grid>
                  {/*  */}
                </Style.BottomBarContainer>
              </Grid>
            </Grid>
          </Style.BottomBar>

          <Style.InfoDiv $display={displayInfoDiv && toDisplayInfoDiv !== undefined}>
            <Grid container>
              <Grid item xs={12}>
                <Style.InfoDivItemName>{toDisplayInfoDiv?.title}</Style.InfoDivItemName>
              </Grid>
              <Grid item xs={12}>
                <Grid container columnSpacing={2}>
                  <Grid item xs={4}>
                    {imagesPreloaded && (
                      <img
                        style={{
                          width: "100%",
                          objectFit: toDisplayInfoDiv?.title === "Deck" ? "none" : undefined,
                          objectPosition:
                            toDisplayInfoDiv?.title === "Deck" ? "50% 11%" : undefined,
                        }}
                        src={toDisplayInfoDiv?.img}
                        alt=""
                      />
                    )}
                  </Grid>
                  <Grid item xs={8}>
                    <Style.InfoDivDescriptionContainer>
                      <Style.InfoDivDescriptionTitle>Description:</Style.InfoDivDescriptionTitle>
                    </Style.InfoDivDescriptionContainer>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Style.InfoDiv>
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
  <Grid item key={version}>
    <Clickable onClick={() => fct()}>
      <Style.Circle $selected={version === currentVersion} bgcolor={color} />
    </Clickable>
  </Grid>
);

export default DropProxy;
