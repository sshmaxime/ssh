import { FC } from "react";

// styles
import Style from "./style";

// components
import { Grid, GridSize } from "@mui/material";
import Pastille from "../pastille";

import Tooltip from "@mui/material/Tooltip";
import Clickable from "../clickable";

import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

type props = {
  title: string;
  id: string;
  image?: string;
  description: any;
  justHeader?: boolean;
  miniature?: boolean;
  defaultLinks: {
    mint: string;
  };
  otherLinks?: {
    name: string;
    url: string;
  }[];
  info: {
    mintPrice: string;
  };
  pastilles: {
    title: string;
    description: string;
  }[];
};

const Project: FC<props> = ({
  title,
  id,
  image,
  miniature,
  description,
  info,
  justHeader,
  defaultLinks,
  otherLinks,
  pastilles,
}) => {
  if (miniature) {
    return (
      <Style.Root>
        <Style.HeaderContainer container spacing={2} justifyContent={"center"}>
          <Style.GridContainerCard1 container spacing={0}>
            <Grid item xs={12} style={{ marginBottom: "10px" }}>
              <Grid container spacing={1} alignContent={"center"}>
                {pastilles.map((pastille) => (
                  <Grid key={pastille.title} item>
                    <Tooltip arrow title={pastille.description} placement="top">
                      <div>
                        <Pastille small title={pastille.title} />
                      </div>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Clickable address="/app/drop/0">
              <div style={{ position: "relative" }}>
                <img style={{ width: "100%" }} src={image} alt=""></img>
                <Style.Overlay>
                  <div style={{ position: "absolute", bottom: 15, left: 5 }}>
                    <Style.ProjectTitleContainer1>
                      <Style.ProjectTitleKeyword>{title}</Style.ProjectTitleKeyword>#{id}
                    </Style.ProjectTitleContainer1>
                  </div>
                </Style.Overlay>
              </div>
            </Clickable>
          </Style.GridContainerCard1>
        </Style.HeaderContainer>
      </Style.Root>
    );
  }

  return (
    <Style.Root>
      <Style.HeaderContainer container spacing={2} justifyContent={"center"}>
        <Grid item xs={12}>
          <Style.GridContainerCard container spacing={0}>
            <Grid item xs={4}>
              <Style.ProjectTitleContainer>
                <Style.ProjectTitleKeyword>{title}</Style.ProjectTitleKeyword>#{id}
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
                        <Pastille title={pastille.title} />
                      </div>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {!justHeader && (
              <>
                <Grid item xs={12}>
                  <Style.ProjectSpacer>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Style.ProjectSpacer>
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
                          alignItems: "flex-end",
                        }}
                      >
                        <Grid item>
                          <Clickable address={defaultLinks.mint} external={false}>
                            <Style.MintButton>EXPLORE</Style.MintButton>
                          </Clickable>
                        </Grid>
                        <Grid item>&nbsp;&nbsp;&nbsp;</Grid>

                        {otherLinks &&
                          otherLinks.map((otherLink, index) => (
                            <>
                              <Grid item>
                                <Clickable address={otherLink.url}>
                                  <Style.ExternalLink>{otherLink.name}</Style.ExternalLink>
                                </Clickable>
                              </Grid>
                            </>
                          ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}
          </Style.GridContainerCard>
        </Grid>
      </Style.HeaderContainer>
    </Style.Root>
  );
};

export default Project;
