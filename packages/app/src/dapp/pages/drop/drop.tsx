import React, { FC, useEffect, useState } from "react";

import { Box, Grid, ImageList, ImageListItem, Modal } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import OpenSeaIcon from "../../../_utils/assets/icons/opensea.svg";
import EtherscanIcon from "../../../_utils/assets/icons/etherscan.svg";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useGetDropsQuery } from "@/dapp/store/services/socket";
import SceneLoader, { sceneRef, sceneRefType } from "@/_3d/scenes/skate_1";
import SceneLoader2 from "@/_3d/scenes/skate_2";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Drop as DropType, NFT } from "@sshlabs/typings";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { ethers } from "ethers";
import { Fade } from "react-awesome-reveal";
import { useParams } from "react-router-dom";

import { CREDENTIALS } from "../../../_constants";
import logoeth from "../../../_utils/assets/images/logoeth.svg";
import Clickable from "../../../_utils/components/clickable";
import Pastille from "../../../_utils/components/pastille";
import Tooltip from "../../../_utils/components/tooltip";
import { useDispatch, useSelector } from "../../store/hooks";
import { useGetAssetsQuery } from "../../store/services";
import {
  mint,
  mintDefault,
  mutate,
  resetMintingProcess,
  waitMintDefault,
} from "../../store/services/web3";
import NotFound from "../404";
import Style from "./style";
import { useImagePreloader } from "@/_utils/hooks/imagePreloader";
import { useCState, useR3fState } from "@/_3d/utils/hooks";
import CenterItem from "@/_utils/components/grid/centerItem";
import { env } from "process";

const { parseEther: toEth, formatEther, formatBytes32String } = ethers.utils;
const { AddressZero } = ethers.constants;

