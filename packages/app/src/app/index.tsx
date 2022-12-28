import React, { FC, useEffect } from "react";

import { Grid } from "@mui/material";

// styles
import Style from "./style";

import { ReactComponent as Circle } from "../_utils/assets/icons/circle.svg";
import { ReactComponent as Discord } from "../_utils/assets/icons/discord.svg";
import { ReactComponent as Etherscan } from "../_utils/assets/icons/etherscan.svg";
import { ReactComponent as Opensea } from "../_utils/assets/icons/opensea.svg";
import { ReactComponent as Sun } from "../_utils/assets/icons/sun.svg";
import circle from "../_utils/assets/images/circleblack.png";
import LogoFull from "../_utils/assets/images/logo-full.svg";
import { ReactComponent as LogoTypo } from "../_utils/assets/images/logo-typo.svg";
import img4 from "../_utils/assets/images/van.png";
import img3 from "../_utils/assets/images/wave.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import SceneLoader, { sceneRef } from "@/_3d/scenes/skate_0";
import Clickable from "@/_utils/components/clickable";

import { CREDENTIALS } from "@/_constants";
import TwitterIcon from "@mui/icons-material/Twitter";
import DiscordIcon from "../_utils/assets/icons/discord.svg";

import Marquee from "../_utils/components/marquee";
import CenterItem from "../_utils/components/grid/centerItem";

const HeaderComponent: FC = () => {
  return (
    <Style.RootHeader>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            borderBottom: "1px solid black",
            height: "60px",
          }}
        >
          <Grid container justifyContent={"space-between"} style={{ height: "100%" }}>
            <Grid item xs={3}>
              <Grid container style={{ height: "100%" }}>
                <CenterItem
                  xs={10}
                  justifyContent="left"
                  style={{ borderRight: "1px solid black", padding: "10px" }}
                >
                  <LogoTypo style={{ width: "150px", color: "black" }} />
                </CenterItem>
                <CenterItem xs={2} style={{ borderRight: "1px solid black", padding: "10px" }}>
                  <Sun style={{ width: "25px" }} />
                </CenterItem>
              </Grid>
            </Grid>

            <CenterItem flexGrow={1}>
              {/* <Grid container justifyContent="space-evenly">
          <CenterItem item>
            <Style.TextLinkHeader>DRIP</Style.TextLinkHeader>
          </CenterItem>
          <CenterItem item>
            <Style.TextLinkHeader>ABOUT</Style.TextLinkHeader>
          </CenterItem>
          <CenterItem item>
            <Style.TextLinkHeader>ROADMAP</Style.TextLinkHeader>
          </CenterItem>
          <CenterItem item>
            <Style.TextLinkHeader>TEAM</Style.TextLinkHeader>
          </CenterItem>
        </Grid> */}
            </CenterItem>

            <Grid item xs={2}>
              <Grid container style={{ height: "100%" }}>
                <CenterItem
                  xs={6}
                  style={{
                    borderLeft: "1px solid black",
                    padding: "10px",
                  }}
                >
                  <Grid container justifyContent="space-evenly" alignItems="center">
                    <Etherscan style={{ height: "20px", width: "20px" }} />
                    <Discord style={{ height: "20px", width: "20px" }} />
                    <Opensea style={{ height: "20px", width: "20px" }} />
                  </Grid>
                  {/*  */}
                </CenterItem>

                <CenterItem
                  xs={6}
                  style={{
                    borderLeft: "1px solid black",
                    padding: "10px",
                  }}
                >
                  <Style.GoToAppButton to="/app/drop/0">ENTER APP</Style.GoToAppButton>
                </CenterItem>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Style.RootHeader>
  );
};

