import React, { FC, useEffect } from "react";

import { Toolbar, Grid } from "@mui/material";

import CenterItem from "@/_common/components/grid/centerItem";

import Style from "./style";
import Clickable from "@/_common/components/clickable";
import LogoIcon from "@/common/assets/images/logo-typo.svg";
import LogoFull from "@/common/assets/images/logo-full.svg";
import LogoTypo from "@/common/assets/images/logo-typo.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import DiscordIcon from "@/common/assets/icons/discord.svg";

import { CREDENTIALS } from "@/_common/constants";
import SceneLoader, { sceneRef } from "@/_common/3d/scenes/skate_0";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { ListMockTokens } from "@premier/typings";

const DemoItemList: {
  collection: string;
  contract: string;
  item: string;
  img: string;
}[] = [
  {
    collection: "Bored Ape Yatch Club",
    contract: "0xbc4c...f13d",
    item: "BAYC #6268",
    img: "models/placeholder.png",
  },
  {
    collection: "Bored Ape Yatch Club",
    contract: "0xbc4c...f13d",
    item: "BAYC #8663",
    img: ListMockTokens.BoredApe.tokens[8663],
  },
  {
    collection: "Bored Ape Yatch Club",
    contract: "0xbc4c...f13d",
    item: "BAYC #7693",
    img: "https://i.seadn.io/gae/awlHMs7ZVRLxuiJJ84CylogTTmTYRUTt_pPdWI6oED_60LOGSnH5pnQxpceQcQvUQL7uM4BQlPaBJuvn-pq7xkatOuqj2_nc3SCkeKk?auto=format&w=1920",
  },
  {
    collection: "Bored Ape Yatch Club",
    contract: "0xbc4c...f13d",
    item: "BAYC #9467",
    img: "https://i.seadn.io/gae/gZYA_fdqRicQEeY8FqoRbWQ3edVrNKovWLBPKxZ16qBf4EvsSq8VBKrhvSBfYyk1ZVF04bKa5kibtrdlBAVvONSWCmLWv0yfI5jx7Q?auto=format&w=1920",
  },
];

