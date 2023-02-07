![Image Demo](resources/image-demo.png)

# PREMIER

> Premier is a side project I started after working for a year at Bancor.

The project is currently live on:

**Goerli**:

`Store.sol`: [0x8ae7E7B2a1c96A3FACbd916d7EE2BCF3ddF586d0](https://goerli.etherscan.io/address/0x8ae7e7b2a1c96a3facbd916d7ee2bcf3ddf586d0)

`Drop#0.sol`: [0xd3b610ecD4f903599AfCd33De9473154662cc053](https://goerli.etherscan.io/address/0xd3b610ecD4f903599AfCd33De9473154662cc053)

## Architecture

The project is splitted into 4 packages:

- **Frontend**
- **Backend**
- **Contracts**
- **Typings**

### Typings

Stack: [ Typescript ]

The typing package is a fully independent package that contains all the basic typings and informations that needs to be shared accross the whole project.

### Contracts

Project Dependencies: [ Typings ]

Stack: [ **Typecript**, **Hardhat**, **Ethers**, **IPFS** ]

The contract package contains everything related to smart contracts. It includes smart-contracts, deployment scripts but also additionals scripts for the deployment of metadata to IPFS. On top of that, by taking advantages of the typechain package, typescript bindings are generated for our smart-contracts and can be used anywhere.

### Server

Dependencies: [ Typings, Contracts ]

Stack: [ **Typecript**, Express, **Websocket** ]

At the root of the backend ecosystem the server handles what the frontend needs in order to work properly. It make uses of Websocket to improve connectivity and reactivness.

**Env file exemple:**

```
SERVER__NODE_ENV=development
SERVER__CHAIN_ID=1337

SERVER__PORT=4000

SERVER__CORS_ORIGIN=http://localhost:3000
SERVER__WEB3_ENDPOINT=http://127.0.0.1:8545
SERVER__IPFS_ENDPOINT=http://127.0.0.1:8080

SERVER__OPENSEA_API_KEY=
```

### App

Dependencies: [ Typings, Contracts ]

Stack: [ **Typescript**, **React**, **Vite**, **RTK Query**, **React Three Fiber** (Three.js) ]

The frontend includes a lot of thing. Made in React it leverages RTK Query to improve caching and code management. The 3D is handled by React Three Fiber, it was quite a challenged at first as I've never worked with 3D before. I migrated the app from CRA to Vite.

**Env file exemple:**

```
FAST_REFRESH=false

VITE__PORT=3000
VITE__NODE_ENV=development
VITE__SERVER_URL=http://localhost:4000
VITE__WEBSOCKET_SERVER_URL=ws://localhost:4000
VITE__BLOCKEXPLORER=https://goerli.etherscan.io
VITE__OPENSEA_URL=https://testnets.opensea.io/assets/goerli
```
