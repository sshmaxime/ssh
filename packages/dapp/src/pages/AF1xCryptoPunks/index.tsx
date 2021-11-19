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

const AF1xCryptoPunks: FC = () => {
  return (
    <AF1x
      view_1={{
        title: "CryptoPunks",
        image: af1x_exemple,
        description: (
          <Fragment>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining.
          </Fragment>
        ),

        pastilles: [
          { title: "0 / 10.000", color: "#caffbf", size: 2 },
          { title: "AF1x", color: "#a0c4ff", size: 1 },
          { title: "IRL", color: "#ffdab9", size: 1 },
        ],
      }}
      view_2={{
        image_step_1: CPunk_7804,
        image_step_2: af1x_exemple,
        image_step_3: af1x_exemple,
      }}
      view_3={{
        image_reference: af1x_exemple,
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
          title: "AF1x Airdrop",
          description: (
            <Fragment>
              Once the project kicked of a bit and 10 AF1xCryptoPunks have been
              minted, we will airdrop 2x AF1xWorld to those 10 first supporters.
            </Fragment>
          ),
          done: false,
        },
        {
          percent: "1%",
          title: "???",
          description: <Fragment>???</Fragment>,
          done: false,
        },
        {
          percent: "25%",
          title: "Redeem",
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
