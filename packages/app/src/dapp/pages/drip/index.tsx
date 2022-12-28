import React, { FC } from "react";

import { Grid, ImageList, ImageListItem } from "@mui/material";

import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import { Fade } from "react-awesome-reveal";
import Style from "./style";

import Pastille from "../../../_utils/components/pastille";

import SceneLoader, { sceneRef } from "@/_3d/scenes/skate_1";
import { Drip as DripType, DripStatus, Drop, NFT } from "@sshlabs/typings";
import { useParams } from "react-router-dom";
import { CREDENTIALS } from "../../../_constants";
import Clickable from "../../../_utils/components/clickable";
import { useDispatch, useSelector } from "../../store/hooks";

import { useGetAssetsQuery, useGetDripQuery } from "../../store/services";
import { mutate } from "../../store/services/web3";

import { useGetDropsQuery } from "@/dapp/store/services/socket";
import { ethers } from "ethers";
import NotFound from "../404";

const { parseEther: toEth, formatEther, formatBytes32String } = ethers.utils;

const DripProxy: FC = () => {
  const dropId = Number(useParams().dropId);
  const tokenId = Number(useParams().tokenId);

  const isParamError = isNaN(dropId) || isNaN(tokenId);

  const {
    data: drop,
    isLoading: isLoadingDrops,
    isError: isErrorDrops,
    isSuccess: isSuccessDrops,
  } = useGetDropsQuery({ skip: isParamError });
  const isQueryErrorDrops =
    !isSuccessDrops || isErrorDrops || drop === undefined || drop[dropId] === undefined;

  const {
    data: drip,
    isLoading: isLoadingDrip,
    isError: isErrorDrip,
    isSuccess: isSuccessDrip,
  } = useGetDripQuery({ dropId, tokenId }, { skip: isParamError || isQueryErrorDrops });
  const isQueryErrorDrip = !isSuccessDrip || isErrorDrip || drip === undefined;

  if (isLoadingDrops || isLoadingDrip) {
    return <>iii</>; // TODO
  }

  if (isParamError || isQueryErrorDrops || isQueryErrorDrip) {
    return <NotFound />;
  }

  return <Drip drop={drop[dropId]} drip={drip} />;
};

const Drip: FC<{ drop: Drop; drip: DripType }> = ({ drop, drip }) => {
  const dispatch = useDispatch();
  const { auth, address, name } = useSelector((state) => state.web3);
  const isMutable = drip.status === DripStatus.VIRGIN;

  // fetch data
  const { data: assets, isLoading } = useGetAssetsQuery({ address: address }, { skip: !auth });

  const [currentItem, setItem] = React.useState<NFT>();

  const updateItem = (newItem: NFT) => {
    setItem(newItem);
    sceneRef.current.updateItem(
      newItem.img,
      0,
      drip.version,
      drop.symbol,
      newItem.symbol + " #" + newItem.id
    );
  };

  const sceneRef = React.useRef<sceneRef>(null!);
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
              initialVersion={drip.version}
              initialDropSymbol={drop.symbol}
              initialTokenNameId={"BAYC #123"}
              initialPlaceholderTexture={drip.img}
              initialId={drip.id}
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
                            <Style.StepTitle3>{drop.symbol}</Style.StepTitle3>
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

            {isMutable && (
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
              </>
            )}
          </Style.LeftSide>

          <Style.ContainerInfo>
            <Style.InnerContainerInfo>
              <Grid
                container
                rowSpacing={1}
                alignContent={"center"}
                justifyContent="space-between"
                style={{ marginBottom: "15px" }}
              >
                <Grid item xs={12} style={{ marginBottom: "10px" }}>
                  <Style.ContainerTitle>#{drip.id}</Style.ContainerTitle>
                </Grid>
                <Grid item xs={12}>
                  <Style.Explainer>Drop ID</Style.Explainer>
                  <Style.ContainerTitle2>{drop.symbol}</Style.ContainerTitle2>
                </Grid>
                <Grid item xs={12}>
                  <Style.Explainer>Version</Style.Explainer>
                  <Style.ContainerTitle3>
                    {drop.metadata.versions[drip.version].name} #{drip.version}
                  </Style.ContainerTitle3>
                </Grid>
                <Grid item xs={12}>
                  <Style.Explainer>Contract</Style.Explainer>
                  <Style.ContainerTitle4>Etherscan</Style.ContainerTitle4>
                </Grid>
              </Grid>

              <Style.ContainerPayment>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Clickable
                      activated={isMutable}
                      onClick={() => {
                        if (!currentItem) return;
                        dispatch(
                          mutate({
                            address: drop.address,
                            tokenId: drip.id,
                            contractMutator: currentItem.address,
                            tokenIdMutator: currentItem.id,
                          })
                        );
                      }}
                    >
                      <Style.MintButton>MUTATE</Style.MintButton>
                    </Clickable>
                  </Grid>
                  <Grid item xs={6}>
                    <Clickable activated={false} onClick={() => {}}>
                      <Style.MintButton>REDEEM</Style.MintButton>
                    </Clickable>
                  </Grid>
                  <Grid item xs={12}>
                    <Clickable external={false} address={`../drop/${drop.id}`}>
                      <Style.ViewButton>VIEW DROP</Style.ViewButton>
                    </Clickable>
                  </Grid>
                </Grid>
              </Style.ContainerPayment>
            </Style.InnerContainerInfo>
          </Style.ContainerInfo>
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

export default DripProxy;
