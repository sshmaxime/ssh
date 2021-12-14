import { FC, Fragment } from "react";

import AF1x from "../_components/projects/AF1x";

// images
import af1x_exemple from "../../assets/images/Punk_7804.png";

import Punk_3011 from "../../assets/images/Punk_3011.png";
import Punk_5217 from "../../assets/images/Punk_5217.png";
import Punk_7804 from "../../assets/images/Punk_7804.png";
import CPunk_7804 from "../../assets/images/CPunk_7804.png";
import Punk_8857 from "../../assets/images/Punk_8857.png";
import Punk_dogg from "../../assets/images/Punk_dogg.png";
import artist from "../../assets/images/aliendope.jpeg";

const AF1xCryptoPunks: FC = () => {
  return (
    <AF1x
      view_1={{
        title: "CryptoPunks",
        headline: "WEAR YOUR PUNKS",
        image: af1x_exemple,
        info: {
          mintPrice: "0.1 ETH",
        },
        description: (
          <Fragment>
            Having a CryptoPunks is cool .. but rocking it on your shoes is
            waaay cooler !
          </Fragment>
        ),

        pastilles: [
          {
            title: "0 / 10.000",
            description: "Minted supply / Total supply",
            color: "#caffbf",
            size: 2,
          },
          {
            title: "AF1x",
            description: "This NFT is a part of the AF1x ecosystem.",
            color: "#a0c4ff",
          },
          {
            title: "IRL",
            description: "This NFT holds a physical object.",
            color: "#ffdab9",
          },
          {
            title: "KEY",
            description: "This NFT is a key to the SSH ecosystem.",
            color: "#cfbaf0",
          },
        ],
      }}
      view_2={{
        image_step_1: CPunk_7804,
        image_step_2: af1x_exemple,
        image_step_3: af1x_exemple,
      }}
      view_3={{
        image_about: af1x_exemple,
        text_about: (
          <Fragment>
            The AF1x project is a first step into building the bridge between
            our life on earth and the metaverse.
            <br />
            <br />
            It aims at showing the world what can be done through the power of
            blockchain technology.
            <br />
            <br />
            Buying an AF1x, gives you the opportunity to join an exclusive group
            of like minded people, working together to make this world a better
            place.
          </Fragment>
        ),
        image_artist: artist,
        text_artist: <Fragment>blabla</Fragment>,
        info_nft: {
          launchDate: "11/22/2021",
          currentlyMinted: 0,
          totalSupply: "10,000",
          owners: 135,
        },
      }}
      view_4={{
        image_1: Punk_3011,
        image_2: Punk_5217,
        image_3: Punk_7804,
        image_4: Punk_8857,
        image_5: Punk_dogg,
      }}
      view_5={[
        {
          percent: "0.1% (minted)",
          title: "AIRDROP",
          description: (
            <Fragment>
              Once this project kicked of a bit, we will airdrop 1x AF1xWorld to
              those first supporters.
            </Fragment>
          ),
          done: false,
        },
        {
          percent: "1%",
          title: "XXX",
          description: <Fragment></Fragment>,
          done: false,
        },
        {
          percent: "2%",
          title: "XXX",
          description: <Fragment></Fragment>,
          done: false,
        },
        {
          percent: "3%",
          title: "XXX",
          description: <Fragment></Fragment>,
          done: false,
        },
        {
          percent: "4%",
          title: "XXX",
          description: <Fragment></Fragment>,
          done: false,
        },
        {
          percent: "5%",
          title: "REDEEM",
          description: (
            <Fragment>
              Until that milestone, AF1xCryptoPunks could be minted but not
              redeemed. It's now thing of the past. You can now redeem your
              AF1xCryptoPunks by burning your NFT !
            </Fragment>
          ),
          done: false,
        },
      ]}
    />
  );
};

export default AF1xCryptoPunks;
