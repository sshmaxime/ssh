import React, { FC, useEffect } from "react";

import { Grid, useThemeProps } from "@mui/material";

import CenterItem from "@/_common/components/grid/centerItem";

import Clickable from "@/_common/components/clickable";
import Style from "./style";

import SceneLoader, { sceneRef } from "@/_common/3d/scenes/skate_0";

import Typos from "@/_common/components/typography";
import ArrowIcon from "@mui/icons-material/ExpandMore";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { ListMockTokens } from "@premier/typings";
import { Center } from "@react-three/drei";
import { useTheme } from "@/_common/theme/theme";

const DemoPlaceholderList: {
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
    item: "BAYC #7693",
    img: "https://i.seadn.io/gae/awlHMs7ZVRLxuiJJ84CylogTTmTYRUTt_pPdWI6oED_60LOGSnH5pnQxpceQcQvUQL7uM4BQlPaBJuvn-pq7xkatOuqj2_nc3SCkeKk?auto=format&w=1920",
  },
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
  const theme = useTheme();

  const sceneRef = React.useRef<sceneRef>(null!);

  const [currentItem, setCurrentItem] = React.useState(0);
  const [currentItem2, setCurrentItem2] = React.useState(0);

  useEffect(() => {
    let rotationInterval = setInterval(() => {
      if (currentItem === DemoPlaceholderList.length - 1) {
        setCurrentItem(0);
        sceneRef.current._changeTexturePlaceholder(DemoPlaceholderList[0].img);
      } else {
        setCurrentItem(currentItem + 1);
        sceneRef.current._changeTexturePlaceholder(DemoPlaceholderList[currentItem + 1].img);
      }
    }, 5000);

    //Clean up can be done like this
    return () => {
      clearInterval(rotationInterval);
    };
  }, [currentItem]); // Add dependencies here

  return (
    <Style.Root>
      <Grid container style={{ height: "100%" }}>
        <Grid item xs={12} md={9} lg={8} xl={7}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            rowSpacing={4}
            sx={{ height: { lg: "90%" }, marginTop: { xs: "25px", lg: "0px" } }}
            // style={{ height: "100%" }}
          >
            <Grid item>
              <Typos.Big>
                Get Your
                <br />
                <b style={{ fontWeight: 700, color: "red" }}>
                  ${DemoPlaceholderList[currentItem].item}
                </b>{" "}
                <br />
                On The wall !
              </Typos.Big>
            </Grid>

            <Grid item>
              <Style.ContainerExempleDrip>
                <Grid container columnSpacing={2} rowSpacing={2} direction="row-reverse">
                  <Grid item xs={12} md={7} flexGrow={1}>
                    <Grid container direction="column" style={{ height: "100%" }}>
                      <Grid item flexGrow={1} style={{ paddingTop: "5px", paddingBottom: "25px" }}>
                        <Grid container justifyContent="space-between">
                          <Grid>
                            <Typos.Normal
                              style={{
                                fontSize: "2em",
                                letterSpacing: "-0.025em",
                                fontWeight: 800,
                                color: theme.colors.primary,
                                backgroundColor: "red",
                                padding: "5px",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                                borderRadius: "5px",
                              }}
                            >
                              Drop #0
                            </Typos.Normal>
                          </Grid>
                          <Grid>
                            <Typos.Normal style={{ fontSize: "0.8em", color: "grey" }}>
                              0 / 100 (Minted)
                            </Typos.Normal>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item style={{ paddingBottom: "10px" }}>
                        <Style.ContainerExempleDripContainer style={{}}>
                          <Style.InfoDivItemName>PLACEHOLDER</Style.InfoDivItemName>
                          <Style.ContainerInfoDiv>
                            <Style.ContainerContract>
                              <span style={{ fontWeight: 500 }}>Collection: </span>
                              {DemoPlaceholderList[currentItem].collectionName}
                            </Style.ContainerContract>
                            <div style={{ height: "5px" }} />

                            <Style.ContainerContract>
                              <span style={{ fontWeight: 500 }}>Contract: </span>{" "}
                              {DemoPlaceholderList[currentItem].contract}
                            </Style.ContainerContract>
                            <div style={{ height: "5px" }} />

                            <Style.ContainerContract>
                              <span style={{ fontWeight: 500 }}>Item: </span>
                              {DemoPlaceholderList[currentItem].item}
                            </Style.ContainerContract>
                          </Style.ContainerInfoDiv>
                        </Style.ContainerExempleDripContainer>
                      </Grid>

                      <Grid item style={{ paddingBottom: "10px" }}>
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

                      <Grid item>
                        <Style.ButtonDiscover>Mint Yours !</Style.ButtonDiscover>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <img
                      src={DemoPlaceholderList[currentItem].img}
                      style={{ width: "100%", height: "100%" }}
                      alt=""
                    />
                  </Grid>
                </Grid>
              </Style.ContainerExempleDrip>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          lg={4}
          xl={5}
          style={{ height: `calc(100vh - ${theme.header.height}` }}
        >
          <SceneLoader
            sceneRef={sceneRef}
            model="models/model.glb"
            initialVersion={0}
            initialId={0}
            initialPlaceholderTexture={DemoPlaceholderList[0].img}
            versions={[{ name: "0", texture: "models/0.texture.png" }]}
            initialDropSymbol="random"
            initialTokenNameId="random"
          />
        </Grid>

        <Grid item xs={12} style={{ paddingTop: "50px", paddingBottom: "50px" }}>
          <Typos.NormalBig style={{ fontWeight: 700 }}>
            We collaborate hand to hand with artists and luxury companies to create{" "}
            <span style={{ color: "red" }}>custom-made</span>,{" "}
            <span style={{ color: "red" }}>unique</span>,{" "}
            <span style={{ color: "red" }}>high end</span> and{" "}
            <span style={{ color: "red" }}>exlusive</span> physical objects from your digital
            possessions.
          </Typos.NormalBig>
        </Grid>
      </Grid>
    </Style.Root>
  );
};

export default HomeComponent;
