import { FC } from "react";

import Style from "./style";
import { HEADLINE, CREDENTIALS } from "../../_constants";
import { Grid } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import DiscordIcon from "../../_utils/assets/icons/discord2.svg";
import Clickable from "../../_utils/components/stateless/clickable";
import LogoTypo from "../../_utils/assets/images/logo-typo.svg";

export const FooterComponent: FC = () => {
  return (
    <Style.Root>
      <Grid container>
        <Grid item xs={4}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Clickable address="/">
                <img src={LogoTypo} style={{ width: "200px" }} alt="" />
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
                    <Style.ImgIcon src={DiscordIcon} alt="" />
                  </Clickable>
                </Grid>
                <Grid item>
                  <Clickable address="https://twitter.com/sshlabs_">
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
    </Style.Root>
  );
};

export default FooterComponent;
