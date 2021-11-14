import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// styles
import Style from "./style";

import { Grid, Stack } from "@mui/material";

import image1 from "../../../assets/images/Punk_3011.png";
import image2 from "../../../assets/images/Punk_5217.png";
import image3 from "../../../assets/images/Punk_8857.png";
import image4 from "../../../assets/images/Punk_dogg.png";

type props = {
  title: string;
  secondTitle: string;
  smallTitle?: string;
};

const FullHeightContainer: FC<props> = ({
  children,
  title,
  secondTitle,
  smallTitle,
}) => {
  return (
    <Style.Root>
      <Grid container>
        <Grid item md={12} lg={6}>
          <Style.Container>
            <>
              <Style.Title>{title}</Style.Title>
              <Style.SecondTitle2>{secondTitle}</Style.SecondTitle2>
              <div style={{ height: "20px" }} />
              <Style.SecondTitle3>{smallTitle}</Style.SecondTitle3>
              <div style={{ height: "50px" }} />
              <Style.Button>Check our projects !</Style.Button>
            </>
          </Style.Container>
        </Grid>

        <Grid
          item
          sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
          lg={6}
        >
          <Style.A>
            <Style.B>
              <Style.Img src={image1} alt="" />
            </Style.B>
            <Style.C>
              <Style.Img src={image2} alt="" />
            </Style.C>
            <Style.D>
              <Style.Img src={image3} alt="" />
            </Style.D>
            <Style.E>
              <Style.Img src={image4} alt="" />
            </Style.E>
          </Style.A>
        </Grid>
      </Grid>
    </Style.Root>
  );
};

export default FullHeightContainer;
