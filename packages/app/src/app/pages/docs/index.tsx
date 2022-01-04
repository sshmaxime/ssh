import React, { Fragment, FC, useState, useEffect } from "react";

import { Grid } from "@mui/material";

import { Fade } from "react-awesome-reveal";

// styles
import Style from "./style";

const DocElement: FC<{ title: string }> = ({ title, children }) => {
  return (
    <Style.RootDocElement>
      <Style.Title>/ {title}</Style.Title>

      <Style.Inner>{children}</Style.Inner>
    </Style.RootDocElement>
  );
};

const Docs: FC = () => {
  return (
    <Style.Root>
      <Fade duration={1500} triggerOnce>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ paddingTop: "250px", paddingBottom: "10vh" }}
        >
          <Grid item>
            <Style.PageTitle>/ DOCS .</Style.PageTitle>
          </Grid>
        </Grid>

        <DocElement title="Contracts">
          <p>
            <b>Mainnet</b>: 0x
          </p>
          <p>
            <b>Kovan</b>: 0x
          </p>
        </DocElement>
      </Fade>
    </Style.Root>
  );
};

export default Docs;
