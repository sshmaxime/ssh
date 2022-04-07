import { FC } from "react";

import Style from "./style";
import { HEADLINE, CREDENTIALS } from "../../constants";
import { Grid } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import DiscordIcon from "../../assets/icons/discord2.svg";
import Clickable from "../stateless/clickable";
import Logo from "../../assets/images/logo-07.svg";

export const FooterComponent: FC = () => {
  return (
    <Style.Root>
      <Grid container>
        <Grid item xs={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Clickable address="/">
                <img src={Logo} style={{ width: "250px" }} alt="" />
              </Clickable>
            </Grid>
            <Grid item xs={12}>
              <Style.Subtitle>- {HEADLINE}</Style.Subtitle>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid
                container
                spacing={1}
                flexDirection="row-reverse"
                alignContent="center"
              >
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
                  <Style.ExternalLink>
                    {"SSH LABS, Terms & Conditions"}
                  </Style.ExternalLink>
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
