import React, { FC, useEffect, useState } from "react";

import { sceneRefType } from "@/_3d/scenes/skate_1";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Grid, ImageList, ImageListItem, Modal } from "@mui/material";
import { Drip, Drop, NFT } from "@sshlabs/typings";
import { ethers } from "ethers";

import EtherscanIcon from "@/_utils/assets/icons/etherscan.svg";
import OpenSeaIcon from "@/_utils/assets/icons/opensea.svg";

import { useCState } from "@/_3d/utils/hooks";
import CenterItem from "@/_utils/components/grid/centerItem";
import { useImagePreloader } from "@/_utils/hooks/imagePreloader";
import logoeth from "@/_utils/assets/images/logoeth.svg";
import Clickable from "@/_utils/components/clickable";
import Pastille from "@/_utils/components/pastille";
import Tooltip from "@/_utils/components/tooltip";

import { useDispatch, useSelector } from "@/dapp/store/hooks";
import { useGetAssetsQuery, useGetDripQuery } from "@/dapp/store/services";
import { mint, mintDefault, mutate, resetMintingProcess } from "@/dapp/store/services/web3";
import Style from "./style";
import { useParams } from "react-router-dom";
import { useSceneStore } from "../_3dScene/hook";
import { CONFIG } from "@/_config";

const { parseEther: toEth, formatEther, formatBytes32String } = ethers.utils;
const { AddressZero } = ethers.constants;

