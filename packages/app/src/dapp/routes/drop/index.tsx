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

const DropRouteProxy: FC = () => {
  const dropId = Number(useParams().dropId);

  const isDropParamError = isNaN(dropId);
  const {
    data: drop,
    isLoading: isLoadingDrops,
    isError: isErrorDrops,
    isSuccess: isSuccessDrops,
  } = useGetDropsQuery({ skip: isDropParamError });
  const isDropQueryError =
    !isSuccessDrops || isErrorDrops || drop === undefined || drop[dropId] === undefined;

  if (isLoadingDrops) {
    return <>iii</>; // TODO
  }

  if (isDropQueryError) {
    return <NotFound />;
  }

  return <DropRoute drop={drop[dropId]} />;
};

const DScene: FC<{ sceneRef: sceneRef }> = ({ sceneRef }) => {
  const [lolo, lili] = useState(false);

  return (
    <>
      <div
        style={{
          position: "absolute",
          height: "100px",
          width: "100px",
          zIndex: "10000",
          backgroundColor: "red",
        }}
        onClick={() => {
          console.log("la");
          lili(!lolo);
        }}
      >
        hello
      </div>
      <Style.BodyScene style={{ zIndex: 2, display: lolo ? "none" : "block" }}>
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
    </>
  );
};

const DropRoute: FC<{ drop: DropType }> = ({ drop }) => {
  const sceneRef = React.useRef<sceneRef>(null!);

  return (
    <Style.Root>
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
    </Style.Root>
  );
};

export default DropRouteProxy;