const Drop: FC<{ drop: DropType; sceneRef: sceneRefType }> = ({ drop, sceneRef }) => {
  const { auth, address, name, txProcess } = useSelector((state) => state.web3);
  const dispatch = useDispatch();

  // fetch data
  const { data: assets, isLoading } = useGetAssetsQuery({ address: address }, { skip: !auth });

  const isMintable = drop.currentSupply !== drop.maxSupply;

  const zeroItem: NFT = {
    address: AddressZero,
    img: "/zeroItem.png",
    id: 0,
    name: "",
    symbol: "",
  };

  const defaultItem: NFT = {
    address: drop.defaultItem.address,
    img: drop.defaultItem.img,
    id: 0,
    name: drop.defaultItem.name,
    symbol: drop.defaultItem.symbol,
  };

  // fc state
  const [currentItem, , setItem] = useCState<NFT>(defaultItem);
  const [currentVersion, , setVersion] = useCState(0);

  const isDefaultItem = currentItem.address === defaultItem.address;
  const isZeroItem = currentItem.address === zeroItem.address;

  const sceneRefMint = React.useRef<sceneRef>(null!);

  useEffect(() => {}, [isDefaultItem, isZeroItem, txProcess]);

  const updateVersion = (version: number) => {
    setVersion(version);
    sceneRef.current.updateVersion(
      0,
      version,
      drop.symbol,
      currentItem.name + " #" + currentItem.id
    );
  };
  //
  const updateItem = (newItem: NFT) => {
    setItem(newItem);
    sceneRef.current.updateItem(
      newItem.img,
      0,
      currentVersion,
      drop.symbol,
      newItem.name + " #" + newItem.id
    );
  };

  const resetItem = () => {
    const resetToItem = isDefaultItem ? zeroItem : defaultItem;

    setItem(resetToItem);
    sceneRef.current.updateItem(
      resetToItem.img,
      0,
      currentVersion,
      drop.symbol,
      resetToItem.name + " #" + resetToItem.id
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

  const [hover, setHover] = useState(0);
  const { imagesPreloaded } = useImagePreloader(drop.metadata.versions.map((item) => item.texture));

  const [isMinting, setIsMinting] = React.useState(false);

  // Drip
  const isDripMinted = txProcess.mintingDrip.id !== undefined;

  const isDefaultMinted = txProcess.mintingDefault.done;

  // Mutation
  const isMutated = txProcess.mutating.done;

  const modalActions = [
    {
      isDisplay: true,
      isMyTurn: !isDripMinted && !isMutated,
      stepName: "MINT",
      text: (
        <Style.TextModal>
          Let's mint your <b>Drip</b>.
        </Style.TextModal>
      ),
      isLoading: txProcess.mintingDrip.loading,
      isDone: txProcess.mintingDrip.done,
      tx: txProcess.mintingDrip.tx,
      price: formatEther(drop.price),
      action: {
        name: "MINT",
        fct: () => {
          dispatch(
            mint({
              address: drop.address,
              versionId: currentVersion,
              value: drop.price,
              nft: currentItem,
            })
          );
        },
      },
    },

    ...(isDefaultItem
      ? [
          {
            isDisplay: txProcess.mintingDrip.done,
            isMyTurn: isDripMinted && !isDefaultMinted && !isMutated,
            stepName: "DEFAULT ITEM",
            text: (
              <Style.TextModal>
                You are almost there, now let's mint your <b>{defaultItem.symbol}</b>.
              </Style.TextModal>
            ),
            isLoading: txProcess.mintingDefault.loading,
            isDone: txProcess.mintingDefault.done,
            tx: txProcess.mintingDefault.tx,
            price: drop.defaultItem.price,
            action: {
              name: "MINT DEFAULT ITEM",
              fct: () => {
                dispatch(
                  mintDefault({
                    address: drop.defaultItem.address,
                    value: drop.defaultItem.price,
                  })
                );
              },
            },
          },
        ]
      : []),

    ...(!isZeroItem
      ? [
          {
            isDisplay: isDefaultItem ? txProcess.mintingDefault.done : txProcess.mintingDrip.done,
            isMyTurn: isDefaultItem
              ? isDripMinted && isDefaultMinted && !isMutated
              : isDripMinted && !isMutated,
            stepName: "MUTATE",
            text: (
              <Style.TextModal>
                Last step, mutating your <b>Drip</b> with your{" "}
                <b>
                  {currentItem.symbol}#
                  {isDefaultItem ? txProcess.mintingDefault?.id : currentItem.id}
                </b>{" "}
                !
              </Style.TextModal>
            ),
            isLoading: txProcess.mutating.loading,
            isDone: txProcess.mutating.done,
            tx: txProcess.mutating.tx,
            price: "FREE",
            action: {
              name: "MUTATE",
              fct: () => {
                dispatch(
                  mutate({
                    address: drop.address,
                    tokenId: txProcess.mintingDrip?.id as number,
                    contractMutator: isDefaultItem ? defaultItem.address : currentItem.address,
                    tokenIdMutator: isDefaultItem
                      ? (txProcess.mintingDefault?.id as number)
                      : currentItem.id,
                  })
                );
              },
            },
          },
        ]
      : []),
  ];

  return (
    <>
      <Style.Todo container justifyContent="space-between" columns={50}>
        <Grid item xs={12} style={{ zIndex: 10, height: "100%" }}>
          {isMinting ? (
            <Style.ModelBox>
              <Grid container rowSpacing={0} flexWrap="wrap">
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item flexGrow={1}>
                      <Style.ModalTitle>DROP #{drop.id}</Style.ModalTitle>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  {modalActions.map((step, index) => (
                    <Style.Step
                      key={index}
                      style={{
                        marginBottom: "10px",
                      }}
                    >
                      <Grid
                        container
                        justifyContent="space-between"
                        style={{
                          marginBottom: "15px",
                          opacity: step.isDone || step.isMyTurn ? 1 : 0.1,
                        }}
                      >
                        <CenterItem item>
                          <Style.TitleStepModal>{step.stepName}</Style.TitleStepModal>
                        </CenterItem>
                        <CenterItem item style={{ minHeight: "20px" }}>
                          {step.isLoading && <span className="loaderMini2" />}
                          {step.isDone && (
                            <CheckCircleOutlineIcon
                              style={{ color: "#1EC500", width: "17.5px", height: "17.5px" }}
                            />
                          )}
                        </CenterItem>
                      </Grid>
                      <Grid
                        container
                        style={{
                          opacity: step.isDone || step.isMyTurn ? 1 : 0.1,
                        }}
                      >
                        <Grid item xs={10}>
                          {step.text}
                        </Grid>
                        <Grid item flexGrow={1} />
                        {(step.isLoading || step.isDone) && (
                          <Grid item>
                            <Grid container columnSpacing={0.5}>
                              <CenterItem item>
                                <Clickable
                                  onClick={() => navigator.clipboard.writeText(step.tx as string)}
                                >
                                  <ContentCopyIcon style={{ width: "14.5px" }} />
                                </Clickable>
                              </CenterItem>
                              <CenterItem item>
                                <Clickable address={`https://etherscan.io/tx/${step.tx}`}>
                                  <img src={EtherscanIcon} style={{ width: "16.5px" }} alt="" />
                                </Clickable>
                              </CenterItem>
                            </Grid>
                          </Grid>
                        )}
                      </Grid>
                    </Style.Step>
                  ))}
                </Grid>

                {!modalActions[modalActions.length - 1].isDone && (
                  <Style.GridPricePortal item style={{ marginRight: "10px" }} xs={2}>
                    <Grid container alignContent="space-around" style={{ height: "100%" }}>
                      {modalActions.map(
                        (item, index) =>
                          item.isMyTurn && (
                            <React.Fragment key={index}>
                              <Grid item xs={12}>
                                <Style.MintPriceTitle>Price</Style.MintPriceTitle>
                              </Grid>
                              <Grid item xs={12}>
                                <Grid container columnSpacing={1}>
                                  <Grid item>
                                    <img src={logoeth} style={{ width: "12.5px" }} alt="" />
                                  </Grid>
                                  <Grid item>
                                    <Style.MintPrice>{item.price}</Style.MintPrice>
                                  </Grid>
                                  {/* <Grid item>
                             <Style.MintPriceUsd>($0)</Style.MintPriceUsd>
                           </Grid> */}
                                </Grid>
                              </Grid>
                            </React.Fragment>
                          )
                      )}
                      {modalActions[modalActions.length - 1].isDone && <>Thanks</>}
                    </Grid>
                  </Style.GridPricePortal>
                )}

                <Grid
                  item
                  flexGrow={1}
                  style={{
                    display: "flex",
                    flex: 1,
                    alignItems: "end",
                    transition: "all .5s ease-in-out",
                  }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      <Grid container direction="row-reverse">
                        <Grid item>
                          <Clickable address={`/app/drop/${drop.id}/${txProcess.mintingDrip.id}`}>
                            <Style.FinalStep2
                              $display={modalActions[modalActions.length - 1].isDone}
                            >
                              View
                            </Style.FinalStep2>
                          </Clickable>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      {modalActions.map(
                        (item, index) =>
                          item.isMyTurn && (
                            <Clickable key={index} onClick={item.action.fct}>
                              <Style.MintButton>{item.action.name}</Style.MintButton>
                            </Clickable>
                          )
                      )}

                      {modalActions[modalActions.length - 1].isDone && (
                        <Style.FinalStep>All done ! Thanks for your support 🎉</Style.FinalStep>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Style.ModelBox>
          ) : (
            <Style.LeftSide>
              <Grid container direction="column" style={{ height: "100%" }}>
                <Grid item>
                  <Style.HeaderFirstLeftSideTitle>
                    Hello
                    <b style={{ borderBottom: "2px solid black", marginLeft: "8px" }}>{name}</b>,
                  </Style.HeaderFirstLeftSideTitle>
                </Grid>

                <Grid item>
                  <Style.HeaderLeftSide container alignItems="center">
                    <Grid item flexGrow={1}>
                      <Style.StepTitle>SELECT YOUR NFT</Style.StepTitle>
                    </Grid>
                  </Style.HeaderLeftSide>
                </Grid>

                <Grid item flexGrow={1}>
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
                        <Style.InnerLeftSideNoNfts>
                          You are not connected :'(
                        </Style.InnerLeftSideNoNfts>
                      )}
                    </Style.InnerLeftSide>
                  </Style.BodyLeftSide>
                </Grid>
              </Grid>
            </Style.LeftSide>
          )}
        </Grid>
        <Grid item xs={9} style={{ zIndex: 10 }}>
          <Grid
            container
            direction="column"
            style={{ height: "100%", borderBottom: "1.5px solid lightgrey" }}
            justifyContent="space-between"
          >
            {!isMinting && (
              <Grid item>
                <Style.InfoDiv>
                  <Grid container>
                    <Grid item xs={12}>
                      <Style.InfoDivItemName>PLACEHOLDER</Style.InfoDivItemName>
                    </Grid>
                    <Grid item xs={12}>
                      {imagesPreloaded && (
                        <img
                          style={{
                            width: "100%",
                            borderRadius: "15px",
                          }}
                          src={currentItem?.img}
                          alt=""
                        />
                      )}
                    </Grid>

                    <Grid item xs={12}>
                      <Grid
                        container
                        alignItems="center"
                        style={{
                          marginTop: "5px",
                        }}
                      >
                        <Grid item>
                          <Style.MoreInfoSymbol>
                            {currentItem.symbol} #{currentItem.id}
                          </Style.MoreInfoSymbol>
                        </Grid>

                        <Grid item>
                          {isDefaultItem ? <Style.DefaultItem>DEFAULT</Style.DefaultItem> : null}
                          {isZeroItem ? <Style.DefaultItem>NONE</Style.DefaultItem> : null}
                        </Grid>

                        <Grid item flexGrow={1} style={{ height: "20px" }}>
                          <Grid container direction="row-reverse">
                            {currentItem.address !== defaultItem.address ? (
                              <Grid item>
                                <Style.MutatorRemove>
                                  <Clickable onClick={() => resetItem()}>BACK TO DEFAULT</Clickable>
                                </Style.MutatorRemove>
                              </Grid>
                            ) : currentItem.address !== zeroItem.address ? (
                              <Grid item>
                                <Style.MutatorRemove>
                                  <Clickable onClick={() => resetItem()}>REMOVE DEFAULT</Clickable>
                                </Style.MutatorRemove>
                              </Grid>
                            ) : null}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} style={{ marginTop: "5px", height: "20px" }}>
                      <Grid container spacing={0.5}>
                        <Grid item>
                          <Clickable
                            activated={!(currentItem.address === defaultItem.address)}
                            address="https://twitter.com/sshlabs_"
                          >
                            <img src={OpenSeaIcon} style={{ width: "16.5px" }} alt="" />
                          </Clickable>
                        </Grid>
                        <Grid item>
                          <Clickable
                            activated={!(currentItem.address === defaultItem.address)}
                            address="https://twitter.com/sshlabs_"
                          >
                            <img src={EtherscanIcon} style={{ width: "16.5px" }} alt="" />
                          </Clickable>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      marginTop: "15px",
                      paddingTop: "15px",
                      borderTop: "1.5px solid lightgrey",
                    }}
                  >
                    <Style.InfoDivItemName>DECK</Style.InfoDivItemName>
                  </Grid>

                  <Grid item>
                    <Style.BottomBar>
                      <Style.BottomBarContainer
                        container
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid item xs={12}>
                          <Style.GalleryWrap>
                            {drop.metadata.versions.map((item, index) => (
                              <Style.GalleryItem
                                key={index}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(currentVersion)}
                                onClick={() => updateVersion(index)}
                                $onHover={hover === index}
                                color={item.texture}
                                style={{
                                  height: "50px",
                                  borderRadius: "5px",
                                }}
                              />
                            ))}
                          </Style.GalleryWrap>
                        </Grid>
                      </Style.BottomBarContainer>
                    </Style.BottomBar>
                  </Grid>
                </Style.InfoDiv>
              </Grid>
            )}

            <Grid item>
              <div
                style={{
                  marginTop: !isMinting ? "15px" : "0px",
                  paddingTop: !isMinting ? "15px" : "0px",
                }}
              />
              <Style.ContainerInfo>
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

                {/* <Grid
                    container
                    alignItems="center"
                    style={{
                      marginBottom: "10px",
                      padding: "2.5px",
                    }}
                  >
                    <Grid item>
                      <Style.Mutator>
                        {currentItem ? currentItem.symbol + " #" + currentItem.id : "#"}
                      </Style.Mutator>
                    </Grid>

                    <Grid item>
                      {currentItem.address !== "" ? (
                        <Style.MutatorRemove>
                          <Clickable onClick={() => resetItem()}>REMOVE</Clickable>
                        </Style.MutatorRemove>
                      ) : (
                        <></>
                      )}
                    </Grid>
                  </Grid> */}

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

                {isMinting && (
                  <Style.ModelBox>
                    <Grid container rowSpacing={0} flexWrap="wrap">
                      <Grid item xs={12}>
                        <Grid container>
                          <Grid item flexGrow={1}>
                            <Style.ModalTitle>DROP #{drop.id}</Style.ModalTitle>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item xs={12}>
                        {modalActions.map((step, index) => (
                          <Style.Step
                            key={index}
                            style={{
                              marginBottom: "10px",
                            }}
                          >
                            <Grid
                              container
                              justifyContent="space-between"
                              style={{
                                marginBottom: "15px",
                                opacity: step.isDone || step.isMyTurn ? 1 : 0.1,
                              }}
                            >
                              <CenterItem item>
                                <Style.TitleStepModal>{step.stepName}</Style.TitleStepModal>
                              </CenterItem>
                              <CenterItem item style={{ minHeight: "20px" }}>
                                {step.isLoading && <span className="loaderMini2" />}
                                {step.isDone && (
                                  <CheckCircleOutlineIcon
                                    style={{ color: "#1EC500", width: "17.5px", height: "17.5px" }}
                                  />
                                )}
                              </CenterItem>
                            </Grid>
                            <Grid
                              container
                              style={{
                                opacity: step.isDone || step.isMyTurn ? 1 : 0.1,
                              }}
                            >
                              <Grid item xs={10}>
                                {step.text}
                              </Grid>
                              <Grid item flexGrow={1} />
                              {(step.isLoading || step.isDone) && (
                                <Grid item>
                                  <Grid container columnSpacing={0.5}>
                                    <CenterItem item>
                                      <Clickable
                                        onClick={() =>
                                          navigator.clipboard.writeText(step.tx as string)
                                        }
                                      >
                                        <ContentCopyIcon style={{ width: "14.5px" }} />
                                      </Clickable>
                                    </CenterItem>
                                    <CenterItem item>
                                      <Clickable address={`https://etherscan.io/tx/${step.tx}`}>
                                        <img
                                          src={EtherscanIcon}
                                          style={{ width: "16.5px" }}
                                          alt=""
                                        />
                                      </Clickable>
                                    </CenterItem>
                                  </Grid>
                                </Grid>
                              )}
                            </Grid>
                          </Style.Step>
                        ))}
                      </Grid>

                      {!modalActions[modalActions.length - 1].isDone && (
                        <Style.GridPricePortal item style={{ marginRight: "10px" }} xs={2}>
                          <Grid container alignContent="space-around" style={{ height: "100%" }}>
                            {modalActions.map(
                              (item, index) =>
                                item.isMyTurn && (
                                  <React.Fragment key={index}>
                                    <Grid item xs={12}>
                                      <Style.MintPriceTitle>Price</Style.MintPriceTitle>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <Grid container columnSpacing={1}>
                                        <Grid item>
                                          <img src={logoeth} style={{ width: "12.5px" }} alt="" />
                                        </Grid>
                                        <Grid item>
                                          <Style.MintPrice>{item.price}</Style.MintPrice>
                                        </Grid>
                                        {/* <Grid item>
                             <Style.MintPriceUsd>($0)</Style.MintPriceUsd>
                           </Grid> */}
                                      </Grid>
                                    </Grid>
                                  </React.Fragment>
                                )
                            )}
                            {modalActions[modalActions.length - 1].isDone && <>Thanks</>}
                          </Grid>
                        </Style.GridPricePortal>
                      )}

                      <Grid
                        item
                        flexGrow={1}
                        style={{
                          display: "flex",
                          flex: 1,
                          alignItems: "end",
                          transition: "all .5s ease-in-out",
                        }}
                      >
                        <Grid container>
                          <Grid item xs={12}>
                            <Grid container direction="row-reverse">
                              <Grid item>
                                <Clickable
                                  address={`/app/drop/${drop.id}/${txProcess.mintingDrip.id}`}
                                >
                                  <Style.FinalStep2
                                    $display={modalActions[modalActions.length - 1].isDone}
                                  >
                                    View
                                  </Style.FinalStep2>
                                </Clickable>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12}>
                            {modalActions.map(
                              (item, index) =>
                                item.isMyTurn && (
                                  <Clickable key={index} onClick={item.action.fct}>
                                    <Style.MintButton>{item.action.name}</Style.MintButton>
                                  </Clickable>
                                )
                            )}

                            {modalActions[modalActions.length - 1].isDone && (
                              <Style.FinalStep>
                                All done ! Thanks for your support 🎉
                              </Style.FinalStep>
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Style.ModelBox>
                )}

                <Style.ContainerPayment>
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
                          {/* <Grid item>
                              <Style.MintPriceUsd>($0)</Style.MintPriceUsd>
                            </Grid> */}
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Clickable
                          activated={isMintable}
                          onClick={() => {
                            setIsMinting(true);
                            dispatch(resetMintingProcess());
                          }}
                        >
                          <Style.MintButton>MINT</Style.MintButton>
                        </Clickable>
                      </Grid>
                    </Grid>
                  </Style.InnerContainerPayment>
                </Style.ContainerPayment>
              </Style.ContainerInfo>
            </Grid>
          </Grid>
        </Grid>
      </Style.Todo>

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
    </>
  );
};

export default Drop;
