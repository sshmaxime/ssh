import { FC, useState } from "react";

import { sceneRefType } from "@/_3d/scenes/skate_1";
import { Drop } from "@sshlabs/typings";
import { ethers } from "ethers";

import Style from "./style";
import { Grid } from "@mui/material";

import ImgWave from "@/_utils/assets/images/wave.png";
import CenterItem from "@/_utils/components/grid/centerItem";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const HomeComponent: FC = ({}) => {
  const [hover, setHover] = useState(0);

  const abc = [
    {
      name: "DROP #0",
      texture:
        "https://sothebys-com.brightspotcdn.com/ec/55/536759b9425ba43535be7da9024e/supreme-blog-top.jpg",
      disabled: false,
    },
    {
      name: "DROP #1",
      texture: "",
      disabled: true,
    },
    {
      name: "DROP #2",
      texture: "",
      disabled: true,
    },
    {
      name: "DROP #3",
      texture: "",
      disabled: true,
    },
  ];

  return (
    <Style.Root>
      <CenterItem style={{ height: "100%" }}>
        <Style.GalleryWrapContainer>
          <Style.GalleryWrap>
            {abc.map((item, index) => (
              <Style.GalleryItem
                key={index}
                disabled={item.disabled}
                onMouseEnter={() => !item.disabled && setHover(index)}
                onMouseLeave={() => {}}
                onClick={() => {}}
                $onHover={hover === index}
                color={item.texture}
                style={{
                  borderRadius: "5px",
                }}
              >
                <Style.GalleryItemContainer>
                  <Grid
                    container
                    direction="column-reverse"
                    alignItems="space-between"
                    alignContent="center"
                    rowSpacing={2}
                    style={{ height: "100%" }}
                  >
                    <Grid item xs={1}>
                      <CenterItem style={{ height: "100%" }}>
                        <div style={{ width: "5px", height: "100%", backgroundColor: "white" }}>
                          &nbsp;
                        </div>
                      </CenterItem>
                    </Grid>
                    <Grid item>
                      <Style.GalleryItemTitle>{item.name}</Style.GalleryItemTitle>
                    </Grid>
                    <Grid item xs={1}>
                      <CenterItem style={{ height: "100%" }}>
                        <div style={{ width: "5px", height: "100%", backgroundColor: "white" }}>
                          &nbsp;
                        </div>
                      </CenterItem>
                    </Grid>
                    <Grid item style={{ color: "white" }} flexGrow={1}>
                      <CenterItem>
                        <Style.LiveTitle>{item.disabled ? "TBA" : "LIVE"}</Style.LiveTitle>
                      </CenterItem>
                    </Grid>
                  </Grid>
                </Style.GalleryItemContainer>

                {!item.disabled && (
                  <Style.ContainerExplore>
                    <Style.ItemName>SKATEBOARD</Style.ItemName>
                    <Style.ButtonDiscover>
                      <Grid container justifyContent="space-between">
                        <Grid item>EXPLORE</Grid>
                      </Grid>
                    </Style.ButtonDiscover>
                  </Style.ContainerExplore>
                )}
              </Style.GalleryItem>
            ))}
          </Style.GalleryWrap>
        </Style.GalleryWrapContainer>
      </CenterItem>
    </Style.Root>
  );
};

export default HomeComponent;