const LandingScreenComponent: FC = () => {
  const sceneRef = React.useRef<sceneRef>(null!);

  const img = "models/test.png";

  return (
    <Style.RootLandingPage>
      <Style.Background>
        <Style.LandingPageContentContainer>
          <Style.LandingPageContent>
            <Grid
              item
              xs={12}
              style={{
                height: `calc(100vh - 60px)`,
              }}
            >
              <Grid container flexDirection="column" style={{ height: "100%" }}>
                <Grid item flexGrow={1} style={{ width: "100%" }}>
                  <Grid container style={{ borderBottom: "1px solid black", height: "100%" }}>
                    <Grid item xs={6} style={{ borderRight: "1px solid black" }}>
                      <Grid container style={{ height: "100%" }}>
                        <Grid item xs={4}>
                          <Grid
                            container
                            direction="column"
                            style={{
                              height: "100%",
                              borderRight: "1px solid black",
                            }}
                          >
                            <Grid item>
                              <img src={img} style={{ width: "100%" }} alt="" />
                            </Grid>
                            <Grid item>
                              <Grid container justifyContent="space-between">
                                <Grid item>
                                  <Style.TitleCollection>CryptoPunks</Style.TitleCollection>
                                </Grid>
                                <Grid item>
                                  <Style.TitleCollection>#123</Style.TitleCollection>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <img
                                src={"/models/0.texture.png"}
                                alt=""
                                style={{
                                  width: "100%",
                                  objectFit: "none",
                                  objectPosition: "50% 11%",
                                }}
                              />
                            </Grid>
                            <Grid item>
                              <Grid container justifyContent="space-between">
                                <Grid item>
                                  <Style.TitleCollection>Version</Style.TitleCollection>
                                </Grid>
                                <Grid item>
                                  <Style.TitleCollection>5</Style.TitleCollection>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid
                              item
                              flexGrow={1}
                              style={{ borderTop: "1px solid black", position: "relative" }}
                            >
                              <Style.DiscoverButton>
                                <Grid container alignItems="center">
                                  <>DISCOVER</>
                                  <ArrowRightAltIcon />
                                </Grid>
                              </Style.DiscoverButton>

                              <Grid container direction="column-reverse" style={{ height: "100%" }}>
                                <Grid item>
                                  <Style.TitleDrip
                                    style={{
                                      paddingBottom: "10px",
                                      paddingLeft: "10px",
                                      // borderTop: "1px solid black",
                                    }}
                                  >
                                    DROP #0
                                  </Style.TitleDrip>
                                </Grid>

                                <Grid item>
                                  <Style.DropLive>
                                    <div
                                      style={{
                                        display: "inline-block",
                                        width: "10px",
                                        height: "10px",
                                        marginRight: "5px",
                                        backgroundColor: "#32CD32",
                                        borderRadius: "5px",
                                      }}
                                    />
                                    LIVE
                                  </Style.DropLive>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={8} style={{ position: "relative", overflow: "hidden" }}>
                          <div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            <Circle
                              style={{
                                animation: "rotation 25s infinite linear",
                                width: "55em",
                              }}
                            />
                          </div>
                          <SceneLoader
                            model="/models/model.glb"
                            initialPlaceholderTexture={img}
                            sceneRef={sceneRef}
                            versions={[{ name: "Hey", texture: "/models/0.texture.png" }]}
                            initialVersion={0}
                            initialId={0}
                            initialDropSymbol="Test"
                            initialTokenNameId="Test2"
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={6}>
                      <Grid container flexDirection="column" style={{ height: "100%" }}>
                        <Grid
                          item
                          style={{
                            borderBottom: "1px solid black",
                            backgroundColor: "#B9B9D0",
                          }}
                        >
                          <Style.TextHeader>
                            Designed for the era of ownership, digitalization and fashion.
                          </Style.TextHeader>
                        </Grid>

                        <CenterItem item flexGrow={1} style={{ position: "relative" }}>
                          <img
                            src={circle}
                            style={{
                              position: "absolute",
                              width: "150px",
                              right: 15,
                              top: 15,
                            }}
                            alt=""
                          />
                          <Style.TextFun
                            style={{
                              position: "absolute",
                              left: 15,
                              top: 15,
                            }}
                          >
                            <Style.Tri />
                            Welcome to PREMIER.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
                            pulvinar magna, vel sodales erat.
                            <br />
                          </Style.TextFun>
                          <img src={LogoFull} style={{ width: "100%" }} alt="" />
                        </CenterItem>
                      </Grid>
                    </Grid>
                    {/*  */}

                    {/* <Style.GalleryWrap>
                      {items.map((item, index) => (
                        <Style.GalleryItem
                          key={index}
                          onMouseEnter={() => setHover(index)}
                          onMouseLeave={() => setHover(0)}
                          $onHover={hover === index}
                          img={item}
                        >
                          1
                        </Style.GalleryItem>
                      ))}
                    </Style.GalleryWrap> */}

                    {/*  */}
                  </Grid>
                </Grid>
                <Grid item style={{ width: "100%" }}>
                  <Marquee word="EXCLUSIVE" />
                </Grid>
              </Grid>
            </Grid>
            {/*  */}
          </Style.LandingPageContent>
        </Style.LandingPageContentContainer>
      </Style.Background>
    </Style.RootLandingPage>
  );
};

