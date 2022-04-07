import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();
const port = 3001;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../public"));

const DROPS = [
  {
    id: 0,
    collections: [
      {
        name: "Isotile",
        contract: "0x31eaa2e93d7afd237f87f30c0dbd3adeb9934f1b",
      },
    ],
  },
];

app.get(
  "/drop/:drop",
  async (req: Request, res: Response): Promise<Response> => {
    const drop = DROPS[req.params.drop];

    return res.status(200).send({
      ...drop,
    });
  }
);

app.get(
  "/drop/:drop/:address",
  async (req: Request, res: Response): Promise<Response> => {
    const drop = DROPS[req.params.drop as any as number];
    const address = req.params.address;

    let data = {};
    for (let collection of drop.collections) {
      const resq = await axios.get(
        `https://api.opensea.io/api/v1/assets?owner=${address}&asset_contract_address=${collection.contract}&order_direction=desc&offset=0&limit=20`
      );

      data[collection.name] = {
        ...data[collection.name],
        ...resq.data.assets,
      };
    }

    return res.status(200).send({
      ...data,
    });
  }
);

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