const HomeComponent: FC = ({}) => {
  const sceneRef = React.useRef<sceneRef>(null!);

  const [currentItem, setCurrentItem] = React.useState(0);

  useEffect(() => {
    let rotationInterval = setInterval(() => {
      if (currentItem === DemoItemList.length - 1) {
        setCurrentItem(0);
        sceneRef.current._changeTexturePlaceholder(DemoItemList[0].img);
      } else {
        setCurrentItem(currentItem + 1);
        sceneRef.current._changeTexturePlaceholder(DemoItemList[currentItem + 1].img);
      }
    }, 5000);

    //Clean up can be done like this
    return () => {
      clearInterval(rotationInterval);
    };
  }, [currentItem]); // Add dependencies here

  return (
    <Style.Root>
      <Navbar />
      <Style.HomeScreenContainer>
        <Style.HomeScreen>
          <Grid container style={{ height: "100%" }}>
            <Grid item xs={6} style={{ height: "100%" }}>
              <Grid
                container
                style={{ height: "100%" }}
                direction="column"
                justifyContent="space-between"
              >
                <Grid item>
                  <Style.Title>WEB3 STUDIO.</Style.Title>
                  <Style.SubTitle>
                    DIGITAL&nbsp;&nbsp;&nbsp;&nbsp;UTILITY&nbsp;&nbsp;&nbsp;&nbsp;TECHNOLOGY
                  </Style.SubTitle>
                </Grid>

                <Grid item>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Style.SubTitle5>PREMIER</Style.SubTitle5>
                      <Style.SubTitle5>PREMIER</Style.SubTitle5>
                      <Style.SubTitle5>PREMIER</Style.SubTitle5>
                      <Style.SubTitle5>PREMIER</Style.SubTitle5>
                      <Style.SubTitle5>PREMIER</Style.SubTitle5>
                    </Grid>
                    <Grid item style={{ display: "flex", alignItems: "end" }}>
                      <Style.SubTitle5>STUDIO</Style.SubTitle5>
                    </Grid>
                    <Grid item style={{ display: "flex", alignItems: "end" }}>
                      <Style.SubTitle5>2023</Style.SubTitle5>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={0.5} style={{ borderRight: "2px solid black" }} />

            <Grid item xs={5.5} style={{ height: "100%", paddingLeft: "15px" }}>
              <Grid container style={{ height: "100%" }}>
                <Grid item xs={8} style={{ height: "100%" }}>
                  <Grid
                    container
                    direction="column"
                    style={{ height: "100%" }}
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <Style.SubTitle2>
                        Get
                        <br />
                        <div>Your NFT</div>
                        On The Wall !
                      </Style.SubTitle2>
                    </Grid>
                    <Grid item>
                      <Style.ContainerExempleDrip>
                        <Grid container columnSpacing={1} direction="row-reverse">
                          <Grid item xs={7}>
                            <Grid container direction="column" style={{ height: "100%" }}>
                              <Grid item flexGrow={1}>
                                <Style.ContainerExempleDripContainer style={{ paddingTop: "10px" }}>
                                  <Style.InfoDivItemName>PLACEHOLDER</Style.InfoDivItemName>
                                  <Style.ContainerInfoDiv>
                                    <Style.ContainerContract>
                                      <span style={{ fontWeight: 500 }}>Collection: </span>
                                      {DemoItemList[currentItem].collection}
                                    </Style.ContainerContract>
                                    <div style={{ height: "5px" }} />

                                    <Style.ContainerContract>
                                      <span style={{ fontWeight: 500 }}>Contract: </span>{" "}
                                      {DemoItemList[currentItem].contract}
                                    </Style.ContainerContract>
                                    <div style={{ height: "5px" }} />

                                    <Style.ContainerContract>
                                      <span style={{ fontWeight: 500 }}>Item: </span>
                                      {DemoItemList[currentItem].item}
                                    </Style.ContainerContract>
                                  </Style.ContainerInfoDiv>
                                </Style.ContainerExempleDripContainer>
                              </Grid>

                              <Grid item xs={3}>
                                <Style.ContainerExempleDripContainer>
                                  <Style.InfoDivItemName>DECK</Style.InfoDivItemName>
                                  <Style.GalleryWrap>
                                    <Style.GalleryItem
                                      $onHover={false}
                                      color={"models/0.texture.png"}
                                      style={{
                                        height: "50px",
                                        borderRadius: "5px",
                                      }}
                                    />
                                  </Style.GalleryWrap>
                                </Style.ContainerExempleDripContainer>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={5}>
                            <img
                              src={DemoItemList[currentItem].img}
                              style={{ width: "100%", height: "100%" }}
                              alt=""
                            />
                          </Grid>
                        </Grid>
                      </Style.ContainerExempleDrip>
                    </Grid>
                    <Grid item>
                      <Style.SubTitle3>DROP</Style.SubTitle3>
                      <div style={{ height: "15px" }} />

                      <Style.SubTitleText>
                        Your NFTs are cool but you would like to showcase them your house or
                        somewhere, right ? We feel the same way ...
                        <div style={{ height: "1vh" }} />
                        Our very exclusive and limited Drops let you create high value real life
                        assets out of your NFTs.
                      </Style.SubTitleText>

                      <div style={{ height: "20px" }} />

                      <Grid container alignItems="center">
                        <Grid item>
                          <Style.SubTitle4>DISCOVER NOW</Style.SubTitle4>
                        </Grid>
                        <CenterItem item>
                          <ArrowRightAltIcon />
                        </CenterItem>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <SceneLoader
                    sceneRef={sceneRef}
                    model="models/model.glb"
                    initialVersion={0}
                    initialId={0}
                    initialPlaceholderTexture={DemoItemList[0].img}
                    versions={[{ name: "0", texture: "models/0.texture.png" }]}
                    initialDropSymbol="random"
                    initialTokenNameId="random"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Style.HomeScreen>
      </Style.HomeScreenContainer>

      {/* <Style.ScreenContainer>
        <Style.Screen>
          <Grid container style={{ height: "100%" }}>
            <Grid item xs={6}>
              <CenterItem $full={true}>
                <Style.Title2>DROP</Style.Title2>
              </CenterItem>
            </Grid>
            <Grid item xs={6}>
              hey
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              hey hey hey hey hey hey hey
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              hey hey hey hey hey hey hey
            </Grid>
          </Grid>
        </Style.Screen>
      </Style.ScreenContainer> */}

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