const DripComponent: FC = () => {
  return (
    <Style.DripComponent>
      <Grid
        container
        style={{ height: "75vh", borderBottom: "1px solid black", borderTop: "1px solid black" }}
      >
        <CenterItem item xs={5} style={{ position: "relative" }}>
          <Style.View2Content>
            <Grid container justifyContent="center">
              <Grid item xs={10} style={{ textAlign: "left" }}>
                Designed for the era of <Sbu>ownership</Sbu>, <Sbu>digitalization</Sbu> and{" "}
                <Sbu>fashion</Sbu>.
                <div style={{ height: "20px", width: "2px" }} />
                <Style.Premier>PREMIER</Style.Premier> subscribe itself into Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Pellentesque congue congue quam, et fermentum
                ante gravida laoreet. Curabitur rhoncus placerat felis ac accumsan. Cras
                consectetur, nisi in maximus venenatis, dui metus tincidunt odio, nec iaculis mi
                tortor eget sapien. Proin maximus dolor at magna vulputate, quis volutpat neque
                sagittis.
              </Grid>
            </Grid>
          </Style.View2Content>
        </CenterItem>
        <CenterItem item xs={7} style={{ borderLeft: "1px solid black" }}>
          {/* <img src={LogoFull} style={{ width: "100%" }} alt="" /> */}
        </CenterItem>
      </Grid>
      <Grid item xs={12} style={{ borderBottom: "1px solid black" }}>
        <Grid container style={{}}>
          <Grid item xs={6}>
            <Grid container justifyContent="center">
              <CenterItem item xs={12}>
                <Style.ViewTitle1>explore.</Style.ViewTitle1>
              </CenterItem>

              <CenterItem item xs={10}>
                <Style.View2Content>
                  <CenterItem container>
                    <Grid item xs={12} style={{ textAlign: "center" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit
                      vestibulum tincidunt. Fusce vehicula sit amet nisl ac faucibus. Nulla
                      facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada
                      fames ac turpis egestas.
                    </Grid>
                  </CenterItem>
                </Style.View2Content>
              </CenterItem>
            </Grid>
          </Grid>

          <CenterItem item xs={6} style={{ borderLeft: "1px solid black" }}>
            <img
              src={img3}
              style={{
                filter: "grayscale(100%)",
                width: "100%",
              }}
              alt=""
            />
          </CenterItem>
        </Grid>
      </Grid>

      <Grid item style={{ width: "100%", borderBottom: "1px solid black" }}>
        <Marquee word="CUSTOM" />
      </Grid>

      <Grid item xs={12} style={{ borderBottom: "1px solid black" }}>
        <Grid container style={{}}>
          <CenterItem item xs={8} style={{ borderLeft: "1px solid black" }}>
            <img
              src={img3}
              style={{
                filter: "grayscale(100%)",
                // width: "100%",
              }}
              alt=""
            />
          </CenterItem>

          <Grid item xs={4}>
            <Grid container justifyContent="center">
              <CenterItem item xs={12}>
                <Style.ViewTitle1>explore.</Style.ViewTitle1>
              </CenterItem>

              <CenterItem item xs={10}>
                <Style.View2Content>
                  <CenterItem container>
                    <Grid item xs={12} style={{ textAlign: "center" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit
                      vestibulum tincidunt. Fusce vehicula sit amet nisl ac faucibus. Nulla
                      facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada
                      fames ac turpis egestas.
                    </Grid>
                  </CenterItem>
                </Style.View2Content>
              </CenterItem>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Style.DripComponent>
  );
};

const Sbu: FC<{ no_u?: boolean; bold?: any }> = ({ children, no_u = true, bold }) => {
  return <Style.Sbu bold={bold}>{no_u ? <>{children}</> : <u>{children}</u>}</Style.Sbu>;
};

export const FooterComponent: FC = () => {
  return (
    <Style.RootFooter>
      <Grid container>
        <Grid item xs={4}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Clickable address="/">
                <LogoTypo style={{ width: "200px" }} />
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
    </Style.RootFooter>
  );
};

const MainComponent: FC = ({ children }) => {
  return (
    <Style.Root>
      <HeaderComponent />
      <LandingScreenComponent />
      <FooterComponent />
    </Style.Root>
  );
};

export default MainComponent;
