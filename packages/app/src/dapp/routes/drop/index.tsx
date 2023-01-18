import React, { FC, useState } from "react";

import { useGetDropsQuery } from "@/dapp/store/services/socket";
import SceneLoader, { sceneRef } from "@/_3d/scenes/skate_1";
import { Grid } from "@mui/material";
import { Drip, Drop as DropType } from "@sshlabs/typings";
import { Route, Routes, useParams } from "react-router-dom";

import { CREDENTIALS } from "../../../_constants";
import { useGetDripQuery } from "../../store/services";
import NotFound from "../404";
import DropApp from "./drop";
import DripApp from "./drip";
import Style from "./style";
import { Scene } from "./_3dScene/scene";
import { SceneProvider, useDisplaySceneContext } from "./_3dScene/hook";

const DropRouteProxy: FC = () => {
  const dropId = Number(useParams().dropId);
  const dripId = Number(useParams().dripId);

  const isDropParamError = isNaN(dropId);
  const {
    data: drop,
    isLoading: isLoadingDrops,
    isError: isErrorDrops,
    isSuccess: isSuccessDrops,
  } = useGetDropsQuery({ skip: isDropParamError });
  const isDropQueryError =
    !isSuccessDrops || isErrorDrops || drop === undefined || drop[dropId] === undefined;

  const isDripParamError = isNaN(dripId);
  const {
    data: drip,
    isLoading: isLoadingDrip,
    isError: isErrorDrip,
    isSuccess: isSuccessDrip,
  } = useGetDripQuery({ dropId, dripId }, { skip: isDripParamError });
  const isDripQueryError = !isSuccessDrip || isErrorDrip || drip === undefined;

  // Handle errors Drop
  if (isLoadingDrops) {
    return <>iii</>; // TODO
  }

  if (isDropQueryError) {
    return <NotFound />;
  }

  // Handle errors Drip
  if (isLoadingDrip) {
    return <>iii</>; // TODO
  }

  if (isDripQueryError && !isDripParamError) {
    return <NotFound />;
  }

  return <DropRoute drop={drop[dropId]} drip={drip} />;
};

const DropRoute: FC<{ drop: DropType; drip?: Drip }> = ({ drop, drip }) => {
  const sceneRef = React.useRef<sceneRef>(null!);

  return (
    <Style.Root>
      <SceneProvider>
        <Scene sceneRef={sceneRef} drop={drop} />

        <Routes>
          <Route
            path=":dripId"
            element={
              <Style.RootChild>
                <DripApp drop={drop} sceneRef={sceneRef} />
              </Style.RootChild>
            }
          />

          <Route
            path="*"
            element={
              <Style.RootChild>
                <DropApp drop={drop} sceneRef={sceneRef} />
              </Style.RootChild>
            }
          />
        </Routes>

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
      </SceneProvider>
    </Style.Root>
  );
};

export default DropRouteProxy;
