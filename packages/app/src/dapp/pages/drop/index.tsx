import React, { FC, useEffect, useState } from "react";

import { Box, Grid, ImageList, ImageListItem, Modal } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import OpenSeaIcon from "../../../_utils/assets/icons/opensea.svg";
import EtherscanIcon from "../../../_utils/assets/icons/etherscan.svg";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useGetDropsQuery } from "@/dapp/store/services/socket";
import SceneLoader, { sceneRef } from "@/_3d/scenes/skate_1";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Drip, Drop as DropType, NFT } from "@sshlabs/typings";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { ethers } from "ethers";
import { Fade } from "react-awesome-reveal";
import { Route, Routes, useParams } from "react-router-dom";

import { CREDENTIALS } from "../../../_constants";
import logoeth from "../../../_utils/assets/images/logoeth.svg";
import Clickable from "../../../_utils/components/clickable";
import Pastille from "../../../_utils/components/pastille";
import Tooltip from "../../../_utils/components/tooltip";
import { useDispatch, useSelector } from "../../store/hooks";
import { useGetAssetsQuery, useGetDripQuery } from "../../store/services";
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
import Drop from "./drop";

const DropProxy: FC = () => {
  const dropId = Number(useParams().dropId);
  const dripId = Number(useParams().tokenId);

  const isDropParamError = isNaN(dropId);
  const {
    data: drop,
    isLoading: isLoadingDrops,
    isError: isErrorDrops,
    isSuccess: isSuccessDrops,
  } = useGetDropsQuery({ skip: isDropParamError });
  const isDropQueryErrorDrops =
    !isSuccessDrops || isErrorDrops || drop === undefined || drop[dropId] === undefined;

  const isDripParamError = isNaN(dripId);
  const {
    data: drip,
    isLoading: isLoadingDrip,
    isError: isErrorDrip,
    isSuccess: isSuccessDrip,
  } = useGetDripQuery({ dropId, dripId }, { skip: isDripParamError || isDropQueryErrorDrops });
  const isDripQueryErrorDrip = !isSuccessDrip || isErrorDrip || drip === undefined;

  if (isLoadingDrops || isLoadingDrip) {
    return <>iii</>; // TODO
  }

  if (isDropQueryErrorDrops) {
    return <NotFound />;
  }

  if (!isDripParamError && isDripQueryErrorDrip) {
    return <NotFound />;
  }

  return <Index drop={drop[dropId]} drip={drip} />;
};

const Index: FC<{ drop: DropType; drip?: Drip }> = ({ drop, drip }) => {
  const sceneRef = React.useRef<sceneRef>(null!);

  return (
    <Style.Root>
      <Style.BodyScene>
        <SceneLoader
          sceneRef={sceneRef}
          model={drop.metadata.model}
          versions={drop.metadata.versions}
          initialVersion={0}
          initialPlaceholderTexture={drop.defaultItem.img}
          initialDropSymbol={drop.symbol}
          initialTokenNameId={"1" + " #" + 0}
          initialId={0}
        />
      </Style.BodyScene>

      <Routes>
        <Route path=":dripId" element={<>Hey</>} />
        <Route path="*" element={<Drop drop={drop} sceneRef={sceneRef} />} />
      </Routes>

      {/* {drip ? <></> : <Drop drop={drop} />} */}
    </Style.Root>
  );
};

export default DropProxy;