const DropComponent: FC<{ drop: Drop; sceneRef: sceneRefType }> = ({ drop, sceneRef }) => {
  const { auth, address, name, txProcess } = useSelector((state) => state.web3);
  const dispatch = useDispatch();

  // fetch data
  const { data: assets, isLoading } = useGetAssetsQuery({ address: address }, { skip: !auth });

  const placeholderItem: NFT = {
    address: AddressZero,
    img: "/placeholder.png",
    id: 0,
    name: "",
    symbol: "",
  };

  // fc state
  const [currentItem, , setItem] = useCState<NFT>(placeholderItem);
  const [currentVersion, , setVersion] = useCState(0);

  const isPlaceholderItem = currentItem.address === placeholderItem.address;
  const isMintable = drop.currentSupply !== drop.maxSupply;

  const { isLoaded } = useSceneStore();

  useEffect(() => {
    if (isLoaded) {
      updateItem(placeholderItem);
      updateVersion(0);
    }
  }, [isLoaded]);

  const updateVersion = (version: number) => {
    if (!sceneRef.current) return;
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
    if (!sceneRef.current) return;
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
    const resetToItem = placeholderItem;

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Drip
  const isDripMinted = txProcess.mintingDrip.id !== undefined;

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

    ...(!isPlaceholderItem
      ? [
          {
            isDisplay: isPlaceholderItem
              ? txProcess.mintingDefault.done
              : txProcess.mintingDrip.done,
            isMyTurn: isDripMinted && !isMutated,
            stepName: "MUTATE",
            text: (
              <Style.TextModal>
                Last step, mutating your <b>Drip</b> with your{" "}
                <b>
                  {currentItem.symbol}#{currentItem.id}
                </b>{" "}
                !
              </Style.TextModal>
            ),
            isLoading: txProcess.mutating.loading,
            isDone: txProcess.mutating.done,
            tx: txProcess.mutating.tx,
            price: "0.0",
            action: {
              name: "MUTATE",
              fct: () => {
                dispatch(
                  mutate({
                    address: drop.address,
                    tokenId: txProcess.mintingDrip?.id as number,
                    contractMutator: currentItem.address,
                    tokenIdMutator: currentItem.id,
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
      <Modal
        open={open}
        onClose={handleClose}
        slotProps={{
          backdrop: {
            style: {
              background: "rgba(0,0,0,0.7)",
            },
          },
        }}
      >
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
                    opacity: step.isDisplay ? 1 : 0.5,
                  }}
                >
                  <Grid
                    container
                    justifyContent="space-between"
                    style={{ marginBottom: "15px", opacity: step.isDisplay ? 1 : 0.1 }}
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
                      opacity: step.isDisplay ? 1 : 0.1,
                    }}
                  >
                    <Grid item xs={10}>
                      {step.text}
                    </Grid>
                    <Grid item flexGrow={1} />
                    <Grid
                      item
                      style={{ visibility: step.isLoading || step.isDone ? "visible" : "hidden" }}
                    >
                      <Grid container columnSpacing={0.5}>
                        <CenterItem item>
                          <Clickable
                            onClick={() => navigator.clipboard.writeText(step.tx as string)}
                          >
                            <ContentCopyIcon style={{ width: "14.5px" }} />
                          </Clickable>
                        </CenterItem>
                        <CenterItem item>
                          <Clickable address={`${CONFIG.blockExplorerUrl}/tx/${step.tx}`}>
                            <img src={EtherscanIcon} style={{ width: "16.5px" }} alt="" />
                          </Clickable>
                        </CenterItem>
                      </Grid>
                    </Grid>
                  </Grid>
                </Style.Step>
              ))}
            </Grid>

            {!modalActions[modalActions.length - 1].isDone && (
              <Style.GridPricePortal item style={{ marginRight: "10px" }}>
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
                marginRight: "25px",
              }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Grid container direction="row-reverse">
                    <Grid item>
                      <Clickable address={`/app/drop/${drop.id}/${txProcess.mintingDrip.id}`}>
                        <Style.FinalStep2 $display={modalActions[modalActions.length - 1].isDone}>
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
      </Modal>

      <Style.Root container justifyContent="space-between" columns={50}>
        <Grid item xs={12} style={{ zIndex: 10, height: "100%" }}>
          <Style.LeftSide>
            <Grid container direction="column" style={{ height: "100%" }}>
              <Grid item xs={1} style={{ display: "flex", alignItems: "end" }}>
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
          {/* <Style.LeftSideRightSide>
              <Clickable onClick={() => sceneRef.current.reset3DView()}>
                <Style.LeftSideRightSideInner>RESET 3D VIEW</Style.LeftSideRightSideInner>
              </Clickable>
            </Style.LeftSideRightSide> */}
        </Grid>
        <Grid item xs={9} style={{ zIndex: 10 }}>
          <Grid
            container
            direction="column"
            style={{ height: "100%" }}
            justifyContent="space-between"
          >
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
                        height: "20px",
                      }}
                    >
                      <Grid item>
                        <Style.MoreInfoSymbol>
                          {currentItem.symbol} #{currentItem.id}
                        </Style.MoreInfoSymbol>
                      </Grid>

                      <Grid item>
                        {isPlaceholderItem ? (
                          <Style.ExempleItem>PLACEHOLDER</Style.ExempleItem>
                        ) : null}
                      </Grid>

                      <Grid item flexGrow={1}>
                        <Grid container direction="row-reverse">
                          {!isPlaceholderItem ? (
                            <Grid item>
                              <Style.MutatorRemove>
                                <Clickable onClick={() => resetItem()}>
                                  BACK TO PLACEHOLDER
                                </Clickable>
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
                          activated={!isPlaceholderItem}
                          address={`${CONFIG.openseaUrl}/${currentItem.address}/${currentItem.id}`}
                        >
                          <img src={OpenSeaIcon} style={{ width: "16.5px" }} alt="" />
                        </Clickable>
                      </Grid>
                      <Grid item>
                        <Clickable
                          activated={!isPlaceholderItem}
                          address={`${CONFIG.blockExplorerUrl}/address/${currentItem.address}`}
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
                    <Style.BottomBarContainer container justifyContent="center" alignItems="center">
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

            <Grid item>
              <div
                style={{
                  marginTop: "15px",
                  paddingTop: "15px",
                  borderTop: "1.5px solid lightgrey",
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

                <Style.ContainerPayment>
                  <Style.InnerContainerPayment>
                    <Grid container rowSpacing={1}>
                      <Grid item xs={6}>
                        <Style.MintPriceTitle>Price</Style.MintPriceTitle>
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
                            setOpen(true);
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
      </Style.Root>
    </>
  );
};

export default DropComponent;
