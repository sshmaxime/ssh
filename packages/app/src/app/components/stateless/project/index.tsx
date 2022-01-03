import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// styles
import Style from "./style";

// components
import { Grid, GridSize } from "@mui/material";
import Pastille from "../pastille";

import Tooltip from "@mui/material/Tooltip";

type props = {
  title: string;
  id: string;
  image?: string;
  description: any;
  info: {
    mintPrice: string;
  };
  pastilles: {
    title: string;
    description: string;
    color: string;
  }[];
};

const Project: FC<props> = ({
  title,
  id,
  image,
  description,
  info,
  pastilles,
}) => {
  return (
    <Style.Root>
      <Style.HeaderContainer container spacing={2} justifyContent={"center"}>
        {image ? (
          <Grid item xs={12} md={4} lg={3}>
            <Style.ImageContainer>
              <Style.Image src={image} />
            </Style.ImageContainer>
          </Grid>
        ) : null}

        <Grid item xs={12} md={image ? 6 : 12}>
          <Style.GridContainerCard container spacing={0}>
            <Grid item xs={4}>
              <Style.ProjectTitleContainer>
                <Style.ProjectTitleKeyword>{title}</Style.ProjectTitleKeyword>#
                {id}
              </Style.ProjectTitleContainer>
            </Grid>
            <Grid item xs={8}>
              <Grid
                container
                spacing={1}
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                }}
              >
                {pastilles.map((pastille) => (
                  <Grid key={pastille.title} item>
                    <Tooltip arrow title={pastille.description} placement="top">
                      <div>
                        <Pastille
                          title={pastille.title}
                          color={pastille.color}
                        />
                      </div>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Style.ProjectSpacer>&nbsp;&nbsp;&nbsp;</Style.ProjectSpacer>
            </Grid>

            <Grid item xs={12}>
              <Style.ProjectDescription>{description}</Style.ProjectDescription>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Grid container spacing={1}>
                    <Grid item>
                      <Style.MintPrice>{info.mintPrice}</Style.MintPrice>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6}>
                  <Grid
                    container
                    spacing={1}
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <Grid item>
                      <Style.MintButton>mint</Style.MintButton>
                    </Grid>
                    <Grid item>
                      <>&nbsp;&nbsp;&nbsp;</>
                    </Grid>
                    <Grid item>
                      <Style.ExternalLink>Etherscan</Style.ExternalLink>
                    </Grid>
                    <Grid item>
                      <Style.ExternalLink>OpenSea</Style.ExternalLink>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Style.GridContainerCard>
        </Grid>
      </Style.HeaderContainer>
    </Style.Root>
  );
};

export default Project;
