import React, { FC, Fragment, useEffect, useState } from "react";

import { Grid } from "@mui/material";

// styles
import Style from "./style";

import skateboard from "../_utils/assets/images/untitled.png";
import img2 from "../_utils/assets/images/imgroom.jpg";
import img3 from "../_utils/assets/images/wave.png";
import img4 from "../_utils/assets/images/van.png";
import LogoFull from "../_utils/assets/images/logo-full.svg";
import { ReactComponent as LogoTypo } from "../_utils/assets/images/logo-typo.svg";
import { ReactComponent as LogoIcon } from "../_utils/assets/images/logo-icon.svg";
import { ReactComponent as Sun } from "../_utils/assets/icons/sun.svg";
import { ReactComponent as Circle } from "../_utils/assets/icons/circle.svg";
import { ReactComponent as Etherscan } from "../_utils/assets/icons/etherscan.svg";
import { ReactComponent as Opensea } from "../_utils/assets/icons/opensea.svg";
import { ReactComponent as Discord } from "../_utils/assets/icons/discord.svg";

import { Textfit } from "react-textfit";

import Ticker from "react-ticker";
import SceneLoader, { sceneRef } from "@/_3d/scenes/skate_0";

type props = {};

const LandingScreenComponent: FC<props> = () => {
  const [hover, setHover] = useState(0);

  const sceneRef = React.useRef<sceneRef>(null!);

  const img = "models/test.png";

  useEffect(() => {
    // sceneRef.current._changeTexturePlaceholder("https://ik.imagekit.io/bayc/assets/ape1.png");
  }, []);

  const items = [img4, img4, img4];
  return (
    <Style.LandingScreenComponent>
      <Style.Background>
        <Style.LandingPageContentContainer>
          <Style.LandingPageContent>
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
                      <Style.CenteredGridItem
                        xs={10}
                        justifyContent="left"
                        style={{ borderRight: "1px solid black", padding: "10px" }}
                      >
                        <LogoTypo style={{ width: "150px", color: "black" }} />
                      </Style.CenteredGridItem>
                      <Style.CenteredGridItem
                        xs={2}
                        style={{ borderRight: "1px solid black", padding: "10px" }}
                      >
                        <Sun style={{ width: "25px" }} />
                      </Style.CenteredGridItem>
                    </Grid>
                  </Grid>

                  <Style.CenteredGridItem flexGrow={1}>
                    <Grid container justifyContent="space-evenly">
                      <Style.CenteredGridItem item>
                        <Style.TextLinkHeader>DRIP</Style.TextLinkHeader>
                      </Style.CenteredGridItem>
                      <Style.CenteredGridItem item>
                        <Style.TextLinkHeader>SHOP</Style.TextLinkHeader>
                      </Style.CenteredGridItem>
                      <Style.CenteredGridItem item>
                        <Style.TextLinkHeader>ABOUT</Style.TextLinkHeader>
                      </Style.CenteredGridItem>
                      <Style.CenteredGridItem item>
                        <Style.TextLinkHeader>ROADMAP</Style.TextLinkHeader>
                      </Style.CenteredGridItem>
                      <Style.CenteredGridItem item>
                        <Style.TextLinkHeader>TEAM</Style.TextLinkHeader>
                      </Style.CenteredGridItem>
                    </Grid>
                  </Style.CenteredGridItem>

                  <Grid item xs={2}>
                    <Grid container style={{ height: "100%" }}>
                      <Style.CenteredGridItem
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
                      </Style.CenteredGridItem>

                      <Style.CenteredGridItem
                        xs={6}
                        style={{
                          borderLeft: "1px solid black",
                          padding: "10px",
                        }}
                      >
                        <Style.GoToAppButton to="/app/drop/0">ENTER APP</Style.GoToAppButton>
                      </Style.CenteredGridItem>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

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
                              <Grid item flexGrow={1} style={{ borderTop: "1px solid black" }}>
                                <Grid
                                  container
                                  direction="column-reverse"
                                  style={{ height: "100%" }}
                                >
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
                        <Grid container direction="column">
                          <Grid item flexGrow={1}>
                            <Grid container direction="column">
                              <Grid item>
                                <Style.TextHeader>
                                  <Sbu>Web3</Sbu>
                                  <br />
                                  <Sbu>Fashion</Sbu>
                                  <br />
                                  <Sbu>Digitalization</Sbu>
                                </Style.TextHeader>
                                {/* Designed for the era of <Sbu>ownership</Sbu>,{" "}
                                        <Sbu>digitalization</Sbu> and <Sbu>fashion</Sbu>. */}
                              </Grid>
                              <Grid flexGrow={1}>How does it works</Grid>
                              <Style.CenteredGridItem
                                item
                                xs={3}
                                style={{
                                  width: "100%",
                                  backgroundImage: `url(${img3})`,
                                  backgroundPosition: "center",
                                  backgroundSize: "cover",
                                  backgroundRepeat: "none",
                                  borderTop: "1px solid black",
                                }}
                              >
                                <Style.ButtonCallToAction>SHOP</Style.ButtonCallToAction>
                              </Style.CenteredGridItem>
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
                    </Grid>
                  </Grid>
                  <Grid item style={{ width: "100%" }}>
                    <LabsComponent word="EXCLUSIVE" />
                  </Grid>
                </Grid>
              </Grid>
              {/*  */}
            </Grid>
          </Style.LandingPageContent>
        </Style.LandingPageContentContainer>
      </Style.Background>
    </Style.LandingScreenComponent>
  );
};

