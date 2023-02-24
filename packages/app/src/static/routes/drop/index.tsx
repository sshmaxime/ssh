import React, { FC, useEffect, useState } from "react";

import { sceneRefType } from "@/_common/3d/scenes/skate_1";
import { Drop, ListMockTokens } from "@premier/typings";
import { ethers } from "ethers";

import Style from "./style";
import { Grid } from "@mui/material";

import ImgWave from "@/common/assets/images/wave.png";
import CenterItem from "@/_common/components/grid/centerItem";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { animated, useSpring } from "@react-spring/web";
import Clickable from "@/_common/components/clickable";
import Typos from "@/_common/components/typography";
import { textAlign } from "@mui/system";
import SceneLoader, { sceneRef } from "@/_common/3d/scenes/skate_0";

const HomeComponent: FC = ({}) => {
  const [hover, setHover] = useState(0);

  const abc = [
    {
      name: "DROP #0",
      texture:
        "https://sothebys-com.brightspotcdn.com/ec/55/536759b9425ba43535be7da9024e/supreme-blog-top.jpg",
      disabled: false,
      description: "SKATEBOARD",
    },
    // {
    //   name: "DROP #1",
    //   texture: "",
    //   disabled: true,
    //   description: "TBA",
    // },
  ];

  return (
    <Style.Root>
      <Style.HomeScreenContainer>
        <Style.HomeScreen>
          <Grid container>
            <Grid item xs={5}>
              <CenterItem $full>
                <Grid container direction="column">
                  <Grid item>
                    <Typos.Huge style={{ textAlign: "left" }}>DROP</Typos.Huge>
                  </Grid>
                  <div style={{ height: "50px" }} />
                  <Grid item>
                    <CenterItem $full>
                      <Typos.Normal
                        style={{
                          width: "100%",
                          fontSize: "1.25em",
                          paddingLeft: "15px",
                          lineHeight: "1.25em",
                        }}
                      >
                        <b>DROP</b> is a project by <b>PREMIER</b> that creates physical objects out
                        of digital art assets, namely <b>NFT</b>.
                        <br />
                        <br />
                        We collaborate hand to hand with artists and luxury companies to create{" "}
                        <b>custom-made</b>, <b>high end</b> and <b>exclusive</b> physical objects.
                        These objects, named <b>Drip</b>, are released as <b>limited editions</b>{" "}
                        available in the form of <b>Drop</b>, making them highly coveted by
                        individuals but also collectors and art enthusiasts.
                      </Typos.Normal>
                    </CenterItem>
                  </Grid>
                </Grid>
              </CenterItem>
            </Grid>
            <Grid item xs={6}>
              2
            </Grid>
          </Grid>
        </Style.HomeScreen>

        <div style={{ height: "25px" }}></div>

        <Style.HomeScreen>
          <Grid container>
            <Grid item xs={5}>
              <CenterItem $full>
                <Grid container direction="column">
                  <Grid item>
                    <Typos.Huge style={{ textAlign: "left" }}>DROP</Typos.Huge>
                  </Grid>
                  <div style={{ height: "50px" }} />
                  <Grid item>
                    <CenterItem $full>
                      <Typos.Normal
                        style={{
                          width: "100%",
                          fontSize: "1.25em",
                          paddingLeft: "15px",
                          lineHeight: "1.25em",
                        }}
                      >
                        <b>DROP</b> is a project by <b>PREMIER</b> that creates physical objects out
                        of digital art assets, namely <b>NFT</b>.
                        <br />
                        <br />
                        We collaborate hand to hand with artists and luxury companies to create{" "}
                        <b>custom-made</b>, <b>high end</b> and <b>exclusive</b> physical objects.
                        These objects, named <b>Drip</b>, are released as <b>limited editions</b>{" "}
                        available in the form of <b>Drop</b>, making them highly coveted by
                        individuals but also collectors and art enthusiasts.
                      </Typos.Normal>
                    </CenterItem>
                  </Grid>
                </Grid>
              </CenterItem>
            </Grid>
            <Grid item xs={6}>
              2
            </Grid>
          </Grid>
        </Style.HomeScreen>
      </Style.HomeScreenContainer>
    </Style.Root>
  );
};

export default HomeComponent;

// <Grid container style={{ height: "100%" }} columnSpacing={10}>

// <Grid item xs={7}>
//   <CenterItem $full>
//     <Style.GalleryWrap>
//       {abc.map((item, index) => (
//         <Style.GalleryItem
//           key={index}
//           disabled={item.disabled}
//           onMouseEnter={() => !item.disabled && setHover(index)}
//           onMouseLeave={() => {}}
//           onClick={() => {}}
//           $onHover={hover === index}
//           color={item.texture}
//           style={{
//             borderRadius: "5px",
//           }}
//         >
//           <Style.GalleryItemContainer>
//             <Grid
//               container
//               direction="column-reverse"
//               alignItems="space-between"
//               alignContent="center"
//               rowSpacing={2}
//               style={{ height: "100%" }}
//             >
//               <Grid item xs={1}>
//                 <CenterItem style={{ height: "100%" }}>
//                   <div
//                     style={{ width: "2px", height: "100%", backgroundColor: "white" }}
//                   >
//                     &nbsp;
//                   </div>
//                 </CenterItem>
//               </Grid>
//               <Grid item>
//                 <Style.GalleryItemTitle>{item.name}</Style.GalleryItemTitle>
//               </Grid>

//               <Grid item flexGrow={1}>
//                 <CenterItem style={{ height: "100%" }}>
//                   <div
//                     style={{ width: "2px", height: "100%", backgroundColor: "white" }}
//                   >
//                     &nbsp;
//                   </div>
//                 </CenterItem>
//               </Grid>
//               <Grid item>
//                 <CenterItem>
//                   <Style.LiveTitle>{item.disabled ? "TBA" : "LIVE"}</Style.LiveTitle>
//                 </CenterItem>
//               </Grid>
//             </Grid>
//           </Style.GalleryItemContainer>

//           {/* {hover === index && ( */}
//           <Style.ContainerExplore isVisible={hover === index}>
//             <Style.ItemName>{item.description}</Style.ItemName>
//             <Clickable address={`/app/drop/0`} hoverAnimation={false}>
//               {!item.disabled && (
//                 <Style.ButtonDiscover>
//                   <Grid container justifyContent="space-between">
//                     <Grid item>EXPLORE</Grid>
//                   </Grid>
//                 </Style.ButtonDiscover>
//               )}
//             </Clickable>
//           </Style.ContainerExplore>

//           {/* )} */}
//         </Style.GalleryItem>
//       ))}
//     </Style.GalleryWrap>
//   </CenterItem>
// </Grid>
//
// </Grid>
