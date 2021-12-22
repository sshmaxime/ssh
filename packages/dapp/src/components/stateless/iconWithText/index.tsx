import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Grid } from "@mui/material";

// styles
import Style from "./style";

type props = {
  title: string;
  icon: string;
};

const IconWithText: FC<props> = ({ children, title, icon }) => {
  return (
    <Style.Root>
      <Grid container columnSpacing={12} justifyContent="center">
        <Grid item xs={12}>
          <Style.ProjectPlanGrid>
            <Style.ProjectPlanGridContainer
              style={{
                backgroundColor: "#b6ccfe",
                marginBottom: "10px",
              }}
            >
              <img src={icon} style={{ height: "75%" }} alt="" />
            </Style.ProjectPlanGridContainer>
          </Style.ProjectPlanGrid>
        </Grid>
        <Grid item xs={12}>
          <div style={{ textAlign: "center" }}>{title}</div>
        </Grid>
      </Grid>
    </Style.Root>
  );
};

export default IconWithText;
