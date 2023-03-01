import React, { FC, useEffect } from "react";

import { Toolbar, Grid } from "@mui/material";

import CenterItem from "@/_common/components/grid/centerItem";

import Style from "./style";
import Clickable from "@/_common/components/clickable";
import LogoIcon from "@/common/assets/images/logo-typo.svg";
import LogoTypo from "@/common/assets/images/logo-typo.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import DiscordIcon from "@/common/assets/icons/discord.svg";

import { CREDENTIALS } from "@/_common/constants";
import SceneLoader, { sceneRef } from "@/_common/3d/scenes/skate_0";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { ListMockTokens } from "@premier/typings";
import Typos from "@/_common/components/typography";

export const Footer: FC = () => {
  return (
    <Style.RootFooter>
      <Grid container rowSpacing={4}>
        <Grid item xs={12} md={4}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Clickable address="/">
                <img alt="" src={LogoTypo} style={{ width: "150px" }} />
              </Clickable>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Style.ContentCategory>
                <ul>
                  <li>Docs</li>
                </ul>
              </Style.ContentCategory>
            </Grid>

            <Grid item xs={12} md={4}>
              <Style.ContentCategory>
                <ul>
                  <li>Instagram</li>
                  <li>Discord</li>
                  <li>Twitter</li>
                </ul>
              </Style.ContentCategory>
            </Grid>
            <Grid item xs={12} md={4}>
              <Style.ContentCategory>
                <ul>
                  <li>Returns {"&"} Refunds</li>
                  <li>Ordering {"&"} Payment</li>
                  <li>Shipping {"&"} Delivery</li>
                </ul>
              </Style.ContentCategory>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={0} md={2}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Grid
                container
                sx={{ flexDirection: { sx: "row", md: "row-reverse" } }}
                spacing={1}
                alignContent="center"
              >
                <Grid item>
                  <Clickable address="https://discord.gg/FRAWgJJz4f">
                    <Style.ImgIcon2 src={DiscordIcon} alt="" />
                  </Clickable>
                </Grid>
                <Grid item>
                  <Clickable address="https://twitter.com/premier">
                    <TwitterIcon />
                  </Clickable>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: { xs: "left", md: "right" } }}>
              <Grid container>
                <Grid item xs={12}>
                  <Style.Credentials>{CREDENTIALS}</Style.Credentials>
                </Grid>
                <Grid item xs={12}>
                  <Style.ExternalLink>{"Terms & Conditions"}</Style.ExternalLink>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Style.RootFooter>
  );
};
