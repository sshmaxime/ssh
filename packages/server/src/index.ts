import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();
const port = 3001;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../public"));

type Collection = {
  name: string;
  contract: string;
};

const COLLECTIONS: { [collectionName: string]: Collection } = {
  Sublimes: {
    name: "Sublimes",
    contract: "0x116aebbad1c8226c80f9f0cb4e255540a0f7afd9",
  },
};

const DROPS = [
  {
    name: "#DROP 0",
    collections: [COLLECTIONS.Sublimes],
  },
];

const fakeAnswer = {
  Sublimes: [
    {
      id: 825,
      img: "https://lh3.googleusercontent.com/iUN-rqbSEW97A_YNFiUeKuIoQRtIP08w8st9GnBqsQiydLaiF68pGDP4gx-URYmEph_SqXumjZj3TRGxPIFQBR9ZWxDZicur50a8hA=s0",
    },
    {
      id: 437,
      img: "https://lh3.googleusercontent.com/nlO5vgcrUqgqPlHHrQHrlA5ZsXg2hIxkJkzr72oK9KU9cNojTO8HAxWCOH06xNw0R5_ZocxNuXhLHwbHC282uz63pNnjfQd-mABKEA=s0",
    },
    {
      id: 108,
      img: "https://lh3.googleusercontent.com/-JDl1IBKkvQtOJKApygolCMXCV09SDAftc5IhqO585oFXvV-XhpaOFEI_WJFJdTJT6l8ypxMb-FlkQGPRNNPN4enIFJoAIpDA2Y7=s0",
    },
  ],
};

app.get("/drop/:drop", async (req: Request, res: Response): Promise<Response> => {
  const drop = DROPS[req.params.drop];

  return res.status(200).send({
    ...drop,
  });
});

app.get("/drop/:drop/:address", async (req: Request, res: Response): Promise<Response> => {
  const drop = DROPS[req.params.drop as any as number];
  const address = req.params.address;

  // let data = {};
  // for (let collection of drop.collections) {
  //   const resq = await axios.get(
  //     `https://api.opensea.io/api/v1/assets?owner=${address}&asset_contract_address=${collection.contract}&order_direction=desc&offset=0&limit=20`
  //   );

  //   data[collection.name] = {
  //     ...data[collection.name],
  //     ...resq.data.assets,
  //   };
  // }

  return res.status(200).send(fakeAnswer);
});

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error.message}`);
}
