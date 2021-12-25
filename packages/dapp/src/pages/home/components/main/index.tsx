import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Grid } from "@mui/material";

// styles
import Style from "./style";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

type props = {};

const MainComponent: FC<props> = ({ children }) => {
  return (
    <Style.Root>
      <Style.Background>
        <Style.TitleContainer>
          <Style.ProjectQuickPresentation>
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid item xs={12}>
                <Style.ProjectPresentationTitle>
                  EXPLORE
                  <ArrowRightAltIcon style={{ fontSize: "3em" }} />
                </Style.ProjectPresentationTitle>
              </Grid>
            </Grid>
          </Style.ProjectQuickPresentation>
        </Style.TitleContainer>
        <Style.Triangle />
      </Style.Background>
    </Style.Root>
  );
};

export default MainComponent;
