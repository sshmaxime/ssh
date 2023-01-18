import { FC, useEffect } from "react";

import { sceneRefType } from "@/_3d/scenes/skate_1";
import { Drip, Drop as DropType } from "@sshlabs/typings";

import Style from "./style";
import { useParams } from "react-router-dom";
import { useGetDripQuery } from "@/dapp/store/services";
import { useDisplaySceneContext } from "../_3dScene/hook";

const DripRouteProxy: FC<{ drop: DropType; sceneRef: sceneRefType }> = ({ drop, sceneRef }) => {
  const dropId = drop.id;
  const dripId = Number(useParams().dripId);

  const isDripParamError = isNaN(dripId);
  const {
    data: drip,
    isLoading: isLoadingDrip,
    isError: isErrorDrip,
    isSuccess: isSuccessDrip,
  } = useGetDripQuery({ dropId, dripId }, { skip: isDripParamError });
  const isDripQueryError = !isSuccessDrip || isErrorDrip || drip === undefined;

  //
  const { setDisplay } = useDisplaySceneContext();

  if (isLoadingDrip) {
    return <>iii</>; // TODO
  }

  if (isDripQueryError) {
    setDisplay(false);
    return <>not fodund</>; // TODO
  }

  if (!isDripParamError && isDripQueryError) {
    setDisplay(false);
    return <>not found</>; // TODO
  }

  setDisplay(true);
  return <DripRoute drop={drop} drip={drip} sceneRef={sceneRef} />;
};

const DripRoute: FC<{ drop: DropType; drip: Drip; sceneRef: sceneRefType }> = ({
  drop,
  drip,
  sceneRef,
}) => {
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.updateVersion(
        drip.id,
        drip.version,
        drop.symbol,
        drip.nft?.name + " #" + drip.nft?.id
      );
      sceneRef.current.updateItem(
        drip.nft?.img || "/zeroItem.png",
        drip.id,
        drip.version,
        drop.symbol,
        drip.nft?.name + " #" + drip.nft?.id
      );
    }
  });

  return <Style.Root>Hi</Style.Root>;
};

export default DripRouteProxy;
