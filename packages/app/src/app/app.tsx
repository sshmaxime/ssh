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
import { ReactComponent as Etherscan } from "../_utils/assets/icons/etherscan.svg";
import { ReactComponent as Opensea } from "../_utils/assets/icons/opensea.svg";
import { ReactComponent as Discord } from "../_utils/assets/icons/discord.svg";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import Marquee from "react-fast-marquee";

type props = {};

const LandingScreenComponent: FC<props> = () => {
  const [hover, setHover] = useState(0);

  const items = [img3, img3, img3, img3];
  return (
    <Style.LandingScreenComponent>
      <Style.Background>
        <Style.DripComponentP3>
          <Style.LandingPageContentContainer>
            <Style.LandingPageContent>
              <Style.Header>
                <Grid container>
                  <Grid item xs={12} style={{ border: "1px solid black" }}>
                    <Grid container justifyContent={"space-between"}>
                      <Grid item xs={2}>
                        <Grid container>
                          <Style.CenteredGridItem
                            xs={6}
                            style={{ borderRight: "1px solid black", padding: "10px" }}
                          >
                            <Style.TextStyle>10:45 AM</Style.TextStyle>
                          </Style.CenteredGridItem>
                          <Style.CenteredGridItem
                            xs={6}
                            style={{ borderRight: "1px solid black", padding: "10px" }}
                          >
                            <Sun />
                          </Style.CenteredGridItem>
                        </Grid>
                      </Grid>

                      <Style.CenteredGridItem>
                        <LogoIcon style={{ width: "50px", color: "black" }} />
                      </Style.CenteredGridItem>

                      <Grid item xs={2}>
                        <Grid container>
                          <Style.CenteredGridItem
                            xs={6}
                            style={{ borderLeft: "1px solid black", padding: "10px" }}
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
                            style={{ borderLeft: "1px solid black", padding: "10px" }}
                          >
                            <Style.TextStyle>Worldwide</Style.TextStyle>
                          </Style.CenteredGridItem>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ borderLeft: "1px solid black", borderRight: "1px solid black" }}
                  >
                    <LabsComponent word="exclusive" />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ borderLeft: "1px solid black", borderRight: "1px solid black" }}
                  >
                    <Style.TitleHeader>ICI</Style.TitleHeader>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      border: "1px solid black",
                      borderBottom: "none",
                    }}
                  >
                    <Grid container style={{ borderBottom: "1px solid black" }}>
                      <Grid
                        item
                        xs={6}
                        style={{ padding: "2.5px", borderRight: "1px solid black" }}
                      >
                        <Style.GalleryWrap>
                          {items.map((item, index) => (
                            <Style.GalleryItem
                              key={index}
                              onMouseEnter={() => setHover(index)}
                              onMouseLeave={() => setHover(0)}
                              $onHover={hover === index}
                              img={item}
                            />
                          ))}
                        </Style.GalleryWrap>
                      </Grid>

                      <Grid item xs={6} style={{ height: "50vh", padding: "2.5px" }}>
                        <Grid container direction="column" style={{ height: "100%" }}>
                          <Style.CenteredGridItem
                            item
                            xs={6}
                            style={{
                              borderBottom: "1px solid black",
                              backgroundImage: `url(${img4})`,
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "none",
                            }}
                          >
                            <Style.ButtonCallToAction>SHOP</Style.ButtonCallToAction>
                          </Style.CenteredGridItem>
                          <Style.CenteredGridItem item xs={6}>
                            <div style={{ fontSize: "15px", letterSpacing: "-0.01px" }}>
                              Designed for the era of <Sbu>ownership</Sbu>,{" "}
                              <Sbu>digitalization</Sbu> and <Sbu>fashion</Sbu>.
                            </div>
                          </Style.CenteredGridItem>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} style={{ paddingTop: "2.5vh" }}>
                    <Grid container flexDirection="column">
                      <Grid item style={{ marginBottom: "15px" }}>
                        <Style.ButtonCallToAction>DISCOVER</Style.ButtonCallToAction>
                      </Grid>
                      <Grid item style={{ display: "grid", justifyContent: "center" }}>
                        <ArrowRightAltIcon
                          style={{
                            fontSize: "0.75em",
                            animation: "bounce 2s infinite",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Style.Header>
            </Style.LandingPageContent>
          </Style.LandingPageContentContainer>
        </Style.DripComponentP3>
        <Style.Triangle />
      </Style.Background>
    </Style.LandingScreenComponent>
  );
};

const DripComponent: FC<props> = () => {
  return (
    <Style.DripComponent>
      <Style.DripComponentP2>
        <Grid item xs={12} style={{ paddingTop: "25px", marginBottom: "100px" }}>
          <Grid container justifyContent="center">
            <img src={LogoFull} style={{ width: "600px" }} alt="" />
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ marginBottom: "50px" }}>
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
        </Grid>

        <Grid item xs={12}>
          <Style.View2Content>
            <Grid container justifyContent="center">
              <Grid item xs={10} style={{ textAlign: "center" }}>
                <Style.ButtonCallToAction>OUR CONCEPTS</Style.ButtonCallToAction>
              </Grid>
            </Grid>
          </Style.View2Content>
        </Grid>
      </Style.DripComponentP2>

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

const LabsComponent: FC<{ word: any }> = ({ word }) => {
  return (
    <div>
      <Style.LabsComponent>
        <Marquee gradient={false} speed={60}>
          <Style.Sentence>
            {[...Array(100)].map(() => (
              <>
                {word}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </>
            ))}
          </Style.Sentence>
        </Marquee>
      </Style.LabsComponent>
    </div>
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
