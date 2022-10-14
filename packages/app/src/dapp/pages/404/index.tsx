import React, { Suspense, Fragment, FC, useState, useEffect, useRef } from "react";

import Style from "./style";

import { Grid } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import Clickable from "../../../_utils/components/stateless/clickable";

const NotFound: FC = () => {
  return (
    <Style.RootNotFound>
      <Style.NotFound>
        <Grid container>
          <Grid item xs={12}>
            404 Not Found.
          </Grid>
          <Grid item xs={12}>
            <Style.MoreLinkContainer>
              <Clickable onClick={() => {}}>
                <Grid container>
                  <Grid item alignSelf={"center"}>
                    <Style.MoreLink>HOME</Style.MoreLink>
                  </Grid>
                  <Grid item alignSelf={"center"}>
                    <ArrowRightAltIcon style={{ color: "black", fontSize: "1.8em" }} />
                  </Grid>
                </Grid>
              </Clickable>
            </Style.MoreLinkContainer>
          </Grid>
        </Grid>
      </Style.NotFound>
    </Style.RootNotFound>
  );
};

export default NotFound;