const DripComponent: FC<props> = () => {
  return (
    <Style.DripComponent>
      <Grid
        container
        style={{ height: "75vh", borderBottom: "1px solid black", borderTop: "1px solid black" }}
      >
        <Style.CenteredGridItem item xs={6} style={{ borderRight: "1px solid black" }}>
          <img src={LogoFull} style={{ width: "100%" }} alt="" />
        </Style.CenteredGridItem>

        <Style.CenteredGridItem item xs={6} style={{ marginBottom: "50px" }}>
          <Style.View2Content>
            <Grid container justifyContent="center">
              <Grid item xs={12} style={{ textAlign: "center" }}>
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
        </Style.CenteredGridItem>
      </Grid>

      <Grid container justifyContent="center">
        <div
          style={{
            width: "25%",
            height: "1px",
            backgroundColor: "black",
            marginBottom: "125px",
            marginTop: "125px",
            opacity: "25%",
          }}
        />
      </Grid>

      <Style.DripComponentP3 container spacing={1}>
        <Grid item xs={4}>
          <Style.ViewTitle>because everyone has a dream.</Style.ViewTitle>
          <br />
          <Style.ViewTitle2>and this is where mine started -</Style.ViewTitle2>
          <Style.View2Content>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <img
                  src={img2}
                  style={{
                    filter: "grayscale(100%)",
                    width: "100%",
                  }}
                  alt=""
                />
              </Grid>
            </Grid>
          </Style.View2Content>
        </Grid>

        <Grid item xs={4}>
          <Style.ViewTitle>because whatever you do.</Style.ViewTitle>
          <br />
          <Style.ViewTitle2>some people will never like it -</Style.ViewTitle2>
          <Style.View2Content>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <img
                  src={img2}
                  style={{
                    filter: "grayscale(100%)",
                    width: "100%",
                  }}
                  alt=""
                />
              </Grid>
            </Grid>
          </Style.View2Content>
        </Grid>

        <Grid item xs={4}>
          <Style.ViewTitle>because you can die tomorrow.</Style.ViewTitle>
          <br />
          <Style.ViewTitle2>do your own thing -</Style.ViewTitle2>
          <Style.View2Content>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <img
                  src={img2}
                  style={{
                    filter: "grayscale(100%)",
                    width: "100%",
                  }}
                  alt=""
                />
              </Grid>
            </Grid>
          </Style.View2Content>
        </Grid>
      </Style.DripComponentP3>

      {/* <Grid container justifyContent="center">
        <div
          style={{
            width: "25%",
            height: "1px",
            backgroundColor: "black",
            marginBottom: "125px",
            marginTop: "125px",
          }}
        />
      </Grid>

      <Grid item xs={12} style={{ marginBottom: "25px" }}>
        <Style.DripComponentP2>
          <Grid item xs={12} style={{ paddingTop: "25px", marginBottom: "100px" }}>
            <Grid container justifyContent="center">
              <Style.View2Content>
                <span style={{ fontSize: "3em" }}>
                  <Sbu bold={900}>DRIP</Sbu>{" "}
                </span>
                <span style={{ fontSize: "1.25em" }}>
                  by <Style.Premier>PREMIER</Style.Premier>
                </span>
              </Style.View2Content>
            </Grid>
          </Grid>

          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Style.View2Content>
              A <Sbu>DRIP</Sbu> is an <Sbu>exclusive</Sbu> and <Sbu>limited</Sbu> item{" "}
              <Sbu>customizable</Sbu> with digital belongings.
              <br />
              <br />
              Available on the <Sbu>ethereum</Sbu> blockchain through its smart-contract, a{" "}
              <Sbu>DRIP</Sbu> is digitally represented by a <Sbu>3D model</Sbu>, fully ready to be
              used in any <Sbu>game</Sbu> or <Sbu>digital world</Sbu> as well as backed by a{" "}
              <Sbu>1/1 physical asset</Sbu> at any time <Sbu>redeemable</Sbu>.
            </Style.View2Content>
          </Grid>
        </Style.DripComponentP2>
      </Grid> */}
      <Grid container justifyContent="center">
        <div
          style={{
            width: "25%",
            height: "1px",
            backgroundColor: "black",
            marginBottom: "125px",
            marginTop: "125px",
            opacity: "25%",
          }}
        />
      </Grid>

      <Style.DripComponentP3 item xs={12} style={{ marginBottom: "75px" }}>
        <Grid container justifyContent="center">
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
                <Style.ViewTitle1>explore.</Style.ViewTitle1>
              </Grid>
              <Grid item xs={12}>
                <Style.View2Content>
                  <Grid container justifyContent="center">
                    <Grid item xs={12} style={{ textAlign: "center" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit
                      vestibulum tincidunt. Fusce vehicula sit amet nisl ac faucibus. Nulla
                      facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada
                      fames ac turpis egestas.
                    </Grid>
                  </Grid>
                </Style.View2Content>
              </Grid>
            </Grid>
          </Grid>

          <Grid item flexGrow={1} />

          <Grid item xs={7}>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <img
                  src={img4}
                  style={{
                    filter: "grayscale(100%)",
                    width: "100%",
                  }}
                  alt=""
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Style.DripComponentP3>

      <Style.DripComponentP3 item xs={12} style={{ marginBottom: "75px" }}>
        <Grid container justifyContent="center">
          <Grid item xs={7}>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <img
                  src={img4}
                  style={{
                    filter: "grayscale(100%)",
                    width: "100%",
                  }}
                  alt=""
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item flexGrow={1} />

          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
                <Style.ViewTitle1>thrive.</Style.ViewTitle1>
              </Grid>
              <Grid item xs={12}>
                <Style.View2Content>
                  <Grid container justifyContent="center">
                    <Grid item xs={12} style={{ textAlign: "center" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit
                      vestibulum tincidunt. Fusce vehicula sit amet nisl ac faucibus. Nulla
                      facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada
                      fames ac turpis egestas.
                    </Grid>
                  </Grid>
                </Style.View2Content>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Style.DripComponentP3>

      <Style.DripComponentP3 item xs={12} style={{ marginBottom: "75px" }}>
        <Grid container justifyContent="center">
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
                <Style.ViewTitle1>live.</Style.ViewTitle1>
              </Grid>
              <Grid item xs={12}>
                <Style.View2Content>
                  <Grid container justifyContent="center">
                    <Grid item xs={12} style={{ textAlign: "center" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit
                      vestibulum tincidunt. Fusce vehicula sit amet nisl ac faucibus. Nulla
                      facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada
                      fames ac turpis egestas.
                    </Grid>
                  </Grid>
                </Style.View2Content>
              </Grid>
            </Grid>
          </Grid>

          <Grid item flexGrow={1} />

          <Grid item xs={7}>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <img
                  src={img4}
                  style={{
                    filter: "grayscale(100%)",
                    width: "100%",
                  }}
                  alt=""
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Style.DripComponentP3>

      <Grid container justifyContent="center">
        <div
          style={{
            width: "80%",
            height: "1px",
            backgroundColor: "black",
            marginTop: "125px",
            opacity: "25%",
          }}
        />
      </Grid>
    </Style.DripComponent>
  );
};

const Sbu: FC<{ no_u?: boolean; bold?: any }> = ({ children, no_u = true, bold }) => {
  return <Style.Sbu bold={bold}>{no_u ? <>{children}</> : <u>{children}</u>}</Style.Sbu>;
};

const LabsComponent: FC<{
  word: any;
  direction?: "toLeft" | "toRight";
  fontSize?: string;
  speed?: number;
}> = ({ word, direction = "toLeft", fontSize, speed }) => {
  return (
    <Style.LabsComponent>
      <Ticker direction={direction} speed={speed}>
        {({ index }) => (
          <>
            <Style.Sentence fontSize={fontSize}>{word}</Style.Sentence>
          </>
        )}
      </Ticker>
    </Style.LabsComponent>
  );
};

const MainComponent: FC<props> = ({ children }) => {
  return (
    <Style.Root>
      <LandingScreenComponent />
      <DripComponent />
    </Style.Root>
  );
};

export default MainComponent;
