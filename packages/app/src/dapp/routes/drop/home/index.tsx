import { FC, useState } from "react";

import { sceneRefType } from "@/_3d/scenes/skate_1";
import { Drop } from "@sshlabs/typings";
import { ethers } from "ethers";

import Style from "./style";
import { Grid } from "@mui/material";

import ImgWave from "@/_utils/assets/images/wave.png";
import CenterItem from "@/_utils/components/grid/centerItem";

const HomeComponent: FC = ({}) => {
  const [hover, setHover] = useState(0);

  const abc = [
    {
      texture: "https://i.pinimg.com/originals/f4/6b/ee/f46beec83182962c9505734e663deefa.jpg",
      disabled: false,
    },
    {
      texture: "",
      disabled: true,
    },
    {
      texture: "",
      disabled: true,
    },
    {
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
                {!item.disabled && <Style.GalleryItemTitle>DROP #0</Style.GalleryItemTitle>}
              </Style.GalleryItem>
            ))}
          </Style.GalleryWrap>
        </Style.GalleryWrapContainer>
      </CenterItem>
    </Style.Root>
  );
};

export default HomeComponent;
