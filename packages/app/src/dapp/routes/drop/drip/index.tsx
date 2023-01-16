import { FC, useEffect } from "react";

import { sceneRefType } from "@/_3d/scenes/skate_1";
import { Drip, Drop as DropType } from "@sshlabs/typings";

import Style from "./style";
import { useParams } from "react-router-dom";
import { useGetDripQuery } from "@/dapp/store/services";

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

  if (isLoadingDrip) {
    return <>iii</>; // TODO
  }

  if (isDripQueryError) {
    return <>not found</>; // TODO
  }

  if (!isDripParamError && isDripQueryError) {
    return <>not found</>; // TODO
  }

  return <DripRoute drop={drop} drip={drip} sceneRef={sceneRef} />;
};

const DripRoute: FC<{ drop: DropType; drip: Drip; sceneRef: sceneRefType }> = ({
  drop,
  drip,
  sceneRef,
}) => {
  // sceneRef.current.updateVersion(drip.id, drip.version, drop.symbol, drip.nft?.name + " #" + drip.nft?.id);
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
