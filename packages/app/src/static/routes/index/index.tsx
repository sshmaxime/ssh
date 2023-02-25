import React, { FC, useEffect } from "react";

import { Grid } from "@mui/material";

import CenterItem from "@/_common/components/grid/centerItem";

import Clickable from "@/_common/components/clickable";
import Style from "./style";

import SceneLoader, { sceneRef } from "@/_common/3d/scenes/skate_0";

import Typos from "@/_common/components/typography";
import ArrowIcon from "@mui/icons-material/ExpandMore";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { ListMockTokens } from "@premier/typings";
import { Center } from "@react-three/drei";

const DemoItemList: {
  collectionName: string;
  collectionSymbol: string;
  contract: string;
  item: string;
  img: string;
}[] = [
  {
    collectionName: "Bored Ape Yatch Club",
    collectionSymbol: "BAYC",
    contract: "0xbc4c...f13d",
    item: "BAYC #6268",
    img: "models/placeholder.png",
  },
  {
    collectionName: "Bored Ape Yatch Club",
    collectionSymbol: "BAYC",
    contract: "0xbc4c...f13d",
    item: "BAYC #8663",
    img: ListMockTokens.BoredApe.tokens[8663],
  },
  {
    collectionName: "Bored Ape Yatch Club",
    collectionSymbol: "BAYC",
    contract: "0xbc4c...f13d",
    item: "BAYC #7693",
    img: "https://i.seadn.io/gae/awlHMs7ZVRLxuiJJ84CylogTTmTYRUTt_pPdWI6oED_60LOGSnH5pnQxpceQcQvUQL7uM4BQlPaBJuvn-pq7xkatOuqj2_nc3SCkeKk?auto=format&w=1920",
  },
  {
    collectionName: "Bored Ape Yatch Club",
    collectionSymbol: "BAYC",
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
      <Style.HomeScreenContainer>
        <Grid container style={{ height: "100%" }}>
          <Style.GridWholeHeight item xs={12}>
            <Grid
              container
              style={{ height: "100%" }}
              direction="column"
              justifyContent="space-between"
            >
              <Grid item flexGrow={1}>
                <CenterItem $full alignContent="normal">
                  <Grid container>
                    <Grid item xs={12}>
                      <Typos.Big style={{ textAlign: "center" }}>
                        WEB3
                        <br />
                        STUDIO
                      </Typos.Big>
                    </Grid>
                  </Grid>
                </CenterItem>
              </Grid>

              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item xs={2}>
                    <Typos.NormalBold>PREMIER</Typos.NormalBold>
                    <Typos.NormalBold>PREMIER</Typos.NormalBold>
                    <Typos.NormalBold>PREMIER</Typos.NormalBold>
                    <Typos.NormalBold>PREMIER</Typos.NormalBold>
                    <Typos.NormalBold>PREMIER</Typos.NormalBold>
                  </Grid>
                  <Grid item style={{ display: "flex", alignItems: "end" }}>
                    <ArrowIcon
                      style={{ animation: "bounce 2s ease infinite", fontSize: "1.5em" }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    style={{ display: "flex", alignItems: "end", justifyContent: "end" }}
                  >
                    <Typos.NormalBold>2023</Typos.NormalBold>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Style.GridWholeHeight>

          <Style.Grid0 item xs={12}>
            <CenterItem>
              <Typos.NormalBig>
                We are creating a world that is not only technologically advanced, but also socially
                conscious. We are firm believers that by integrating cutting-edge technology with
                the world's resources, we can not only improve the lives of individuals but also
                contribute to the greater good. We are committed to working tirelessly to ensure
                that we leave a positive impact on the world.
              </Typos.NormalBig>
            </CenterItem>
          </Style.Grid0>
        </Grid>
      </Style.HomeScreenContainer>
    </Style.Root>
  );
};

export default HomeComponent;

// <Grid container style={{ height: "100%" }}>
// <Grid item xs={6} xl={8} style={{ height: "100%" }}>
//   <Grid container direction="column-reverse" justifyContent="space-between">
//     {/* <Grid item>
//       <Typos.NormalBig>
//         Get
//         <br />
//         Your {"[NFTs]"}
//         <br />
//         On The Wall !
//       </Typos.NormalBig>
//     </Grid> */}

//     <Grid item>
//       <Style.ContainerExempleDrip>
//         <Grid container columnSpacing={1} direction="row-reverse">
//           <Grid item xs={7}>
//             <Grid container direction="column" style={{ height: "100%" }}>
//               <Grid item flexGrow={1}>
//                 <Style.ContainerExempleDripContainer style={{ paddingTop: "10px" }}>
//                   <Style.InfoDivItemName>PLACEHOLDER</Style.InfoDivItemName>
//                   <Style.ContainerInfoDiv>
//                     <Style.ContainerContract>
//                       <span style={{ fontWeight: 500 }}>Collection: </span>
//                       {DemoItemList[currentItem].collectionName}
//                     </Style.ContainerContract>
//                     <div style={{ height: "5px" }} />

//                     <Style.ContainerContract>
//                       <span style={{ fontWeight: 500 }}>Contract: </span>{" "}
//                       {DemoItemList[currentItem].contract}
//                     </Style.ContainerContract>
//                     <div style={{ height: "5px" }} />

//                     <Style.ContainerContract>
//                       <span style={{ fontWeight: 500 }}>Item: </span>
//                       {DemoItemList[currentItem].item}
//                     </Style.ContainerContract>
//                   </Style.ContainerInfoDiv>
//                 </Style.ContainerExempleDripContainer>
//               </Grid>

//               <Grid item xs={3}>
//                 <Style.ContainerExempleDripContainer>
//                   <Style.InfoDivItemName>DECK</Style.InfoDivItemName>
//                   <Style.GalleryWrap>
//                     <Style.GalleryItem
//                       $onHover={false}
//                       color={"models/0.texture.png"}
//                       style={{
//                         height: "50px",
//                         borderRadius: "5px",
//                       }}
//                     />
//                   </Style.GalleryWrap>
//                 </Style.ContainerExempleDripContainer>
//               </Grid>
//             </Grid>
//           </Grid>
//           <Grid item xs={5}>
//             <img
//               src={DemoItemList[currentItem].img}
//               style={{ width: "100%", height: "100%" }}
//               alt=""
//             />
//           </Grid>
//         </Grid>
//       </Style.ContainerExempleDrip>
//     </Grid>

//     <Grid item>
//       <Typos.Big>DROP</Typos.Big>
//       <div style={{ height: "15px" }} />

//       <Typos.Normal style={{ marginLeft: "15px", marginRight: "50px" }}>
//         Your <b>NFTs</b> are cool but you would like to <b>showcase them</b> in your
//         house, right ? Yeah, <b>we feel the same way ...</b>
//         <div style={{ height: "1vh" }} />
//         Our very <b>exclusive</b> and <b>limited</b> drops let you create
//         <b> real life assets</b> out of your NFTs.
//         <div style={{ height: "1vh" }} />
//         Bring them to <b>life</b>.
//       </Typos.Normal>

//       <div style={{ height: "20px" }} />

//       <div style={{ display: "inline-block", marginLeft: "15px" }}>
//         <Clickable address="/drop">
//           <Grid
//             container
//             alignItems="center"
//             style={{
//               backgroundColor: "black",
//               color: "white",
//               padding: "1px",
//               paddingLeft: "20px",
//               paddingRight: "20px",
//               borderRadius: "5px",
//             }}
//           >
//             <Grid item>
//               <Style.SubTitle4>DISCOVER NOW</Style.SubTitle4>
//             </Grid>
//             <CenterItem item style={{ marginLeft: "10px" }}>
//               <ArrowRightAltIcon />
//             </CenterItem>
//           </Grid>
//         </Clickable>
//       </div>
//     </Grid>
//   </Grid>
// </Grid>
// <Grid item xs={6} xl={4}>
//   <SceneLoader
//     sceneRef={sceneRef}
//     model="models/model.glb"
//     initialVersion={0}
//     initialId={0}
//     initialPlaceholderTexture={DemoItemList[0].img}
//     versions={[{ name: "0", texture: "models/0.texture.png" }]}
//     initialDropSymbol="random"
//     initialTokenNameId="random"
//   />
// </Grid>
// </Grid>
