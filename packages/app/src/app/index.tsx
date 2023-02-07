import { FC } from "react";

import { Toolbar, Grid } from "@mui/material";

import CenterItem from "../_utils/components/grid/centerItem";

import Style from "./style";
import Clickable from "@/_utils/components/clickable";
import LogoIcon from "@/_utils/assets/images/logo-typo.svg";
import LogoFull from "@/_utils/assets/images/logo-full.svg";
import LogoTypo from "@/_utils/assets/images/logo-typo.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import DiscordIcon from "../_utils/assets/icons/discord.svg";
import { CREDENTIALS } from "@/_constants";

const HomeComponent: FC = ({}) => {
  return (
    <Style.Root>
      <Navbar />
      <Style.HomeScreenContainer>
        <Style.HomeScreen>
          <Grid container style={{ height: "100%" }}>
            <Grid item xs={6} style={{ height: "100%" }}>
              <CenterItem $full={true}>
                <Style.Title>WEB3 STUDIO.</Style.Title>
              </CenterItem>
            </Grid>
          </Grid>
        </Style.HomeScreen>
      </Style.HomeScreenContainer>
      <FooterComponent />
    </Style.Root>
  );
};

const Navbar: FC = ({}) => {
  return (
    <Style.AppBar position="absolute">
      <Toolbar style={{ padding: "0px" }}>
        <Grid container columnSpacing={0} rowSpacing={0} justifyContent="space-between">
          <Grid item xs={2.25} style={{ display: "flex", alignItems: "center" }}>
            <Grid container columnSpacing={0} rowSpacing={0} alignItems="center">
              <Grid item>
                <Clickable address="/">
                  <img alt="" src={LogoIcon} style={{ width: "200px" }} />
                </Clickable>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ display: "flex", alignItems: "center" }}>
            <Grid container columnSpacing={0} rowSpacing={0} alignItems="center">
              <Grid item>
                <Style.OpenApp>
                  <Clickable address="/app/drop">OPEN APP</Clickable>
                </Style.OpenApp>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </Style.AppBar>
  );
};

export const FooterComponent: FC = () => {
  return (
    <Style.RootFooter>
      <Grid container>
        <Grid item xs={4}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Clickable address="/">
                <img alt="" src={LogoTypo} style={{ width: "200px" }} />
              </Clickable>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5} style={{ marginTop: "15px" }}>
          <Grid container>
            <Grid item xs={4}>
              <Style.ContentCategory>
                <ul>
                  <li>About us</li>
                </ul>
              </Style.ContentCategory>
            </Grid>
            <Grid item xs={4}>
              <Style.ContentCategory>
                <ul>
                  <li>FAQ</li>
                  <li>Documentation</li>
                  <li>Discord</li>
                </ul>
              </Style.ContentCategory>
            </Grid>
            <Grid item xs={4}>
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
        <Grid item xs={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={1} flexDirection="row-reverse" alignContent="center">
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
            <Grid item xs={12}>
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

export default HomeComponent;
